<template>
    <div class="container">
        <div class="row layout-top-spacing">
            <div class="col-lg-12 layout-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h3 class="row justify-content-center">{{ $t('profile') }}</h3>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-6 col-12 mx-auto">
                                <b-form>
                                    <b-form-group>
                                        <p>{{ $t('nickname')}}</p>
                                        <b-input type="text" placeholder="John Doe"></b-input>
                                    </b-form-group>
                                </b-form>
                                <b-form>
                                    <b-form-group>
                                        <p>{{ $t('email-address') }}</p>
                                        <b-input type="email" placeholder="email@mail.com"></b-input>
                                        <small>{{ $t('why-you-should-provide-your-email')}}</small>
                                    </b-form-group>
                                </b-form>
                            </div>
                            <div class="col-lg-6 col-12 mx-auto">
                                <b-form>
                                    <b-form-group>
                                        <p>{{ $t('wallet-address') }}</p>
                                        <b-input type="text" :placeholder="getWalletAddress" disabled></b-input>
                                    </b-form-group>
                                </b-form>
                                <b-form>
                                    <b-form-group>
                                        <p>{{ $t('discord-id') }}</p>
                                        <b-input type="text" placeholder="someone#0123"></b-input>
                                    </b-form-group>
                                </b-form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <b-button type="submit" variant="primary" class="mt-4">{{ $t('update') }}</b-button>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
//   import ethers from "@/config/ethers.helper"

import { mapGetters, mapActions } from 'vuex';
import { GET_WALLET_SHORT_ADDRESS, GET_WALLET_ADDRESS } from '@/store/wallet.module';


export default {
    computed: {
        ...mapGetters([GET_WALLET_SHORT_ADDRESS, GET_WALLET_ADDRESS]),
        ...mapActions([])
    },
    components: {
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>
  