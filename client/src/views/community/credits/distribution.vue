<template>
  <div class="layout-px-spacing">
    <portal to="breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">{{ $t("community") }}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>{{ $t("credit-distribution") }}</span>
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
                <h3>{{ $t("credit-distribution") }}</h3>
                {{ getWalletShortAddress }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//excel export
import "@/assets/sass/scrollspyNav.scss"
import "@/assets/sass/components/tabs-accordian/custom-tabs.scss"

import { mapGetters, mapActions } from "vuex"
import { GET_WALLET_SHORT_ADDRESS } from "@/store/wallet.module"

export default {
  computed: {
    ...mapGetters([GET_WALLET_SHORT_ADDRESS]),
    ...mapActions([])
  },
  data() {
    return {
      portfolioId: "62794c52e276ee9d59f56b39",
      markPriceUpdateTime: 0,
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
    table_option: {
      handler: function () {
        this.get_meta()
      },
      deep: true
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
