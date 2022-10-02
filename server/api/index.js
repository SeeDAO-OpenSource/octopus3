const router = require('express').Router();
const activityRoute = require('./routers/activity/activity.route');
const memberRoute = require('./routers/member/member.route');

router.use('/activity',activityRoute);
router.use('/members',memberRoute);

module.exports = router;