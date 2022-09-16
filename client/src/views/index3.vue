<template>
  <div class="layout-px-spacing dash_2">
    <!-- <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Analytics</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>

            <ul class="navbar-nav flex-row ml-auto">
                <li class="nav-item more-dropdown">
                    <b-nav-dropdown ref="ddl_settings" right toggle-tag="a" class="custom-dropdown-icon" variant="normal">
                        <template #button-content>
                            <span>Settings</span>
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
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </template>
                        <li><a class="dropdown-item" data-value="Settings" href="javascript:void(0);" @click="$refs.ddl_settings.hide()">Settings</a></li>
                        <li><a class="dropdown-item" data-value="Mail" href="javascript:void(0);" @click="$refs.ddl_settings.hide()">Mail</a></li>
                        <li><a class="dropdown-item" data-value="Print" href="javascript:void(0);" @click="$refs.ddl_settings.hide()">Print</a></li>
                        <li><a class="dropdown-item" data-value="Download" href="javascript:void(0);" @click="$refs.ddl_settings.hide()">Download</a></li>
                        <li><a class="dropdown-item" data-value="Share" href="javascript:void(0);" @click="$refs.ddl_settings.hide()">Share</a></li>
                    </b-nav-dropdown>
                </li>
            </ul>
        </portal> -->
    <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Middle Office</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Dashboard</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>
    <div class="row layout-top-spacing">
      <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-statistics">
          <div class="widget-heading">
            <h5>Account P & L</h5>
            <!-- <div class="task-action">
                            <b-dropdown variant="icon-only" toggle-tag="a" :right="true">
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

                                <b-dropdown-item>View</b-dropdown-item>
                                <b-dropdown-item>Download</b-dropdown-item>
                            </b-dropdown>
                        </div> -->
          </div>
          <div class="widget-content">
            <div class="row">
              <div class="col-6">
                <div class="w-detail">
                  <p class="w-title">Incoming P & L</p>
                  <p class="w-stats">$ + 423,964</p>
                </div>
                <apexchart
                  v-if="total_visit_options"
                  height="58"
                  type="line"
                  :options="total_visit_options"
                  :series="total_visit_series"
                ></apexchart>
              </div>
              <div class="col-6">
                <div class="w-detail">
                  <p class="w-title">Trading P & L</p>
                  <p class="w-stats">$ + 7,929</p>
                </div>
                <apexchart
                  v-if="paid_visit_options"
                  height="58"
                  type="line"
                  :options="paid_visit_options"
                  :series="paid_visit_series"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-expenses">
          <div class="widget-heading">
            <h5>Unrealized Positions</h5>
            <div class="task-action">
              <!-- <b-dropdown variant="icon-only" toggle-tag="a" :right="true">
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

                                <b-dropdown-item>This Week</b-dropdown-item>
                                <b-dropdown-item>Last Week</b-dropdown-item>
                                <b-dropdown-item>Last Month</b-dropdown-item>
                            </b-dropdown> -->
            </div>
          </div>

          <div class="widget-content">
            <p class="value">
              $ 45,141
              <span>updated: 2022.4.26 </span>
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
                class="feather feather-trending-up"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </p>
            <div class="w-progress-stats">
              <b-progress
                variant="gradient-secondary"
                :value="57"
                :min="0"
                :max="100"
              ></b-progress>
              <div class="w-icon">57%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-total-balance">
          <div class="widget-content">
            <div class="account-box">
              <div class="info">
                <div class="inv-title">
                  <h2>Total Value</h2>
                </div>
                <div class="inv-balance-info">
                  <h2 class="inv-balance">$ 41,741.42</h2>
                  <span class="inv-stats balance-credited">+ 30%</span>
                </div>
              </div>
              <div class="acc-action">
                <!-- <div>
                                    <a href="javascript:void(0);"
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
                                            <line x1="5" y1="12" x2="19" y2="12"></line></svg
                                    ></a>
                                    <a href="javascript:void(0);"
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
                                            class="feather feather-credit-card"
                                        >
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line></svg
                                    ></a>
                                </div> -->
                <a href="javascript:void(0);">Account Ledgers </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-unique-visitors">
          <div class="widget-heading">
            <h5>Monthly Performance</h5>
            <div class="task-action">
              <!-- <b-dropdown variant="icon-only" toggle-tag="a" :right="true">
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

                                <b-dropdown-item>View</b-dropdown-item>
                                <b-dropdown-item>Update</b-dropdown-item>
                                <b-dropdown-item>Download</b-dropdown-item>
                            </b-dropdown> -->
            </div>
          </div>

          <div class="widget-content">
            <apexchart
              v-if="unique_visitor_options"
              height="350"
              type="bar"
              :options="unique_visitor_options"
              :series="unique_visitor_series"
            ></apexchart>
          </div>
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-visitor-by-browser">
          <div class="widget-heading">
            <h5>Account assets</h5>
          </div>
          <div class="widget-content">
            <div class="browser-list">
              <div class="w-icon icon-fill-primary">
                <img src="@/assets/images/cryptos.svg" width="70%" class="feather feather-compass" alt="fiatcoin" />
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6>Cryptos</h6>
                  <p class="browser-count">65%</p>
                </div>
                <div class="w-browser-stats">
                  <b-progress
                    variant="gradient-primary"
                    :value="65"
                    :min="0"
                    :max="100"
                  ></b-progress>
                </div>
              </div>
            </div>
            <div class="browser-list">
              <div class="w-icon icon-fill-danger">
                <img src="@/assets/images/stablecoin.svg" width="70%" class="feather feather-compass" alt="fiatcoin" />
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6>Stable Coins (USDT, USDC, BUSD)</h6>
                  <p class="browser-count">25%</p>
                </div>

                <div class="w-browser-stats">
                  <b-progress
                    variant="gradient-danger"
                    :value="35"
                    :min="0"
                    :max="100"
                  ></b-progress>
                </div>
              </div>
            </div>
            <div class="browser-list">
              <div class="w-icon icon-fill-warning">
                <img src="@/assets/images/fiatcoin.svg" width="55%" class="feather feather-compass" alt="fiatcoin" />
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6>Fiat Currencies (USD, EUR)</h6>
                  <p class="browser-count">0%</p>
                </div>
                <div class="w-browser-stats">
                  <b-progress
                    variant="gradient-warning"
                    :value="0"
                    :min="0"
                    :max="100"
                  ></b-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

import "@/assets/sass/widgets/widgets.scss";

export default {
  metaInfo: { title: "Widgets" },
  data() {
    return {
      //Statistics
      total_visit_series: [{ data: [21, -9, 36, 12, 44, 25, 59, 41, 66, 25] }],

      paid_visit_series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],

      //unique visitors
      unique_visitor_series: [
        {
          name: "YTD",
          data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
        },
        {
          name: "Monthly",
          data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
        },
      ],
    };
  },
  computed: {
    //Statistics
    total_visit_options() {
      const is_dark = this.$store.state.is_dark_mode;
      return {
        chart: {
          sparkline: { enabled: true },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 1,
            blur: 3,
            color: "#009688",
            opacity: 0.7,
          },
        },
        stroke: { curve: "smooth", width: 2 },
        markers: { size: 0 },
        colors: ["#009688"],
        grid: { padding: { top: 0, bottom: 0, left: 0 } },
        tooltip: {
          theme: is_dark ? "dark" : "light",
          x: { show: false },
          y: {
            title: {
              formatter: function formatter() {
                return "";
              },
            },
          },
        },
        responsive: [
          {
            breakPoint: 576,
            options: {
              chart: { height: 95 },
              grid: { padding: { top: 45, bottom: 0, left: 0 } },
            },
          },
        ],
      };
    },
    paid_visit_options() {
      const is_dark = this.$store.state.is_dark_mode;
      return {
        chart: {
          sparkline: { enabled: true },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            color: "#e2a03f",
            opacity: 0.7,
          },
        },
        stroke: { curve: "smooth", width: 2 },
        markers: { size: 0 },
        colors: ["#e2a03f"],
        grid: { padding: { top: 0, bottom: 0, left: 0 } },
        tooltip: {
          theme: is_dark ? "dark" : "light",
          x: { show: false },
          y: {
            title: {
              formatter: function formatter() {
                return "";
              },
            },
          },
        },
        responsive: [
          {
            breakPoint: 576,
            options: {
              chart: { height: 95 },
              grid: { padding: { top: 35, bottom: 0, left: 0 } },
            },
          },
        ],
      };
    },

    //unique visitors
    unique_visitor_options() {
      const is_dark = this.$store.state.is_dark_mode;
      return {
        chart: { toolbar: { show: false } },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ["transparent"] },
        colors: ["#5c1ac3", "#ffbb44"],
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 1,
          left: 1,
          top: 1,
          color: "#515365",
        },
        plotOptions: {
          bar: { horizontal: false, columnWidth: "55%", borderRadius: 10 },
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "14px",
          markers: { width: 12, height: 12 },
          itemMargin: { horizontal: 0, vertical: 8 },
        },
        grid: { borderColor: is_dark ? "#191e3a" : "#e0e6ed" },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: { show: true, color: is_dark ? "#3b3f5c" : "#e0e6ed" },
        },
        yaxis: {
          tickAmount: 6,
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: is_dark ? "dark" : "light",
            type: "vertical",
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
          },
        },
        tooltip: {
          theme: is_dark ? "dark" : "light",
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      };
    },

    //Followers
    followers_options() {
      const is_dark = this.$store.state.is_dark_mode;
      let option = {
        chart: { sparkline: { enabled: true } },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#4361ee"],
        //labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: { min: 0 },
        tooltip: { theme: is_dark ? "dark" : "light", x: { show: false } },
      };
      if (is_dark) {
        option["fill"] = {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100],
          },
        };
      }
      return option;
    },
    //Referral
    referral_options() {
      const is_dark = this.$store.state.is_dark_mode;
      let option = {
        chart: { sparkline: { enabled: true } },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#e7515a"],
        //labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: { min: 0 },
        tooltip: { theme: is_dark ? "dark" : "light", x: { show: false } },
      };
      if (is_dark) {
        option["fill"] = {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100],
          },
        };
      }
      return option;
    },
    //Engagement
    engagement_options() {
      const is_dark = this.$store.state.is_dark_mode;
      let option = {
        chart: { sparkline: { enabled: true } },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#1abc9c"],
        //labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: { min: 0 },
        tooltip: { theme: is_dark ? "dark" : "light", x: { show: false } },
      };
      if (is_dark) {
        option["fill"] = {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100],
          },
        };
      }
      return option;
    },
  },
  mounted() {},
  methods: {},
};
</script>
