const router = require('express').Router();
const controller = require('./member.controller');

router.route('/wallet/sign').post(controller.signWallet);
router.route('/wallet/login').post(controller.walletLogin);
router.route('/discord/login').post(controller.discordLogin);
router.route('/update').post(controller.memberUpdate);
// router.route('/update').post(controller.memberUpdate);

module.exports = router;
