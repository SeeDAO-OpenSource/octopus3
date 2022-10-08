const memberModel = require('./member.model');
const memberUtils = require('./member.utils');

module.exports = {
  discordLogin: async (data) => {
    const member = await memberModel.updateMemberDiscordByWallet(
      data.wallet,
      data.discord
    );
    return { member };
  },

  signWallet: async (wallet) => {
    const results = await memberModel.findMemberByWallet(wallet.wallet);
    if (results === null || results === undefined) {
      await memberModel.createMemberByWallet(wallet.wallet);
    }
    const nonce = memberUtils.randomNonce();
    await memberModel.updateNonce(wallet.wallet, nonce);
    const member = await memberModel.findMemberByWallet(wallet.wallet);
    return { nonce: member.nonce };
  },

  walletLogin: (data) => {
    return new Promise((resolve, reject) => {
      memberUtils
        .verifyNonce(data.msg, data.wallet, data.sig)
        .then(() => {
          const token = memberUtils.getJWT(data.wallet);
          const now = new Date().getTime();
          memberModel
            .updateMemberByWallet(data.wallet, { lastLogin: now })
            .then((member) => {
              resolve({ member, token });
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  memberUpdate: (wallet, query) => {
    return new Promise((resolve, reject) => {
      memberModel
        .updateMemberByWallet(wallet, query)
        .then((member) => {
          resolve(member);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  validateToken: (auth) => {
    return new Promise((resolve, reject) => {
      const tokenArr = auth.split(' ');
      const token = tokenArr[1];
      const decoded = memberUtils.verifyJWT(token);
      memberModel
        .findMemberByWallet(decoded.wallet)
        .then(() => resolve({ token }))
        .catch(() => reject(new Error('token is invalid.')));
    });
  },
};
