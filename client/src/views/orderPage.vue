<template>
  <div class="">
    <portal to="breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Dashboard </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>Orders pages</span>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </portal>

    <div class="">
      <div class="layout-top-spacing">
        <div id="tabsSimple">
          <div class="statbox panel box box-shadow">
            <div class="panel-body simple-tab">
              <b-tabs>
                <b-tab title="Orders Today" active>
                  <h3>&nbsp;&nbsp;&nbsp;Open Orders</h3>
                  <br/>
                  <open-orders :orders="getOpenOrders" ></open-orders>
                  <hr/>
                  <h3>&nbsp;&nbsp;&nbsp;Done Orders Today</h3>
                  <br/>
                  <done-orders :orders="getDoneOrdersToday"></done-orders>
                </b-tab>
                <b-tab title="Historical Orders">
                  <h3>&nbsp;&nbsp;&nbsp;Historical Orders</h3>
                  <br/>
                  <historical-orders :orders="getDoneOrders"></historical-orders>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/sass/scrollspyNav.scss";
import "@/assets/sass/components/tabs-accordian/custom-tabs.scss";
import OpenOrders from "./openOrders.vue";
import HistoricalOrders from "./historicalOrders.vue";
import DoneOrders from "./doneOrders.vue";

import { mapGetters, mapActions } from "vuex";
import {
  FETCH_OPEN_ORDERS,
  FETCH_DONE_ORDERS,
  FETCH_DONE_ORDERS_TODAY,
  GET_OPEN_ORDERS,
  GET_DONE_ORDERS,
  GET_DONE_ORDERS_TODAY,
} from "@/store/orders.module";

// import highlight from "@/components/plugins/highlight.vue";
export default {
  //   metaInfo: { title: "Tabs" },
  components: {
    // highlight,
    OpenOrders,
    DoneOrders,
    HistoricalOrders,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store
      .dispatch(FETCH_OPEN_ORDERS, {
        portfolioId: "62794c52e276ee9d59f56b39",
        size: 99999,
      })
      .then(() => {
        this.$store
          .dispatch(FETCH_DONE_ORDERS, {
            portfolioId: "62794c52e276ee9d59f56b39",
            size: 99999,
          })
          .then(() => {
            this.$store.dispatch(FETCH_DONE_ORDERS_TODAY, {
              portfolioId: "62794c52e276ee9d59f56b39",
              size: 99999,
            });
          });
      });
  },
  methods: {},
  computed: {
    ...mapGetters([GET_OPEN_ORDERS, GET_DONE_ORDERS, GET_DONE_ORDERS_TODAY]),
    ...mapActions([FETCH_OPEN_ORDERS, FETCH_DONE_ORDERS, FETCH_DONE_ORDERS_TODAY]),
  },
};
</script>
