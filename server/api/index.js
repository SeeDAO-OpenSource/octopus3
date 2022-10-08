const router = require('express').Router();
const activityRoute = require('./routers/activity/activity.route');
const memberRoute = require('./routers/member/member.route');
const notificationRoute = require('./routers/notification/notification.route');

router.use('/activity',activityRoute);
router.use('/members',memberRoute);
router.use('/notifications',notificationRoute);

module.exports = router;