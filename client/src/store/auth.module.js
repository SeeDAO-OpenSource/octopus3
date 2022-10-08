import ApiService from '@/services/api.service';
import JWTService from '@/services/jwt.service';
import DiscordService from '@/services/discord.service';

// Actions
export const UPDATE_NICKNAME = 'updateNickname';
export const VERIFY_CODE = 'verifyCode';
export const EMAIL_AUTH = 'emailAuth';
export const WALLET_DISCONNECT = 'walletDisconnect';
export const DISCORD_LOGIN = 'discordLogin';
export const WALLET_LOGIN = 'walletLogin';
export const WALLET_SIGN = 'walletSign';
export const AUTH_DISCORD_USER = 'authDiscordUser';
export const FETCH_DISCORD_USER_INFO = 'fetchDiscordUserInfo';

// Setters
export const SET_DISCORD_TOKEN = 'setDiscordToken';
export const SET_DISCORD_USER = 'setDiscordUser';
export const SET_DISCORD_USER_AVATAR = 'setDiscordUserAvatar';
export const SET_WALLET_SIGN_NONCE = 'setWalletSignNonce';
export const SET_MEMBER = 'setMember';

// Getters
export const GET_MEMBER = 'getMember';
export const GET_DISCORD_AUTH_LINK = 'getDiscordAuthLink';
export const GET_DISCORD_USER_INFO = 'getDiscordUserInfo';
export const GET_DISCORD_USER_AVATAR = 'getDiscordUserAvatar';

const state = {
  member: null,
  discord: {
    member: {
      nonce: -1,
    },
    auth: {
      client_id: DiscordService.getClientId(),
      redirect_uri: DiscordService.getRedirectUrl(),
      response_type: 'token',
      scope: 'identify guilds',
    },
    token: {
      access_token: '',
      expires_in: '',
      scope: '',
      token_type: '',
    },
    user: {
      accent_color: '',
      avatar: '',
      avatar_decoration: '',
      banner: '',
      banner_color: '',
      discriminator: '',
      flags: -1,
      id: '',
      locale: '',
      mfa_enabled: false,
      premium_type: -1,
      public_flags: -1,
      username: '',
    },
    avatar: '',
  },
};

const actions = {
  [UPDATE_NICKNAME](context, data){
    return new Promise((resolve, reject) => {
      ApiService.post('/api/members/update', data)
        .then((result) => {
          context.commit(SET_MEMBER, result.data.data);
          resolve(result.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  [VERIFY_CODE](context, data){
    return new Promise((resolve, reject) => {
      ApiService.post('/api/notifications/mail/verify', data)
        .then((result) => {
          context.commit(SET_MEMBER, result.data.data);
          resolve(result.data.data);
        })
        .catch((error) => reject(error));
    });

  },
  [EMAIL_AUTH](context, data) {
    return new Promise((resolve, reject) => {
      ApiService.post('/api/notifications/mail/auth', data)
        .then((result) => {
          console.log('result::', result);
          resolve(result.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  [DISCORD_LOGIN](context, wallet) {
    return new Promise((resolve, reject) => {
      ApiService.post('/api/members/discord/login', {
        discord: state.discord.user,
        ...wallet,
      })
        .then((result) => {
          context.commit(SET_MEMBER, result.data.data.member);
          resolve(result.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  [WALLET_LOGIN](context, data) {
    return new Promise((resolve, reject) => {
      ApiService.post('/api/members/wallet/login', data)
        .then((result) => {
          if (result.data.data.token) {
            JWTService.saveToken(result.data.data.token);
          }
          context.commit(SET_MEMBER, result.data.data.member);
          resolve(result.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  [WALLET_DISCONNECT]() {
    JWTService.destroyToken();
  },
  [WALLET_SIGN](context, wallet) {
    return new Promise((resolve, reject) => {
      ApiService.post('/api/members/wallet/sign', { wallet })
        .then((result) => {
          const nonce = result.data.data.nonce;
          resolve(nonce);
        })
        .catch((error) => reject(error));
    });
  },
  [AUTH_DISCORD_USER](context, token) {
    context.commit(SET_DISCORD_TOKEN, token);
    return new Promise((resolve, reject) => {
      DiscordService.getUser(token.token_type, token.access_token)
        .then((user) => {
          context.commit(SET_DISCORD_USER, user);
          DiscordService.getAvatar(user.id, user.avatar)
            .then((avatar) => {
              context.commit(SET_DISCORD_USER_AVATAR, avatar);
              resolve(user);
            })
            .catch((err) => reject(err));
        })
        .catch((error) => reject(error));
    });
  },
};

const mutations = {
  [SET_MEMBER](state, member) {
    state.member = member;
  },
  [SET_DISCORD_TOKEN](state, token) {
    state.discord.token = token;
  },
  [SET_DISCORD_USER](state, user) {
    state.discord.user = user;
  },
  [SET_DISCORD_USER_AVATAR](state, avatar) {
    state.discord.avatar = avatar;
  },
  [SET_WALLET_SIGN_NONCE](state, nonce) {
    state.member.nonce = nonce;
  },
};

const getters = {
  [GET_MEMBER](state){
    return state.member;
  },
  [GET_DISCORD_USER_INFO](state) {
    return state.discord.user;
  },
  [GET_DISCORD_USER_AVATAR](state) {
    return state.discord.avatar;
  },
  [GET_DISCORD_AUTH_LINK](state) {
    const params = new URLSearchParams();
    const keys = Object.keys(state.discord.auth);
    keys.forEach((k) => {
      params.append(k, state.discord.auth[k]);
    });
    return `${DiscordService.getAuthUrl()}?${params
      .toString()
      .replace(/%3A/gi, ':')
      .replace(/%2F/gi, '/')}`;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
