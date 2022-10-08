const ethers = require('ethers');
const jwt = require('jsonwebtoken');

const SERVER_KEYWORD = process.env.SERVER_KEYWORD;
const NONCE_MAX = 88888888;
const NONCE_MIN = 66666666;

module.exports = {
  randomNonce: () => {
    return Math.round(Math.random() * (NONCE_MAX - NONCE_MIN + 1) + NONCE_MIN);
  },
  verifyNonce: (msg, wallet, sig) => {
    return new Promise((resolve, reject) => {
      try {
        const address = ethers.utils.verifyMessage(msg, sig);
        if (wallet == address) {
          resolve(address);
        } else {
          throw 'Login failed';
        }
      } catch (error) {
        reject(error);
      }
    });
  },

  getJWT: (wallet, keyword) => {
    if (keyword === undefined) {
      return jwt.sign({ wallet }, SERVER_KEYWORD, {
        // expiresIn: '60 days',
      });
    }
    return jwt.sign({ wallet }, keyword, {
      // expiresIn: '60 days',
    });
  },
  
  verifyJWT: (token, keyword) => {
    if (keyword === undefined) {
      return jwt.verify(token, SERVER_KEYWORD);
    }
    return jwt.verify(token, keyword);
  },
  


};

