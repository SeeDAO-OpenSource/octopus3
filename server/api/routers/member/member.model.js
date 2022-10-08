const { Member } = require('./member.schema');

async function findMemberByWallet(wallet) {
  return await Member.findOne({ wallet });
}
async function createMemberByWallet(wallet) {
  const now = new Date().getTime();
  await new Member({
    wallet,
    created: now,
    updated: now,
  }).save();
  await Member.findOne(
    { wallet, created: now, updated: now },
    (err, result) => {
      if (err) return console.error(err);
      return result;
    }
  );
}

async function updateMemberDiscordByWallet(wallet, query) {
  const now = new Date().getTime();
  const discord = {
    id: query.id,
    username: query.username,
    discriminator: query.discriminator,
    avatar: query.avatar,
  };
  const result = await Member.findOneAndUpdate(
    { wallet },
    {
      discord,
      updated: now,
      lastLogin: now,
    },
    { new: true }
  );
  return result;
}

async function updateMemberByWallet(wallet, query) {
  const result = await Member.findOneAndUpdate({ wallet }, query, {
    new: true,
  });
  return result;
}

async function updateNonce(wallet, nonce) {
  await Member.findOneAndUpdate(
    { wallet },
    { nonce },
    { new: true },
    (err, result) => {
      if (err) return console.error(err);
      return result;
    }
  );
}

module.exports = {
  findMemberByWallet,
  createMemberByWallet,
  updateMemberDiscordByWallet,
  updateMemberByWallet,
  updateNonce,
};
