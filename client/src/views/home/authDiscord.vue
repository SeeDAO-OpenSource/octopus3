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
                                    <span>{{ $t('discord-login') }}</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isDiscordLogin">
            <AuthDiscordModal />
        </div>
    </div>
</template>
  
<script>
//excel export
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/components/tabs-accordian/custom-tabs.scss';

import AuthDiscordModal from '@/views/components/authDiscordModal.vue';

import { mapGetters, mapActions } from 'vuex';
import { GET_WALLET_SHORT_ADDRESS } from '@/store/wallet.module';
import { AUTH_DISCORD_USER, FETCH_DISCORD_USER_INFO } from '@/store/auth.module';

export default {
    computed: {
        ...mapGetters([GET_WALLET_SHORT_ADDRESS]),
        ...mapActions([AUTH_DISCORD_USER, FETCH_DISCORD_USER_INFO]),
    },
    components: {
        AuthDiscordModal
    },
    data() {
        return {
            isDiscordLogin: false,
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
        const data = window.location.href.split('#')
        const searchParams = new URLSearchParams(data[1])
        const params = Object.fromEntries([...searchParams])
        this.$store.dispatch(AUTH_DISCORD_USER, params).then(() => {
            this.isDiscordLogin = true;
        })
    },
    methods: {},
};
</script>
  