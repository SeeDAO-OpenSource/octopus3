const memberService = require('./member.service');
const reqResponse = require('../../../cors/responseHandler');

module.exports = {

  signWallet: async (req, res) => {
    try {
      const wallet = req.body;
      memberService
        .signWallet(wallet)
        .then((result) => {
          res
            .status(201)
            .send(
              reqResponse.successResponse(201, 'signWallet', result)
            );
        })
        .catch(() => {
          res.status(402).send(reqResponse.errorResponse(402));
        });
    } catch (error) {
      console.error(error);
      res.status(502).send(reqResponse.errorResponse(502));
    }
  },

  memberUpdate: async (req, res) => {
    try {
      const data = req.body;
      memberService
        .memberUpdate(data.wallet, data)
        .then((result) => {
          res
            .status(201)
            .send(
              reqResponse.successResponse(201, 'memberUpdate', result)
            );
        })
        .catch(() => {
          res.status(405).send(reqResponse.errorResponse(405));
        });
    } catch (error) {
      console.error(error);
      res.status(502).send(reqResponse.errorResponse(502));
    }
  },

  discordLogin: async (req, res) => {
    try {
      const data = req.body;
      memberService
        .discordLogin(data)
        .then((result) => {
          res
            .status(201)
            .send(
              reqResponse.successResponse(201, 'discordLogin', result)
            );
        })
        .catch(() => {
          res.status(405).send(reqResponse.errorResponse(405));
        });
    } catch (error) {
      console.error(error);
      res.status(502).send(reqResponse.errorResponse(502));
    }
  },

  walletLogin: async (req, res) => {
    try {
      const wallet = req.body;
      memberService
        .walletLogin(wallet)
        .then((result) => {
          res
            .status(201)
            .send(
              reqResponse.successResponse(201, 'walletLogin', result)
            );
        })
        .catch(() => {
          res.status(405).send(reqResponse.errorResponse(405));
        });
    } catch (error) {
      console.error(error);
      res.status(502).send(reqResponse.errorResponse(502));
    }
  },

  auth: async (req, res, next) => {
    const auth = req.get('authorization');
    try {
      if (auth === undefined) {
        throw new Error('InvalidAuthenticationToken: Access token is empty');
      }
      // services
      memberService
        .validateToken(auth)
        .then(() => next())
        .catch((error) => {
          console.log('Auth error: ', error);
          res.status(401).send(reqResponse.errorResponse(401));
        });
    } catch (error) {
      console.log('Auth error: ', error);
      console.log('auth: ', auth);
      res.status(502).send(reqResponse.errorResponse(502));
    }
  },
};
