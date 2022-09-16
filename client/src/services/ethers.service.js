import { ethers } from "ethers"
import erc20Helper from "@/config/erc20.helper"
// import BN from "bn.js"

const ethersService = {
  getERC20Balances(lib, address) {
    return new Promise((resolve, reject) => {
      const tokens = erc20Helper.mainTokens()
      this.getERC20BalanceRecur(lib, address, tokens, [])
        .then((balances) => {
          resolve(balances)
        })
        .catch((error) => reject(error))
    })
  },
  getERC20BalanceRecur(lib, address, tokens, result) {
    return new Promise((resolve) => {
      if (tokens.length === 0) resolve(result)
      else {
        const token = tokens[0]
        const provider = new ethers.providers.Web3Provider(lib)
        const contract = new ethers.Contract(
          token.address,
          erc20Helper.erc20abi(),
          provider
        )
        contract
          .decimals()
          .then((digits) => {
            contract
              .balanceOf(address)
              .then((balance) => {
                result.push({
                  name: token.name,
                  symbol: token.symbol,
                  value: ethers.utils.formatUnits(balance, digits)
                })
                resolve(
                  this.getERC20BalanceRecur(
                    lib,
                    address,
                    tokens.slice(1),
                    result
                  )
                )
              })
              .catch(() =>
                resolve(
                  this.getERC20BalanceRecur(
                    lib,
                    address,
                    tokens.slice(1),
                    result
                  )
                )
              )
          })
          .catch(() =>
            resolve(
              this.getERC20BalanceRecur(lib, address, tokens.slice(1), result)
            )
          )
      }
    })
  }
}

export default ethersService
