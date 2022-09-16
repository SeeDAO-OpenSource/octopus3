<template>
  <div>
    <b-modal ref="connectWalletModal" centered>
      <p class="modal-text" align="center">
        {{ $t("connect-wallet-first-text") }}
      </p>
      <center>
        <br />
        <button
          class="d-flex align-items-center btn btn-primary"
          @click="initConnectWallet()"
        >
          <font color="white">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 501.333 501.333"
              style="enable-background: new 0 0 501.333 501.333"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    fill="#ffffff"
                    d="M448,41.6H22.4C9.6,41.6,0,51.2,0,64v373.333c0,12.8,9.6,22.4,22.4,22.4H448c29.867,0,53.333-23.467,53.333-52.267V94.934
			C501.333,65.067,476.8,41.6,448,41.6z M455.467,298.667H274.134V201.6h181.333V298.667z M455.467,156.8h-204.8
			c-12.8,0-22.4,9.6-22.4,22.4v142.933c0,12.8,9.6,22.4,22.4,22.4h204.8v62.933c0,4.267-3.2,7.467-7.467,7.467H44.8V87.466H448
			c4.267,0,7.467,3.2,7.467,7.467V156.8z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    fill="#ffffff"
                    d="M328.534,228.267h-7.467c-12.8,0-22.4,9.6-22.4,22.4c0,12.8,9.6,22.4,22.4,22.4h7.467c12.8,0,22.4-9.6,22.4-22.4
			C350.934,237.867,341.334,228.267,328.534,228.267z"
                  />
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
              <g></g></svg
            >&nbsp;&nbsp;{{ $t("connect-wallet") }}</font
          >
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
import { CONNECT_WALLET, SWITCH_NETWORK } from "@/store/wallet.module"

export default {
  computed: {
    ...mapGetters([]),
    ...mapActions([CONNECT_WALLET, SWITCH_NETWORK])
  },
  components: {
    VueMetamask
  },
  data() {
    return {
      isConnecting: false,
    }
  },
  mounted() {
    if (this.$store.state.wallet.wallet.metaMaskAddress === "") {
      this.$refs.connectWalletModal.show()
    }
  },
  methods: {
    initConnectWallet() {
      this.isConnecting = true
    },
    async onComplete(data) {
      if (data !== null) {
        this.$store.dispatch(CONNECT_WALLET, data).then(() => {
          ethers.switchNetwork().then((netId) => {
            this.$store.dispatch(SWITCH_NETWORK, netId).then(() => {
              this.$refs.connectWalletModal.hide()
            })
          })
        })
      }
    }
  }
}
</script>
