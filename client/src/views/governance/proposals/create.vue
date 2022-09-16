<template>
  <div class="layout-px-spacing">
    <portal to="breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">{{ $t("governance") }}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>{{ $t("create-proposal") }}</span>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </portal>

    <div class="row layout-top-spacing">
      <div id="tabsSimple" class="col-lg-12 col-12 layout-spacing">
        <div class="statbox panel box box-shadow">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <h3>{{ $t("create-proposal") }}</h3>
                <br />
                <div class="row">
                  <div class="col-xl-6 col-md-12 col-sm-12 col-12">
                    <div class="select2">
                      <div
                        class="spinner-border text-success align-self-center loader-lg"
                        v-if="this.isWalletConnected() === false"
                      ></div>
                      <div v-else>
                        <p>{{ $t("proposal-type") }}</p>
                        <multiselect
                          v-model="newProposal.type"
                          :options="proposalOptions.type"
                          group-values="list"
                          group-label="group_name"
                          :placeholder="this.$t('select') + ' ...'"
                          track-by="name"
                          label="name"
                          :preselect-first="true"
                          selected-label=""
                          select-label=""
                          deselect-label=""
                          @input="afterSelectProposalType"
                        ></multiselect>
                      </div>
                    </div>
                    <div
                      class="select2"
                      v-if="newProposal.type.value === 'token-transfer'"
                    >
                      <br />
                      <p>{{ $t("transfer-token") }}</p>
                      <div
                        class="spinner-border text-success align-self-center loader-lg"
                        v-if="this.status.tokens.isLoading"
                      ></div>
                      <div v-else>
                        <multiselect
                          v-model="newProposal.token"
                          :options="proposalOptions.token"
                          :placeholder="this.$t('select') + ' ...'"
                          track-by="name"
                          label="name"
                          :preselect-first="true"
                          selected-label=""
                          select-label=""
                          deselect-label=""
                          @input="afterSelectTransferToken"
                        >
                          <template slot="singleLabel" slot-scope="{ option }">
                            <cryptoicon
                              v-if="option.value !== ''"
                              :symbol="option.value"
                              size="20"
                            /><span v-if="option.value !== ''"
                              >&nbsp;&nbsp;{{ option.name }}</span
                            ><span v-else>{{ option.name }}</span></template
                          >
                          <template slot="option" slot-scope="{ option }">
                            <cryptoicon
                              :symbol="option.value"
                              size="20"
                            />&nbsp;&nbsp;{{ option.name }}
                          </template>
                        </multiselect>
                      </div>
                    </div>
                    <div class="select2" v-if="newProposal.type.value === 'token-transfer' && newProposal.token.value !== ''">
                      <br />
                      <p>{{ $t("transfer-amount") }}</p>
                      <b-form-group>
                        <b-input
                          v-model="newProposal.token.amount"
                          placeholder="0.0"
                          @blur="fixTokenTransferAmount"
                          :class="[
                            this.isNotInvalidAmount() ||
                            newProposal.token.amount === ''
                              ? ''
                              : 'is-invalid'
                          ]"
                        ></b-input>
                        <b-form-invalid-feedback
                          v-if="newProposal.token.amount !== ''"
                          >{{
                            $t("amount-must-be-greater-than-zero")
                          }}</b-form-invalid-feedback
                        >
                        <p align="right">
                          {{ $t("treasury-maximum-available") }}:
                          {{
                            validAmount(
                              newProposal.token.amount,
                              this.balances.find(
                                (b) => newProposal.token.value === b.symbol
                              ).value
                            )
                          }}/{{
                            this.balances.find(
                              (b) => newProposal.token.value === b.symbol
                            ).value
                          }}
                          {{
                            this.balances.find(
                              (b) => newProposal.token.value === b.symbol
                            ).symbol
                          }}
                          &nbsp;(
                          {{
                            (
                              (100 *
                                Number(
                                  validAmount(
                                    newProposal.token.amount,
                                    this.balances.find(
                                      (b) =>
                                        newProposal.token.value === b.symbol
                                    ).value
                                  )
                                )) /
                              Number(
                                this.balances.find(
                                  (b) => newProposal.token.value === b.symbol
                                ).value
                              )
                            ).toFixed(2)
                          }}%)
                        </p>
                      </b-form-group>
                      <p>{{ $t("transfer-address") }}</p>
                      <b-form-group>
                        <b-input
                          v-model="newProposal.token.toAddr"
                          placeholder="0x000...00000"
                          :class="[
                            this.isNotInvalidAddress() ||
                            this.newProposal.token.toAddr.length === 0
                              ? ''
                              : 'is-invalid'
                          ]"
                        ></b-input>
                        <b-form-invalid-feedback
                          v-if="newProposal.token.toAddr.length > 0"
                          >{{
                            $t("invalid-wallet-address")
                          }}</b-form-invalid-feedback
                        >
                        <p align="right"></p>
                      </b-form-group>
                      <b-button
                        type="submit"
                        variant="primary"
                        :class="{
                          disabled:
                            !isNotInvalidAddress() || !isNotInvalidAmount()
                        }"
                        >{{ $t("create-proposal") }}
                      </b-button>
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
<style>
.select2 .multiselect__option--highlight {
  background: #fff;
  color: #4361ee;
}
.select2 .multiselect__option--selected {
  background-color: rgba(27, 85, 226, 0.23921568627450981);
  color: #4361ee;
  font-weight: normal;
}
.select2 .multiselect__option--disabled {
  background: inherit !important;
}
.select2 .multiselect__tag {
  color: #000;
  background: #e4e4e4;
}
.select2 .multiselect__tag-icon:after {
  color: #000 !important;
}
.select2 .multiselect__tag-icon:focus,
.select2 .multiselect__tag-icon:hover {
  background: inherit;
}
</style>
<script>
//excel export
import "@/assets/sass/scrollspyNav.scss"
import ethers from "@/config/ethers.helper"

import Multiselect from "vue-multiselect"
import "vue-multiselect/dist/vue-multiselect.min.css"
import erc20Helper from "@/config/erc20.helper"

import ConnectWalletModal from "@/views/components/connectWalletModal.vue"

import { mapGetters, mapActions } from "vuex"
import {
  // GET_TREASURY_BALANCE,
  // GET_TREASURY_TOTAL,
  // GET_TREASURY_VALUE,
  // TREASURY_TOKEN_HOLDINGS_URL,
  // GET_USDC_VALUE,
  // GET_USDT_VALUE,
  // GET_NOT_USDC_USDT_VALUE,
  // GET_TREASURY_UPDATED_TIME,
  FETCH_CRYPTOS_PRICE,
  FETCH_TREASURY_BALANCE
} from "@/store/treasury.module"

export default {
  computed: {
    ...mapGetters([]),
    ...mapActions([FETCH_CRYPTOS_PRICE, FETCH_TREASURY_BALANCE])
  },
  components: {
    ConnectWalletModal,
    Multiselect
  },
  data() {
    return {
      proposalOptions: {
        token: [],
        type: [
          {
            group_name:
              "=".repeat(5) +
              " " +
              this.$t("proposal-category-treasury") +
              " " +
              "=".repeat(5),
            list: [
              {
                name: this.$t("proposal-type-token-transfer"),
                value: "token-transfer"
              }
            ]
          },
          {
            group_name:
              "=".repeat(5) +
              " " +
              this.$t("proposal-category-credit") +
              " " +
              "=".repeat(5),
            list: [
              {
                name: this.$t("proposal-type-credit-distribution"),
                value: "credit-distrubution"
              }
            ]
          },
          {
            group_name:
              "=".repeat(5) +
              " " +
              this.$t("proposal-category-normal") +
              " " +
              "=".repeat(5),
            list: [
              {
                name: this.$t("proposal-type-general-proposal"),
                value: "general-proposal"
              }
            ]
          }
        ]
      },
      newProposal: {
        type: { name: this.$t("select") + " ...", value: "" },
        token: {
          name: this.$t("select") + " ...",
          value: "",
          amount: "",
          toAddr: ""
        }
      },
      options3: [
        { name: "orange" },
        { name: "white", $isDisabled: true },
        { name: "purple" }
      ],
      value: { name: "orange" },
      status: {
        tokens: {
          isLoading: false
        },
        isFetchTreasuryFinished: false
      },
      balances: [],
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
    this.initTokens()
    this.status.tokens.isLoading = true
    if (this.isWalletConnected()) {
      this.fetchTreasury()
    }
  },
  methods: {
    onlyLettersAndNumbers(str) {
      return /^[A-Za-z0-9]*$/.test(str)
    },
    isWalletConnected() {
      return (
        this.$store.state.wallet.wallet.metaMaskAddress !== "" &&
        this.$store.state.wallet.wallet.netID === ethers.masterNetId()
      )
    },
    fetchTreasury() {
      const wallet = this.$store.state.wallet.wallet
      if (wallet.web3.givenProvider !== null) {
        this.$store
          .dispatch(FETCH_TREASURY_BALANCE, wallet)
          .then((balances) => {
            this.status.tokens.isLoading = false
            this.balances = balances
          })
      } else {
        this.connectFirst = true
      }
    },
    afterSelectProposalType() {
      if (this.newProposal.type.value === "token-transfer") {
        this.status.isFetchTreasuryFinished = false
      }
    },
    afterSelectTransferToken() {
      if (this.newProposal.type.value === "token-transfer") {
        this.status.isFetchTreasuryFinished = false
      }
    },
    fixTokenTransferAmount() {
      const maxVal = this.balances.find(
        (b) => this.newProposal.token.value === b.symbol
      ).value
      console.log("maxVal:", maxVal)
      console.log(
        "this.newProposal.token.amount:",
        this.newProposal.token.amount
      )
      this.newProposal.token.amount = this.validAmount(
        this.newProposal.token.amount,
        maxVal
      )
    },
    validAmount(value, max) {
      if (value === "") return ""
      const val = Math.min(Number(value), Number(max))
      let validVal = 0
      if (val > validVal) {
        return val.toString()
      } else return validVal.toString()
    },
    isNotInvalidAmount() {
      return (
        Number(
          this.validAmount(
            this.newProposal.token.amount,
            this.balances.find((b) => this.newProposal.token.value === b.symbol)
              .value
          )
        ) > 0
      )
    },
    isNotInvalidAddress() {
      return (
        this.newProposal.token.toAddr.substring(0, 2) === "0x" &&
        this.newProposal.token.toAddr.length === 42 &&
        this.onlyLettersAndNumbers(this.newProposal.token.toAddr)
      )
    },
    initTokens() {
      this.proposalOptions.token = []
      this.proposalOptions.token.push({
        name: `${erc20Helper.nativeToken().symbol} (${
          erc20Helper.nativeToken().name
        })`,
        value: erc20Helper.nativeToken().symbol,
        amount: "",
        toAddr: ""
      })
      erc20Helper.mainTokens().forEach((token) => {
        this.proposalOptions.token.push({
          name: `${token.symbol} (${token.name})`,
          value: token.symbol,
          amount: "",
          toAddr: ""
        })
      })
    }
  }
}
</script>
