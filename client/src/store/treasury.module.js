import { ethers } from "ethers"
import erc20 from "@/config/erc20.helper"
import governor from "@/config/governor.helper"
import ethersService from "@/services/ethers.service"
import priceService from "@/services/price.service"


export const TREASURY_ADDRESS = governor.contractAddress()
export const TREASURY_TOKEN_HOLDINGS_URL = `https://polygonscan.com/tokenholdings?a=${TREASURY_ADDRESS}`

// Actions
export const FETCH_TREASURY_BALANCE = "fetchTreasuryBalance"
export const FETCH_CRYPTOS_PRICE = "fetchCryptosPrice"

// Setters
export const SET_TREASURY_BALANCE = "setTreasuryBalance"
export const SET_TREASURY_VALUE = "setTreasuryValue"
export const SET_TREASURY_TOTAL = "setTreasuryTotal"
export const SET_CRYPTOS_PRICE = "setCryptosPrice"
export const SET_TREASURY_UPDATED_TIME = "setTreasuryUpdatedTime"

// Getters
export const GET_TREASURY_BALANCE = "getTreasuryBalance"
export const GET_TREASURY_VALUE = "getTreasuryValue"
export const GET_USDC_VALUE = "getUSDCValue"
export const GET_USDT_VALUE = "getUSDTValue"
export const GET_NOT_USDC_USDT_VALUE = "getNotUSDCUSDTValue"
export const GET_TREASURY_TOTAL = "getTreasuryTotal"
export const GET_TREASURY_UPDATED_TIME = "getTreasuryUpdatedTime"

const state = {
  balances: [],
  prices: [],
  treasury: [],
  total: "",
  updatedTime: 0,
}

const getters = {
  [GET_TREASURY_BALANCE](state) {
    return state.balances
  },
  [GET_TREASURY_VALUE](state) {
    return state.treasury
  },
  [GET_USDC_VALUE](state) {
    return state.treasury.find((t) => t.symbol.toLowerCase() === "usdc")
  },
  [GET_USDT_VALUE](state) {
    return state.treasury.find((t) => t.symbol.toLowerCase() === "usdt")
  },
  [GET_TREASURY_UPDATED_TIME](state)
  {
    return state.updatedTime

  },
  [GET_NOT_USDC_USDT_VALUE](state) {
    return state.treasury.filter(
      (t) =>
        t.symbol.toLowerCase() !== "usdc" || t.symbol.toLowerCase() !== "usdt"
    )
  },
  [GET_TREASURY_TOTAL](state) {
    return state.total
  }
}

const actions = {
  [FETCH_CRYPTOS_PRICE](context, balances) {
    return new Promise((resolve, reject) => {
      priceService
        .getPrice()
        .then((prices) => {
          context.commit(SET_CRYPTOS_PRICE, prices)
          let treasury = []
          let total = 0
          balances.forEach((b) => {
            const price = prices.find(
              (p) => p.symbol.toLowerCase() === b.symbol.toLowerCase()
            )
            const balanceValue = Number(b.value) * price.current_price
            treasury.push({
              name: b.name,
              symbol: b.symbol,
              price: price.current_price.toString(),
              volume: b.value,
              balance: Number(balanceValue.toPrecision(12)).toString()
            })
            total = total + balanceValue
          })
          context.commit(SET_TREASURY_VALUE, treasury)
          context.commit(
            SET_TREASURY_TOTAL,
            Number(total.toPrecision(12)).toString()
          )
          context.commit(SET_TREASURY_UPDATED_TIME, new Date())
          resolve(prices)
        })
        .catch((error) => reject(error))
    })
  },
  [FETCH_TREASURY_BALANCE](context, wallet) {
    return new Promise((resolve, reject) => {
      if (wallet.web3.givenProvider !== null) {
        let balances = []
        ethersService
          .getERC20Balances(wallet.web3.givenProvider, TREASURY_ADDRESS)
          .then((erc20balances) => {
            balances = erc20balances
            const provider = new ethers.providers.Web3Provider(
              wallet.web3.givenProvider
            )
            provider.pollingInterval = 12000
            provider
              .getBalance(TREASURY_ADDRESS)
              .then((balance) => {
                balances.push({
                  name: erc20.nativeToken().name,
                  symbol: erc20.nativeToken().symbol,
                  value: ethers.utils.formatEther(balance.toString())
                })
                context.commit(SET_TREASURY_BALANCE, balances)
                context.commit(SET_TREASURY_UPDATED_TIME, new Date())
                resolve(balances)
              })
              .catch((error) => reject(error))
          })
          .catch((error) => reject(error))
      } else {
        reject("No Provider")
      }
    })
  }
}

const mutations = {
  [SET_TREASURY_BALANCE](state, balances) {
    state.balances = balances
  },
  [SET_CRYPTOS_PRICE](state, prices) {
    state.prices = prices
  },
  [SET_TREASURY_VALUE](state, treasury) {
    state.treasury = treasury
  },
  [SET_TREASURY_TOTAL](state, total) {
    state.total = total
  },
  [SET_TREASURY_UPDATED_TIME](state, time){
    state.updatedTime = time
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
