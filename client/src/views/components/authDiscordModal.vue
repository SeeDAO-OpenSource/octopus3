<template>
  <div>
    <b-modal ref="authDiscordModal" centered>
      <p class="modal-text" align="center">
        {{ $t("binding-wallet-first-text") }}<br /><br />
      </p>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-3">
          <img :src="getDiscordUserAvatar" alt="Discord Avatar" width="100%" />
        </div>
        <div class="col-7">
          <h5 class="modal-text" align="left">
            <br />
            {{ $t("discord-id")}}<br /><br />
            {{ getDiscordUserInfo.username }}#{{ getDiscordUserInfo.discriminator }}<br />
          </h5>
        </div>
      </div>
      <br />
      <center>
        <br />
        <button class="d-flex align-items-center btn btn-primary" disabled v-if="isLogining === 1">
          <font color="white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-loader spin mr-2">
                  <line x1="12" y1="2" x2="12" y2="6"></line>
                  <line x1="12" y1="18" x2="12" y2="22"></line>
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                  <line x1="2" y1="12" x2="6" y2="12"></line>
                  <line x1="18" y1="12" x2="22" y2="12"></line>
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>&nbsp;&nbsp;{{ $t("wallet-binding") }}
          </font>
        </button>
        <button class="d-flex align-items-center btn btn-primary" @click="initConnectWallet()" v-else>
          <font color="white">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20" height="20"
              viewBox="0 0 501.333 501.333" style="enable-background: new 0 0 501.333 501.333" xml:space="preserve">
              <g>
                <g>
                  <path fill="#ffffff" d="M448,41.6H22.4C9.6,41.6,0,51.2,0,64v373.333c0,12.8,9.6,22.4,22.4,22.4H448c29.867,0,53.333-23.467,53.333-52.267V94.934
              C501.333,65.067,476.8,41.6,448,41.6z M455.467,298.667H274.134V201.6h181.333V298.667z M455.467,156.8h-204.8
              c-12.8,0-22.4,9.6-22.4,22.4v142.933c0,12.8,9.6,22.4,22.4,22.4h204.8v62.933c0,4.267-3.2,7.467-7.467,7.467H44.8V87.466H448
              c4.267,0,7.467,3.2,7.467,7.467V156.8z" />
                </g>
              </g>
              <g>
                <g>
                  <path fill="#ffffff" d="M328.534,228.267h-7.467c-12.8,0-22.4,9.6-22.4,22.4c0,12.8,9.6,22.4,22.4,22.4h7.467c12.8,0,22.4-9.6,22.4-22.4
              C350.934,237.867,341.334,228.267,328.534,228.267z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>&nbsp;&nbsp;{{ $t("wallet-binding") }}
          </font>
        </button>
      </center>
      <template #modal-footer>
        <div></div>
      </template>
    </b-modal>
    <div v-if="isConnecting">
      <vue-metamask userMessage="msg" @onComplete="onComplete"> </vue-metamask>
    </div>
  </div>
</template>
  
<script>
import VueMetamask from "vue-metamask"
import ethers from "@/config/ethers.helper"

import { mapGetters, mapActions } from "vuex"
import {
  CONNECT_WALLET,
  SWITCH_NETWORK
} from "@/store/wallet.module"
import {
  GET_DISCORD_USER_INFO,
  GET_DISCORD_USER_AVATAR,
  WALLET_DISCONNECT,
  WALLET_SIGN,
  WALLET_LOGIN,
  DISCORD_LOGIN
} from '@/store/auth.module';

export default {
  computed: {
    ...mapGetters([GET_DISCORD_USER_INFO, GET_DISCORD_USER_AVATAR]),
    ...mapActions([CONNECT_WALLET, SWITCH_NETWORK, WALLET_LOGIN, WALLET_SIGN, WALLET_DISCONNECT, DISCORD_LOGIN])
  },
  components: {
    VueMetamask
  },
  data() {
    return {
      isAlertLoginFailed: false,
      isLogining: 0,
      isConnecting: false,
      wallet: {
        message: "",
        metaMaskAddress: "",
        netID: -1,
        type: "",
        web3: {
          givenProvider: null
        }
      }
    }
  },
  mounted() {
    if (this.$store.state.wallet.wallet.metaMaskAddress === "") {
      this.$refs.authDiscordModal.show()
    }
  },
  methods: {
    initConnectWallet() {
      this.isAlertLoginFailed = false;
      this.isLogining = 1
      this.isConnecting = true
    },

    switchNetwork() {
      ethers.switchNetwork()
    },

    disconnect() {
      this.wallet = {
        message: "",
        metaMaskAddress: "",
        netID: -1,
        type: "",
        web3: {
          givenProvider: null
        }
      }
      this.$store.dispatch(CONNECT_WALLET, this.wallet).then(() => {
        this.$store.dispatch(WALLET_DISCONNECT)
      })
      this.isConnecting = false
      this.isLogining = 0
    },

    async onComplete(data) {
      if (data !== null) {
        this.wallet = data
        await this.$store.dispatch(CONNECT_WALLET, this.wallet);
        await this.switchNetwork()
        const nonce = await this.$store.dispatch(WALLET_SIGN, this.wallet.metaMaskAddress);
        const message = `Login to SeeDAO with the no.${nonce} arm of Octopus3`;
        const sig = await ethers.signMessage(message, this.wallet.metaMaskAddress, `${nonce}`)
        try {
          await this.$store.dispatch(WALLET_LOGIN, {
            msg: message,
            wallet: this.wallet.metaMaskAddress, sig
          });
          await this.$store.dispatch(DISCORD_LOGIN, {
            wallet: this.wallet.metaMaskAddress,
          })
          this.isLogining = 2;
          this.isConnecting = false
          this.$router.push("/")
        } catch (e) {
          this.isAlertLoginFailed = true;
          this.disconnect();
        }
      }
    },
  }
}
</script>
  