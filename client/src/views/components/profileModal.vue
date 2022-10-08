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
                                        <div class="row" v-if="isChangeName">
                                            <div class="col-9">
                                                <b-input type="text" v-model="nickname" placeholder="John Doe">
                                                </b-input>
                                            </div>
                                            <div class="col-3">
                                                <b-button variant="primary" class="btn btn-lg"
                                                    @click="updateNickname(getWalletAddress)" style="float:right"
                                                    v-if="original.nickname !== nickname">
                                                    {{ $t('change-nickname') }}
                                                </b-button>
                                                <b-button variant="primary" class="btn btn-lg"
                                                    @click="updateNickname(getWalletAddress)" style="float:right"
                                                    disabled v-else>
                                                    {{ $t('change-nickname') }}
                                                </b-button>
                                            </div>
                                        </div>
                                        <div class="row"
                                            v-else-if="original.nickname === '' || original.nickname === undefined">
                                            <div class="col-9">
                                                <b-input type="text" v-model="nickname" placeholder="John Doe">
                                                </b-input>
                                            </div>
                                            <div class="col-3">
                                                <b-button variant="primary" class="btn btn-lg"
                                                    @click="updateNickname(getWalletAddress)" style="float:right">
                                                    {{ $t('change-nickname') }}
                                                </b-button>
                                            </div>
                                        </div>
                                        <div class="row" v-else>
                                            <div class="col-9">
                                                <b-input type="text" :value="original.nickname" disabled>
                                                </b-input>
                                            </div>
                                            <div class="col-3">
                                                <b-button variant="primary" class="btn btn-lg" @click="changeNickname()"
                                                    style="float:right">
                                                    {{ $t('update-nickname') }}
                                                </b-button>
                                            </div>
                                        </div>
                                    </b-form-group>
                                </b-form>
                                <b-form>
                                    <b-form-group v-if="isUpdateEmailNeed">
                                        <p>{{ $t('email-address') }}</p>
                                        <div class="row" v-if="isSending === false">
                                            <div class="col-8">
                                                <b-input type="text" placeholder="email@mail.com" v-model="email"
                                                    @input="validateEmail">
                                                </b-input>
                                                <small>{{ $t('why-you-should-provide-your-email')}}</small>
                                            </div>
                                            <div class="col-4">
                                                <b-button variant="primary" class="btn btn-lg"
                                                    @click="sendAuthCode(getWalletAddress)" style="float:right"
                                                    v-if="isValidMail">
                                                    {{ $t('receive-the-code') }}
                                                </b-button>
                                                <b-button variant="primary" class="btn btn-lg"
                                                    @click="sendAuthCode(getWalletAddress)" style="float:right" disabled
                                                    v-else>
                                                    {{ $t('receive-the-code') }}
                                                </b-button>
                                            </div>
                                        </div>
                                        <div class="row" v-else>
                                            <div class="col-7">
                                                <b-input type="email" placeholder="email@mail.com" v-model="email"
                                                    disabled>
                                                </b-input>
                                                <small>{{ $t('why-you-should-provide-your-email')}}</small>
                                                <br /><br />
                                            </div>
                                            <div class="col-5">
                                                <b-button variant="primary" class="btn btn-lg"
                                                    @click="sendAuthCode(getWalletAddress)" style="float:right"
                                                    disabled>
                                                    {{ $t('receive-the-code') }} ({{ reReceiveCountdown }})
                                                </b-button>
                                            </div>

                                            <div class="col-5">
                                                <b-input type="text" placeholder="123456" v-model="authCode">
                                                </b-input>
                                            </div>
                                            <div class="col-5">
                                                <b-button variant="primary" class="btn btn-lg"
                                                    v-if="String(authCode).length === 6"
                                                    @click="verifyAuthCode(getWalletAddress)">
                                                    {{ $t('verify-email') }}
                                                </b-button>
                                                <b-button variant="primary" class="btn btn-lg" disabled v-else>
                                                    {{ $t('verify-email') }}
                                                </b-button>
                                            </div>
                                        </div>
                                    </b-form-group>
                                    <b-form-group v-else>
                                        <p>{{ $t('email-address') }}</p>
                                        <div class="row">
                                            <div class="col-9">
                                                <b-input type="text" placeholder="email@mail.com"
                                                    :value="this.original.email" disabled>
                                                </b-input>
                                            </div>
                                            <div class="col-3">
                                                <b-button variant="primary" class="btn btn-lg" @click="updateEmail"
                                                    style="float:right">
                                                    {{ $t('update-email') }}
                                                </b-button>
                                            </div>
                                        </div>
                                    </b-form-group>
                                </b-form>
                            </div>
                            <div class="col-lg-6 col-12 mx-auto">
                                <b-form>
                                    <b-form-group>
                                        <p>{{ $t('wallet-address') }}</p>
                                        <b-input type="text" :value="getWalletAddress" disabled></b-input>
                                    </b-form-group>
                                </b-form>
                                <b-form>
                                    <b-form-group>
                                        <p>{{ $t('discord-id') }}</p>
                                        <div class="row" v-if="getMember !== null && getMember.discord !== undefined">
                                            <div class="col-9">
                                                <b-input type="text"
                                                    :value="getMember.discord.username + '#' + getMember.discord.discriminator"
                                                    disabled></b-input>
                                            </div>
                                            <div class="col-3">
                                                <a target="_blank" :href="getDiscordAuthLink"
                                                    class="btn btn-lg btn-primary">{{
                                                    $t('discord-update') }}
                                                </a>
                                            </div>
                                        </div>
                                        <div class="row" v-else>
                                            <div class="col-9">
                                                <b-input type="text" :placeholder="this.$t('please-login-discord')"
                                                    disabled></b-input>
                                            </div>
                                            <div class="col-3">
                                                <a target="_blank" :href="getDiscordAuthLink"
                                                    class="btn btn-lg btn-primary">{{
                                                    $t('discord-login') }}
                                                </a>
                                            </div>
                                        </div>
                                    </b-form-group>
                                </b-form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
//   import ethers from "@/config/ethers.helper"

import { mapGetters, mapActions } from 'vuex';
import { GET_WALLET_SHORT_ADDRESS, GET_WALLET_ADDRESS } from '@/store/wallet.module';
import { GET_DISCORD_AUTH_LINK, GET_MEMBER, EMAIL_AUTH, VERIFY_CODE, UPDATE_NICKNAME } from '@/store/auth.module';


export default {
    computed: {
        ...mapGetters([GET_WALLET_SHORT_ADDRESS, GET_WALLET_ADDRESS, GET_DISCORD_AUTH_LINK, GET_MEMBER]),
        ...mapActions([EMAIL_AUTH, VERIFY_CODE])
    },
    components: {
    },
    data() {
        return {
            isValidMail: false,
            isChangeName: false,
            isUpdateEmailNeed: false,
            email: '',
            nickname: '',
            authCode: '',
            isSending: false,
            isVerifying: false,
            reReceiveCountdown: 0,
            countdownId: 0,
            original: {
                nickname: '',
                email: '',
            },
        }
    },
    mounted() {
        this.updateMember()

    },
    methods: {

        updateMember() {
            this.original = this.$store.getters.getMember;
            if (this.original.email === undefined || this.original.email === '') {
                this.isUpdateEmailNeed = true;
            }
        },

        async updateNickname(wallet) {
            await this.$store.dispatch(UPDATE_NICKNAME, { wallet, nickname: this.nickname });
            this.updateMember()
            this.isChangeName = false;

        },

        async sendAuthCode(wallet) {
            this.isSending = true;
            this.isVerifying = false;
            this.reReceiveCountdown = 300;
            this.countdownId = setInterval(() => {
                if (this.reReceiveCountdown > 0) {
                    this.reReceiveCountdown = this.reReceiveCountdown - 1;
                }
                else {
                    this.reReceiveCountdown = 0;
                    this.isSending = false;
                    clearInterval(this.countdownId)
                }
            }, 1000);
            await this.$store.dispatch(EMAIL_AUTH, { wallet, email: this.email });
        },

        async verifyAuthCode(wallet) {
            this.isVerifying = true;
            const member = await this.$store.dispatch(VERIFY_CODE, { wallet, email: this.email, code: this.authCode });
            this.isVerifying = false;
            if (member.email === this.email) {
                this.isSending = false;
                this.isUpdateEmailNeed = false;
                this.authCode = '';
            }
            this.updateMember()
        },

        changeNickname() {
            this.isChangeName = true;
            this.nickname = '';
            if (this.original.nickname !== undefined) {
                this.nickname = this.original.nickname
            }
        },

        validateEmail() {
            const re = /\S+@\S+\.\S+/;
            if (re.test(this.email)) {
                if (this.original.email !== this.email) {
                    this.isValidMail = true;
                }
            } else {
                this.isValidMail = false;
            }
        },

        updateEmail() {
            this.isUpdateEmailNeed = true;
            this.email = '';
            if (this.original.email !== undefined) {
                this.email = this.original.email
            }
        }
    }
}
</script>
  