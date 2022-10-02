<template>
  <div class="layout-px-spacing">
    <portal to="breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">{{ $t('quick-service') }}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>{{ $t('activity-checkin') }}</span>
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
                <h3>{{ $t('activity-checkin') }}</h3>
                <p>
                  {{ $t('checkin-description') }}&nbsp;&nbsp;&nbsp;<a id="what-is-msc" href="#">
                    <font color="gray">{{ $t('what-is-msc') }}</font>
                  </a>
                  <b-tooltip target="what-is-msc">
                    <small>MSC 是用来记录拥有者在 SeeDAO 的活动及贡献。</small><small><a target="_blank"
                        href="https://seedao.notion.site/SeeDAO-MSC-1d0cb0ee1084476a893341afbdf72f24">阅读更多</a></small>
                  </b-tooltip>
                </p>
                <p>{{ $t('checkin-available-time') }}</p>
              </div>
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <br />
                <div class="d-flex justify-content-between mx-5 mt-3 mb-5" v-if="getWalletShortAddress === ''">
                  <div class="
                      spinner-border
                      text-success
                      align-self-center
                      loader-lg
                    ">
                    Loading...
                  </div>
                </div>
                <div class="row" v-else>
                  <div class="col-xl-6 col-md-6 col-sm-12 col-6">
                    <!-- <b-button variant="success" size="sm" class="mb-4 mr-2">{{ $t('sync-calendar')}}</b-button> -->
                    <p>{{ $t('select-activity') }}</p>
                    <b-select v-model="checkinActivity" class="mb-4" value="" v-if="getUpcomingActivity.length === 0"
                      disabled>
                      <b-select-option value="" disabled>{{
                      $t('no-upcoming-activity')
                      }}</b-select-option>
                    </b-select>
                    <b-select v-model="checkinActivity" class="mb-4" value="" v-else>
                      <b-select-option value="" disabled>{{
                      $t('please-select')
                      }}</b-select-option>
                      <b-select-option v-for="(item, index) in getUpcomingActivity" :key="index" :value="item._id">{{
                      item.subject }}</b-select-option>
                    </b-select>
                    <br />
                    <p v-if="checkinActivity !== ''">{{ $t('activity-start')}}: {{
                    getTimeStr(getSelectedUpcomingActivity(this.checkinActivity).start)
                    }},&nbsp;&nbsp;&nbsp;&nbsp;{{$t('activity-end')}}: {{
                      getTimeStr(getSelectedUpcomingActivity(this.checkinActivity).end) }}</p>
                    <hr />
                    <div v-if="checkinActivity !== ''">
                      <b-form v-if="(hasNotStarted(getSelectedUpcomingActivity(this.checkinActivity).start))">
                        <h4>活动尚未开始，活动开始后取得活动代码即可打卡</h4>
                      </b-form>
                      <b-form v-else-if="(hasEnded(getSelectedUpcomingActivity(this.checkinActivity).end))">
                        <h3>活动已经结束超过半小时，若错过请找活动主持人协助打卡</h3>
                      </b-form>
                      <b-form v-else>
                        <b-form-group class="col-xl-6 col-md-6 col-sm-12 col-6">
                          <p>{{ $t('checkin-code') }}</p>
                          <b-input v-model="checkinCode" type="text" placeholder="1234"></b-input>
                        </b-form-group>
                        <br />
                        <b-button variant="warning" pill class="mb-2 mr-2" @click="submitCheckin(getWalletAddress)"
                          v-if="isChecking" disabled>{{
                          $t('checkin-now') }}&nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                            <line x1="12" y1="2" x2="12" y2="6"></line>
                            <line x1="12" y1="18" x2="12" y2="22"></line>
                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                            <line x1="2" y1="12" x2="6" y2="12"></line>
                            <line x1="18" y1="12" x2="22" y2="12"></line>
                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                          </svg>
                        </b-button>
                        <b-button variant="warning" pill class="mb-2 mr-2" @click="submitCheckin(getWalletAddress)"
                          v-else-if="isValidCode(checkinCode)">{{
                          $t('checkin-now') }}&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                            <path
                              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                            </path>
                          </svg></b-button>
                        <b-button variant="warning" pill class="mb-2 mr-2" disabled v-else>{{
                        $t('checkin-now') }}&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                            <path
                              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                            </path>
                          </svg></b-button>
                      </b-form>
                      <br />
                      <b-alert show variant="light-success" class="border-0 mb-4" v-if="checkinStatus===1">
                        <strong>{{ getWalletShortAddress }} {{ $t('checkin-success') }}!</strong>
                      </b-alert>
                      <b-alert show variant="light-danger" class="border-0 mb-4" v-if="checkinStatus===0">
                        <strong>{{ $t('checkin-error') }}!</strong> {{ $t(checkinMessage) }}
                      </b-alert>
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
//excel export
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/components/tabs-accordian/custom-tabs.scss';

import ConnectWalletModal from '@/views/components/connectWalletModal.vue';

import { mapGetters, mapActions } from 'vuex';
import { GET_WALLET_SHORT_ADDRESS, GET_WALLET_ADDRESS } from '@/store/wallet.module';
import { FETCH_UPCOMING_ACTIVITY, CHECKIN_ACTIVITY, GET_SELECTED_UPCOMING_ACTIVITY, GET_UPCOMING_ACTIVITY } from '@/store/activity.module';

export default {
  computed: {
    ...mapGetters([GET_WALLET_SHORT_ADDRESS,
      GET_WALLET_ADDRESS,
      GET_UPCOMING_ACTIVITY,
      GET_SELECTED_UPCOMING_ACTIVITY]),
    ...mapActions([FETCH_UPCOMING_ACTIVITY, CHECKIN_ACTIVITY]),
  },
  components: {
    ConnectWalletModal,
  },
  data() {
    return {
      isChecking: false,
      checkinStatus: -1,
      checkinMessage: '',
      checkinCode: '',
      checkinActivity: '',
      portfolioId: '62794c52e276ee9d59f56b39',
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
  mounted() {
    this.$store.dispatch(FETCH_UPCOMING_ACTIVITY);
  },
  methods: {
    hasEnded(timestamp) {
      const deadline = new Date(timestamp + 30 * 60 * 1000);
      const now = new Date();
      if (deadline < now) {
        return true;
      }
      return false;
    },
    hasNotStarted(timestamp) {
      const startTime = new Date(timestamp);
      const now = new Date();
      if (now < startTime) {
        return true;
      }
      return false;
    },
    submitCheckin(walletAddress) {
      this.checkinStatus = -1;
      this.checkinMessage = '';
      this.isChecking = true;
      this.$store.dispatch(CHECKIN_ACTIVITY, {
        checkinCode: this.checkinCode,
        wallet: walletAddress,
        activityId: this.checkinActivity,
      }).then((results) => {
        this.isChecking = false;
        if (results.result.error === '') {
          this.checkinStatus = 1;
        }
        else this.checkinStatus = 0;
        this.checkinMessage = results.result.error;
      }).catch(() => {
        this.isChecking = false;
      })
    },
    isValidCode(code) {
      return code.length === 4 && Number(code).toString() === code;
    },
    getTimeStr(timestamp) {
      const time = new Date(timestamp);
      return `${time.getYear() + 1900}/${time.getMonth() + 1
        }/${time.getDate()} ${String(
          time.getHours()
        ).padStart(2, '0')}:${String(
          time.getMinutes()
        ).padStart(2, '0')
        }:${String(
          time.getSeconds()
        ).padStart(2, '0')}`
    },
  },
}
</script>
  