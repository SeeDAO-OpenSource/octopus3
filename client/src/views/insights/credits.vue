<template>
  <div class="layout-px-spacing">
    <portal to="breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">{{ $t('insights') }}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>{{ $t('credits-insights') }}</span>
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
                <h3>{{ $t('credits-insights') }}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-12 layout-spacing">
                <div class="panel-body icon-tab">
                  <b-tabs nav-class="mb-3 mt-3">
                    <b-tab active>
                      <template #title>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-bar-chart-2 mb-1">
                          <line x1="18" y1="20" x2="18" y2="10"></line>
                          <line x1="12" y1="20" x2="12" y2="4"></line>
                          <line x1="6" y1="20" x2="6" y2="14"></line>
                        </svg>&nbsp;{{ $t('score-current-season') }}
                      </template>
                      <div class="row">
                        <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                          <div class="widget widget-top-selling-products">
                            <div class="widget-heading">
                              <h5>{{ $t('guilds-projects-scores-current-season') }}</h5>
                            </div>
                            <div class="widget-content">
                              <b-table-simple responsive>
                                <b-thead>
                                  <b-tr>
                                    <b-th>
                                      <div class="th-content">{{ $t('guild-project')}}</div>
                                    </b-th>
                                    <b-th>
                                      <div class="th-content">{{ $t('people-num') }}</div>
                                    </b-th>
                                    <b-th>
                                      <div class="th-content th-heading">{{ $t('score-pending') }}</div>
                                    </b-th>
                                    <b-th>
                                      <div class="th-content th-heading">{{ $t('score-paid') }}</div>
                                    </b-th>
                                    <b-th>
                                      <div class="th-content">{{ $t('score-sum') }}</div>
                                    </b-th>
                                  </b-tr>
                                </b-thead>
                                <b-tbody>
                                  <b-tr>
                                    <b-td>
                                      <div class="td-content d-flex">
                                        <div class="align-self-center">
                                          <p class="prd-category text-success">{{ $t('guild-and-subproject') }}</p>
                                          <p class="prd-name">{{ $t('developers-guild')}}</p>
                                        </div>
                                      </div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content"><span class="pricing">
                                          <p style="font-size:18px;" class="">5</p>
                                        </span></div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content"><span class="discount-pricing">
                                          <p style="font-size:18px;" class="">0</p>
                                        </span></div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content">
                                        <p style="font-size:18px;" class="">88550</p>
                                      </div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content">
                                        <p style="font-size:18px;" class="">88550</p>
                                      </div>
                                    </b-td>
                                  </b-tr>
                                  <b-tr>
                                    <b-td>
                                      <div class="td-content d-flex">
                                        <div class="align-self-center">
                                          <p class="prd-category text-warning">{{ $t('project-and-activity') }}</p>
                                          <p class="prd-name">{{ $t('seeshore-dali')}}</p>
                                        </div>
                                      </div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content"><span class="pricing">
                                          <p style="font-size:18px;" class="">5</p>
                                        </span></div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content"><span class="discount-pricing">
                                          <p style="font-size:18px;" class="">0</p>
                                        </span></div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content">
                                        <p style="font-size:18px;" class="">88550</p>
                                      </div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content">
                                        <p style="font-size:18px;" class="">88550</p>
                                      </div>
                                    </b-td>
                                  </b-tr>
                                  <b-tr>
                                    <b-td>
                                      <div class="td-content d-flex">
                                        <div class="align-self-center">
                                          <p class="prd-category text-info">{{ $t('cityhall') }}</p>
                                          <p class="prd-name">{{ $t('cityhall')}}</p>
                                        </div>
                                      </div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content"><span class="pricing">$88.00</span></div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content"><span class="discount-pricing">$20.00</span></div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content">66</div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content">
                                        <a href="javascript:void(0);" class="text-warning"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-chevrons-right">
                                            <polyline points="13 17 18 12 13 7"></polyline>
                                            <polyline points="6 17 11 12 6 7"></polyline>
                                          </svg>
                                          Ads</a>
                                      </div>
                                    </b-td>
                                  </b-tr>
                                  <b-tr>
                                    <b-td>
                                      <div class="td-content d-flex">
                                        <div class="align-self-center">
                                          <p class="prd-category text-secondary">{{ $t('incubator') }}</p>
                                          <p class="prd-name">{{ $t('incubator')}}</p>
                                        </div>
                                      </div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content"><span class="pricing">$110.00</span></div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content"><span class="discount-pricing">$33.00</span></div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content">35</div>
                                    </b-td>
                                    <b-td>
                                      <div class="td-content">
                                        <a href="javascript:void(0);" class="text-info"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-chevrons-right">
                                            <polyline points="13 17 18 12 13 7"></polyline>
                                            <polyline points="6 17 11 12 6 7"></polyline>
                                          </svg>
                                          Email</a>
                                      </div>
                                    </b-td>
                                  </b-tr>
                                </b-tbody>
                              </b-table-simple>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                          <div class="row">
                            <div class="widget widget-expenses col-11">
                              <div class="widget-heading">
                                <h5>{{ $t('budget-status')}}</h5>
                                <div class="task-action">
                                  <b-dropdown variant="icon-only" toggle-tag="a" :right="true">
                                    <template #button-content>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-more-horizontal">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </template>
                                    <b-dropdown-item>{{ $t('budget-history') }}</b-dropdown-item>
                                    <b-dropdown-item>{{ $t('budget-proposal') }}</b-dropdown-item>
                                    <b-dropdown-item>{{ $t('about-budget') }}</b-dropdown-item>
                                  </b-dropdown>
                                </div>
                              </div>
                              <div class="widget-content">
                                <p class="value">
                                  7795554
                                  <span>/ 12500000</span>
                                </p>
                                <div class="w-progress-stats">
                                  <b-progress variant="gradient-secondary"
                                    :value="Math.round(100*(7795554.0/12500000.0))" :min="0" :max="100"></b-progress>
                                  <div class="w-icon">{{ Math.round(100*(7795554.0/12500000.0)) }}%</div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <br />
                            </div>
                            <div class="widget col-11">
                              <div class="widget-heading">
                                <h5>{{ $t('score-distribution')}}</h5>
                              </div>
                              <div class="widget-content">
                                <apexchart v-if="sales_donut_options" height="460" type="donut"
                                  :options="sales_donut_options" :series="sales_donut_series"></apexchart>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-tab>
                    <b-tab>
                      <template #title>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-search mb-1">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>&nbsp;{{ $t('score-historical') }}
                      </template>
                      <p class="">
                        TBD
                      </p>
                    </b-tab>
                    <b-tab>
                      <template #title>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-star mb-1">
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                          </polygon>
                        </svg>{{ $t('seedao-score-intro') }}
                      </template>
                      <p class="">
                        TBD
                      </p>
                    </b-tab>
                  </b-tabs>
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
//excel export
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/components/tabs-accordian/custom-tabs.scss';

import { mapGetters, mapActions } from 'vuex';
import { GET_WALLET_SHORT_ADDRESS } from '@/store/wallet.module';

export default {
  computed: {
    //Sales by Category
    sales_donut_options() {
      const is_dark = this.$store.state.is_dark_mode;
      let option = {
        chart: {},
        dataLabels: { enabled: false },
        expandOnClick: is_dark ? false : true,
        stroke: { show: true, width: 25, colors: is_dark ? '#0e1726' : '#fff' },
        colors: is_dark ? ['#1075F3', '#f0ad4e', '#5bc0de', '#805DCA', '#1075F3'] : ['#1075F3', '#f0ad4e', '#5bc0de', '#805DCA', '#805DCA'],
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '12px',
          markers: { width: 10, height: 10 },
          height: 50,
          offsetY: 20,
          itemMargin: { horizontal: 8, vertical: 0 }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: true,
                name: { show: true, fontSize: '22px', fontFamily: 'Nunito, sans-serif', offsetY: -10 },
                value: {
                  show: true,
                  fontSize: '18px',
                  fontFamily: 'Nunito, sans-serif',
                  color: is_dark ? '#bfc9d4' : undefined,
                  offsetY: 16,
                  formatter: function (val) {
                    return val;
                  }
                },
                total: {
                  show: true,
                  label: this.$t('score-sum-short'),
                  color: '#888ea8',
                  fontSize: '29px',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                  }
                }
              }
            }
          }
        },
        labels: [this.$t('cityhall'), this.$t('project'), this.$t('guild'), this.$t('incubator-short')]
      };

      if (is_dark) {
        option['states'] = {
          hover: { filter: { type: 'none' } },
          active: { filter: { type: 'none' } }
        };
      }

      return option;
    },
    ...mapGetters([GET_WALLET_SHORT_ADDRESS]),
    ...mapActions([]),
  },
  data() {
    return {

      sales_donut_series: [25, 25, 25, 25],
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
  methods: {},
};
</script>
  