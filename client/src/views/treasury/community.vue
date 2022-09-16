<template>
  <div class="layout-px-spacing">
    <portal to="breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">{{ $t("treasury") }}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>{{ $t("community-treasury") }}</span>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </portal>

    <div class="row layout-top-spacing">
      <div class="col-12">
        <small v-if="getTreasuryUpdatedTime > 0"
          >{{ $t("last-updated") }}:
          {{ getTreasuryUpdatedTime.getFullYear() }}/{{
            getTreasuryUpdatedTime.getMonth() + 1
          }}/{{ getTreasuryUpdatedTime.getDate() }}&nbsp;{{
            String(getTreasuryUpdatedTime.getHours()).padStart(2, "0")
          }}:{{
            String(getTreasuryUpdatedTime.getMinutes()).padStart(2, "0")
          }}:{{
            String(getTreasuryUpdatedTime.getSeconds()).padStart(2, "0")
          }}&nbsp;&nbsp;(&nbsp;<timeago
            :datetime="getTreasuryUpdatedTime"
            :locale="$i18n.locale"
            :auto-update="60"
          ></timeago
          >&nbsp;)</small
        >
        <small v-else>{{ $t("updating") }} ...</small>
      </div>
    </div>

    <div class="row layout-top-spacing">
      <div id="tabsSimple" class="col-lg-6 col-12 layout-spacing">
        <div class="statbox panel box box-shadow">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <div class="row layout-top-spacing">
                  <div
                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
                  >
                    <div class="widget widget-wallet-balance">
                      <div class="widget-heading d-block">
                        <div class="wallet-usr-info">
                          <div class="usr-name">
                            <a :href="treasuryHoldingsUrl" target="_blank">
                              <span
                                ><img
                                  src="@/assets/images/polygon-logo.png"
                                  alt="polygon-logo"
                                  class="img-fluid"
                                />
                                {{ $t("onchain-info") }}</span
                              ></a
                            >
                          </div>
                          <div class="add">
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line
                                  x1="5"
                                  y1="12"
                                  x2="19"
                                  y2="12"
                                ></line></svg
                            ></span>
                          </div>
                        </div>
                        <div class="wallet-balance">
                          <p>{{ $t("treasury-balance") }}</p>
                          <h5 v-if="getTreasuryTotal === ''">
                            <div
                              class="spinner-border text-success align-self-center loader-sm"
                            >
                              Loading...
                            </div>
                          </h5>
                          <h5 v-else>
                            ~ <span class="w-currency">$</span>
                            {{ Number(getTreasuryTotal).toPrecision(2) }}
                          </h5>
                        </div>
                      </div>

                      <div class="widget-amount">
                        <div class="w-a-info funds-received mr-3">
                          <span
                            >USDC
                            <cryptoicon
                              symbol="usdc"
                              size="20"
                              class="float-right"
                            />
                          </span>
                          <p v-if="getUSDCValue !== undefined">
                            <span class="w-currency">$</span>
                            {{ Number(getUSDCValue.balance).toPrecision(3) }}
                          </p>
                          <p v-else>-</p>
                        </div>
                        <div class="w-a-info funds-spent">
                          <span
                            >USDT
                            <cryptoicon
                              symbol="usdt"
                              size="20"
                              class="float-right"
                          /></span>
                          <p v-if="getUSDTValue !== undefined">
                            <span class="w-currency">$</span>
                            {{ Number(getUSDTValue.balance).toPrecision(3) }}
                          </p>
                          <p v-else>-</p>
                        </div>
                      </div>

                      <div class="widget-content">
                        <div class="bills-stats mb-4">
                          <span>{{ $t("current-value") }} (USD)</span>
                        </div>
                        <div class="invoice-list">
                          <div class="inv-detail mb-4">
                            <div
                              class="info-detail-1"
                              v-for="(item, index) in getNotUSDCUSDTValue"
                              :key="index"
                            >
                              <p>
                                <cryptoicon
                                  :symbol="item.symbol"
                                  size="16"
                                  class="float-left"
                                />&nbsp;{{ item.symbol }}
                              </p>
                              <p>
                                <span class="w-currency">$</span>&nbsp;
                                <span class="bill-amount">{{
                                  Number(item.balance).toPrecision(3)
                                }}</span>
                              </p>
                            </div>
                          </div>
                          <div class="inv-action">
                            <b-button
                              tag="a"
                              variant="outline-secondary"
                              class="view-details"
                              >{{ $t("treasury-withdraw") }}</b-button
                            >
                            <b-button
                              tag="a"
                              variant="outline-success"
                              class="pay-now"
                              >{{ $t("treasury-transactions") }}</b-button
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tabsSimple" class="col-lg-6 col-12 layout-spacing">
        <div class="statbox panel box box-shadow">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <div class="row layout-top-spacing">
                  <div
                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
                  >
                    <div class="widget widget-transaction">
                      <div class="widget-heading">
                        <h5>{{ $t("treasury-tokens") }}</h5>
                        <div class="task-action">
                          <b-dropdown
                            variant="icon-only"
                            toggle-tag="a"
                            :right="true"
                          >
                            <template #button-content>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-more-horizontal"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </template>

                            <b-dropdown-item>{{
                              $t("import-token")
                            }}</b-dropdown-item>
                            <b-dropdown-item>{{
                              $t("remove-token")
                            }}</b-dropdown-item>
                          </b-dropdown>
                        </div>
                      </div>

                      <div
                        class="widget-content"
                        v-if="status.tokens.isLoading"
                      >
                        <center>
                          <div
                            class="spinner-border text-success align-self-center"
                          >
                            Loading...
                          </div>
                        </center>
                      </div>
                      <div class="widget-content" v-else>
                        <div
                          class="transactions-list"
                          v-for="(item, index) in getTreasuryBalance"
                          :key="index"
                        >
                          <div>
                            <cryptoicon
                              :symbol="item.symbol"
                              size="30"
                              class="float-left"
                            />&nbsp;&nbsp;&nbsp;
                            <div class="t-name">
                              <h4>{{ item.symbol }}</h4>
                              <p>{{ item.name }}</p>
                            </div>
                          </div>
                          <h4>{{ item.value }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ConnectWalletModal />
  </div>
</template>

<script>
import ConnectWalletModal from "@/views/components/connectWalletModal.vue"
import ethers from "@/config/ethers.helper"

import { mapGetters, mapActions } from "vuex"
import {
  GET_TREASURY_BALANCE,
  GET_TREASURY_TOTAL,
  GET_TREASURY_VALUE,
  TREASURY_TOKEN_HOLDINGS_URL,
  GET_USDC_VALUE,
  GET_USDT_VALUE,
  GET_NOT_USDC_USDT_VALUE,
  GET_TREASURY_UPDATED_TIME,
  FETCH_CRYPTOS_PRICE,
  FETCH_TREASURY_BALANCE
} from "@/store/treasury.module"

export default {
  computed: {
    ...mapGetters([
      GET_TREASURY_TOTAL,
      GET_TREASURY_VALUE,
      GET_USDC_VALUE,
      GET_USDT_VALUE,
      GET_TREASURY_UPDATED_TIME,
      GET_NOT_USDC_USDT_VALUE,
      GET_TREASURY_BALANCE
    ]),
    ...mapActions([FETCH_TREASURY_BALANCE, FETCH_CRYPTOS_PRICE])
  },
  components: {
    ConnectWalletModal
  },
  data() {
    return {
      isConnecting: false,
      status: {
        isConnected: false,
        tokens: {
          isLoading: true
        },
        balance: {
          isLoading: true
        }
      },
      updatedTime: 0,
      treasuryHoldingsUrl: TREASURY_TOKEN_HOLDINGS_URL,
      connectFirst: false,
      items: [],
      columns: [],
      table_option: {
        total_rows: 0,
        current_page: 1,
        page_size: 20,
        search_text: ""
      },
      meta: {}
    }
  },
  watch: {
     "$store.state.wallet.wallet.netID": function () {
      if (this.isWalletConnected()) {
        this.fetchTreasury()
      }
    }
  },
  mounted() {
    if (this.isWalletConnected()) {
      this.fetchTreasury()
    }
  },
  methods: {
    isWalletConnected() {
      return (
        this.$store.state.wallet.wallet.metaMaskAddress !== "" &&
        this.$store.state.wallet.wallet.netID === ethers.masterNetId()
      )
    },
    fetchTreasury() {
      const wallet = this.$store.state.wallet.wallet
      console.log("wallet:", wallet)
      if (wallet.web3.givenProvider !== null) {
        this.$store
          .dispatch(FETCH_TREASURY_BALANCE, wallet)
          .then((balances) => {
            this.status.tokens.isLoading = false
            this.$store.dispatch(FETCH_CRYPTOS_PRICE, balances).then(() => {
              this.status.balance.isLoading = false
              this.updatedTime = new Date()
            })
          })
      } else {
        this.connectFirst = true
      }
    }
  }
}
</script>
