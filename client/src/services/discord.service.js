import axios from 'axios';

const DISCORD_API_USERSELF = 'https://discordapp.com/api/v6/users/@me';
const DISCORD_CLIENT_ID = '1027413936938684467';
const DISCORD_AUTH_URL = 'https://discord.com/api/oauth2/authorize';
const DISCORD_AUTH_REDIRECT_URL = `${window.location.origin}/auth/discord`;
const DISCORD_CDN_AVATARS = 'https://cdn.discordapp.com/avatars';

const discordService = {
  getClientId() {
    return DISCORD_CLIENT_ID;
  },
  getAuthUrl() {
    return DISCORD_AUTH_URL;
  },
  getRedirectUrl() {
    return DISCORD_AUTH_REDIRECT_URL;
  },
  getUser(tokenType, accessToken) {
    return new Promise((resolve, reject) => {
      axios
        .get(DISCORD_API_USERSELF, {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => reject(error));
    });
  },

  getAvatar(userId, avatorId){
    return new Promise((resolve, reject) => {
      axios
        .get(`${DISCORD_CDN_AVATARS}/${userId}/${avatorId}`,{
          responseType: 'arraybuffer'
        })
        .then((res) => {
          resolve(`data:image/jpeg;base64,${Buffer.from(res.data, 'binary').toString('base64')}`);
        })
        .catch((error) => reject(error));
    });
  }
};

export default discordService;
