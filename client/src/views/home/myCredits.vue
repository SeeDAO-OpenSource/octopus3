<template>
  <div class="layout-px-spacing">
    <portal to="breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">{{ $t('home') }}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>{{ $t('my-credits') }}</span>
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
                <h3>{{ $t('my-credits') }}</h3>
              </div>
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                TODO<br />
                1. 活跃度计算<br />
                2. 呈现历史积分走势<br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-unique-visitors">
                  <div class="widget-heading">
                    <h5>Unique Visitors</h5>
                    <div class="task-action">
                      <b-dropdown variant="icon-only" toggle-tag="a" :right="true">
                        <template #button-content>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-horizontal">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </template>
                        <b-dropdown-item>View</b-dropdown-item>
                        <b-dropdown-item>Update</b-dropdown-item>
                        <b-dropdown-item>Download</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </div>
                  <div class="widget-content">
                    <apexchart v-if="unique_visitor_options" height="350" type="bar" :options="unique_visitor_options"
                      :series="unique_visitor_series"></apexchart>
                  </div>
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
import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/components/tabs-accordian/custom-tabs.scss';

import { mapGetters, mapActions } from 'vuex';
import { GET_WALLET_SHORT_ADDRESS } from '@/store/wallet.module';
import '@/assets/sass/widgets/widgets.scss';

export default {
  computed: {
    unique_visitor_options() {
      const is_dark = this.$store.state.is_dark_mode;
      return {
        chart: { toolbar: { show: false } },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ['transparent'] },
        colors: is_dark ? ['#5c1ac3', '#ffbb44'] : ['#5c1ac3', '#d6b007'],
        dropShadow: { enabled: true, opacity: 0.3, blur: 1, left: 1, top: 1, color: '#515365' },
        plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 10 } },
        legend: { position: 'bottom', horizontalAlign: 'center', fontSize: '14px', markers: { width: 12, height: 12 }, itemMargin: { horizontal: 0, vertical: 8 } },
        grid: { borderColor: is_dark ? '#191e3a' : '#e0e6ed' },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisBorder: { show: true, color: is_dark ? '#3b3f5c' : '#e0e6ed' }
        },
        yaxis: {
          tickAmount: 6
          /*axisBorder: { show: true, color: is_dark ? '#3b3f5c' : '#e0e6ed' }*/
        },
        fill: {
          type: 'gradient',
          gradient: { shade: is_dark ? 'dark' : 'light', type: 'vertical', shadeIntensity: 0.3, inverseColors: false, opacityFrom: 1, opacityTo: 0.8, stops: [0, 100] }
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          y: {
            formatter: function (val) {
              return val;
            }
          }
        }
      };
    },
    ...mapGetters([GET_WALLET_SHORT_ADDRESS]),
    ...mapActions([]),
  },
  data() {
    return {
      //unique visitors
      unique_visitor_series: [
        { name: 'Direct', data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63] },
        { name: 'Organic', data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70] }
      ],
      markPriceUpdateTime: 0,
      items: [],
      columns: [],
      table_option: {
        total_rows: 0,
        current_page: 1,
        page_size: 20,
        search_text: '',
      },
      meta: {},
    };
  },
  watch: {
    table_option: {
      handler: function () {
        this.get_meta();
      },
      deep: true,
    },
  },
  mounted() { },
  methods: {


  },
};
</script>
