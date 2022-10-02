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
                                    <span>{{ $t('my-profile') }}</span>
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
                                <h3>{{ $t('my-profile') }}</h3>
                                <p>
                                    {{ $t('myprofile-description') }}&nbsp;&nbsp;&nbsp;<a id="what-is-profile" href="#">
                                        <font color="gray">{{ $t('what-is-profile') }}</font>
                                    </a>
                                    <b-tooltip target="what-is-profile">
                                        <small>伙伴数据库是用来让 SeeDAO 其他人认识你的名片。</small><small><a target="_blank"
                                                href="https://seedao.notion.site/afa7275c8e144f569aed9499c2b9bfd0?v=81bc5d00635a44a2b0ebd5f0bf20f128">阅读更多</a></small>
                                    </b-tooltip>
                                </p>
                            </div>
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <br />
                                <div class="d-flex justify-content-between mx-5 mt-3 mb-5"
                                    v-if="getWalletShortAddress === ''">
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
                                    <div class="col-xl-5 col-md-5 col-sm-12 col-5">
                                        <b-form>
                                            <b-form-group class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                <p>{{ $t('location') }}</p>
                                                <b-input v-model="checkinCode" type="text" placeholder="深圳">
                                                </b-input>
                                                <br />
                                                <p>{{ $t('from-where') }}?</p>
                                                <b-input v-model="checkinCode" type="text" placeholder="微信公众号">
                                                </b-input>
                                                <small>{{ $t('why-you-should-tell-us-where-you-from')}}</small>
                                                <br />
                                                <br />
                                                <p>{{ $t('bio') }}</p>
                                                <b-textarea maxlength="60" placeholder="我是 90 后程序员..." rows="3"></b-textarea>
                                                <br />
                                                <p>{{ $t('what-you-are-doing') }}</p>
                                                <b-textarea maxlength="60" placeholder="正在做一个 Web3 项目..." rows="3"></b-textarea>
                                                <br />
                                                <p>{{ $t('what-are-you-interested-in') }}</p>
                                                <b-textarea maxlength="60" placeholder="学习 Web3 项目投研分析..." rows="3"></b-textarea>
                                            </b-form-group>
                                        </b-form>
                                    </div>
                                    <div class="col-xl-7 col-md-7 col-sm-12 col-7">
                                        <b-form>
                                            <b-form-group class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                <p>{{ $t('profile-tags') }}</p>
                                                <b-checkbox :checked="check_all_checkbox" variant="primary" class="checkbox-primary d-inline-block" @change="check_all($event)">123</b-checkbox>
                                            </b-form-group>
                                        </b-form>
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
import { GET_WALLET_SHORT_ADDRESS } from '@/store/wallet.module';

export default {
    computed: {
        ...mapGetters([GET_WALLET_SHORT_ADDRESS]),
        ...mapActions([]),
    },
    components: {
        ConnectWalletModal
    },
    data() {
        return {
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
    mounted() { },
    methods: {},
};
</script>
  