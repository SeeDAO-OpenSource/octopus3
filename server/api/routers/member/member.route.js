const router = require('express').Router();
const controller = require('./activity.controller');

router.route('/login').post(controller.memberLogin);
router.route('/update').post(controller.memberUpdate);

module.exports = router;
