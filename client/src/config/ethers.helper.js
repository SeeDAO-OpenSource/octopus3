const MASTER_CHAIN_ID = 137

const ethersHelper = {

  async getBlockAverageTime(web3, span) {
    const times = []
    const currentNumber = await web3.eth.getBlockNumber()
    const firstBlock = await web3.eth.getBlock(currentNumber - span)
    let prevTimestamp = firstBlock.timestamp
  
    for (let i = currentNumber - span + 1; i <= currentNumber; i++) {
      const block = await web3.eth.getBlock(i)
      let time = block.timestamp - prevTimestamp
      prevTimestamp = block.timestamp
      times.push(time)
    }
    return Math.round(times.reduce((a, b) => a + b) / times.length)
  },

  network() {
    return {
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: `0x${Number(MASTER_CHAIN_ID).toString(16)}`
        }
      ]
    }
  },

  masterNetId() {
    return MASTER_CHAIN_ID
  },

  chainName(chainId) {
    if (chainId === 1) return "Mainnet"
    else if (chainId === 3) return "Ropsten"
    else if (chainId === 4) return "Rinkeby"
    else if (chainId === 5) return "Goerli"
    else if (chainId === 10) return "Optimism"
    else if (chainId === 42) return "Kovan"
    else if (chainId === 56) return "Binance Smart Chain"
    else if (chainId === 61) return "Ethereum Classic"
    else if (chainId === 62) return "Morden"
    else if (chainId === 137) return "Polygon"
    return "Unknown"
  },

  switchNetwork() {
    return new Promise((resolve, reject) => {
      window.ethereum
        .request(this.network())
        .then(() => {
          resolve(this.masterNetId())
        })
        .catch((error) => reject(error))
    })
  }
}

export default ethersHelper
