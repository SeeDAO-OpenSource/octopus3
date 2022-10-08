const notificationModel = require('./notification.model');
const notificationUtils = require('./notification.utils');

module.exports = {
  verifyAuthCode: async (data) => {
    const query = {
      wallet: data.wallet,
      email: data.email,
      data: JSON.stringify({ code: Number(data.code) }),
    };
    const result = await notificationModel.findNotification(query);
    if (result === null) {
      return { error: 'Auth Code is not correct.' };
    } else {
      return {
        error: '',
        wallet: data.wallet,
        update: { email: data.email },
      };
    }
  },

  sendAuthCode: async (data) => {
    const code = notificationUtils.randomCode();
    await notificationModel.removeOldNotifications();
    const result = await notificationModel.createNotification(
      data.wallet,
      'email',
      data.email,
      { code }
    );
    await notificationUtils.sendEmail(data.email, code);
    return { id: result._id };
  },
};
