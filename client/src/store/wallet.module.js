import { ethers } from 'ethers';

export const DISCORD_CLIENT_ID = '1027413936938684467';
export const DISCORD_AUTH_REDIRECT_URL = 'http://localhost:8080/auth/discord';

export const WALLET_ADDRESS = 'walletAddress';

// Actions
export const SIGN_NONCE = 'signNonce';
export const CONNECT_WALLET = 'connectWallet';
export const SWITCH_NETWORK = 'switchNetowrk';

// Setters
export const SET_WALLET = 'setWallet';
export const SET_CHAIN_ID = 'setChainId';
export const SET_PROVIDER = 'setProvider';

// Getters
export const GET_WALLET_SHORT_ADDRESS = 'getWalletShortAddress';
export const GET_WALLET_ADDRESS = 'getWalletAddress';
export const GET_ACTIVE = 'getActive';
export const GET_ACCOUNT = 'getAccount';
export const GET_CHAIN_ID = 'getChainId';

const state = {
  wallet: {
    message: '',
    metaMaskAddress: '',
    netID: -1,
    type: '',
    web3: {
      givenProvider: null,
    },
    provider: null,
  },
};

const getters = {
  [GET_ACCOUNT](state) {
    return state.wallet.metaMaskAddress;
  },
  [GET_ACTIVE](state) {
    return state.web3 !== null;
  },
  [GET_CHAIN_ID](state) {
    return state.wallet.netID;
  },
  [GET_WALLET_SHORT_ADDRESS](state) {
    const addr = state.wallet.metaMaskAddress;
    if (addr === undefined || addr === '') return '';
    return addr.slice(0, 5) + '...' + addr.slice(addr.length - 5, addr.length);
  },
  [GET_WALLET_ADDRESS](state) {
    return state.wallet.metaMaskAddress;
  },
};

const actions = {
  [SWITCH_NETWORK](context, chainId) {
    context.commit(SET_CHAIN_ID, chainId);
  },
  [CONNECT_WALLET](context, wallet) {
    if (wallet.type !== 'NO_LOGIN') {
      localStorage.setItem(WALLET_ADDRESS, wallet.metaMaskAddress);
      context.commit(SET_WALLET, wallet);
      if (wallet.web3.givenProvider !== null) {
        const provider = new ethers.providers.Web3Provider(
          wallet.web3.givenProvider
        );
        provider.pollingInterval = 12000;
        context.commit(SET_PROVIDER, provider);
      }
    } else {
      localStorage.removeItem(WALLET_ADDRESS);
    }
    return wallet;
  },
};

const mutations = {
  [SET_WALLET](state, wallet) {
    state.wallet = wallet;
  },
  [SET_CHAIN_ID](state, id) {
    state.wallet.netID = id;
  },
  [SET_PROVIDER](state, provider) {
    state.provider = provider;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
