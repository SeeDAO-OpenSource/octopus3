const CRYPTO_PRICE_API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const priceService = {
  getPrice() {
    return new Promise((resolve, reject) => {
      fetch(CRYPTO_PRICE_API)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    })
  }
}

export default priceService
