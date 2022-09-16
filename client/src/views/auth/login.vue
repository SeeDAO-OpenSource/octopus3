<template>
  <div class="form full-form auth-cover">
    <div class="form-container">
      <div class="form-form">
        <div class="form-form-wrap">
          <div class="form-container">
            <div class="form-content">
              <h1 class="">
                Log In to <span class="brand-name">SeeDAO</span>
              </h1>
              <!-- <p class="signup-link">New Here? <router-link to="/auth/register">Create an account</router-link></p> -->
              <b-form class="text-left" @submit.prevent="LoginFormSubmit">
                <div class="form">
                  <div id="username-field" class="field-wrapper input">
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
                      class="feather feather-user"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <b-input
                      v-model="form.email"
                      placeholder="Username"
                    ></b-input>
                  </div>

                  <div id="password-field" class="field-wrapper input mb-2">
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
                      class="feather feather-lock"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <b-input
                      v-model="form.password"
                      type="password"
                      placeholder="Password"
                    ></b-input>
                  </div>
                  <div class="d-sm-flex justify-content-between">
                    <!-- <div class="field-wrapper toggle-pass d-flex align-items-center">
                                            <p class="d-inline-block">Show Password</p>
                                            <b-checkbox switch class="switch s-primary"></b-checkbox>
                                        </div> -->
                    <div class="field-wrapper">
                      <b-button type="submit" variant="primary" v-if="this.isLogin === false"
                        >Log In
                      </b-button>
                      <b-button type="submit" variant="primary" v-else-if="this.loginError === ''"
                        >Loading...
                      </b-button>
                      <!-- try again -->
                      <b-button type="submit" variant="primary"  v-else @click="resent"
                      >Resent
                      </b-button>
                      <hr>
                      <font >
                            {{ this.loginError }}
                        </font>
                    </div>
                  </div>

                  <!-- <div class="field-wrapper text-center keep-logged-in">
                                        <b-checkbox class="checkbox-outline-primary">Keep me logged in</b-checkbox>
                                    </div>

                                    <div class="field-wrapper">
                                        <router-link to="/auth/pass-recovery" class="forgot-pass-link">Forgot Password?</router-link>
                                    </div> -->
                </div>
              </b-form>
              <p class="terms-conditions">
                SeeDAO © 2022 All Rights Reserved.
                <!-- <router-link to="/">BianageSky</router-link> is a product of
                SeeDAO. -->
                <!-- <a href="javascript:void(0);">Cookie Preferences</a>,
                                <a href="javascript:void(0);">Privacy</a>, and <a href="javascript:void(0);">Terms</a>. -->
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="form-image">
        <div class="l-image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/sass/authentication/auth.scss";
import {  mapMutations } from "vuex";
// import { setLayout } from "@/store/index";
import JwtService from "@/services/jwt.service";

export default {
  // metaInfo: { title: 'Login Cover' },
  data() {
    return {
      isLogin: false,
      form: {
        email: "admin@seedao.xyz",
        password: "admin",
      },
      loginError:""
    };
  },
  mounted() {
    console.log("mounted");
    // check if current user is authenticated
    if (JwtService.getToken()) {
      this.$router.push({ path: `/` });
    }
  },
  computed:{
    ...mapMutations([])
  },
  methods: {
    LoginFormSubmit() {
      console.log("Login button clicked");
      this.isLogin = true;

      // const email = this.form.email;
      // const password = this.form.password;

      // Logout and distory jwt token
      // this.$store.dispatch(LOGOUT).then(
      //   // send login request
      //   this.$store.dispatch(LOGIN, { email, password })
      //       // go to which page after successfully login
      //       .then((results) => {
      //           console.log(results);
      //           // this.isLogin = true;
      //           this.$router.push({ path: `/` });
      //           // this.$store.commit('setLayout', 'app');
      //           // console.log(window.localStorage);
      //       })
      //       .catch((error) => {
      //           this.loginError = "Error: " + error.message;
      //       })
      // );

      // After logout, dispatch login function
    //   setTimeout(() => {
    //     // send login request
    //     this.$store.dispatch(LOGIN, { email, password })
    //       // go to which page after successfully login
    //       .then((results) => {
    //           console.log(results);
    //         // this.isLogin = true;
    //         this.$router.push({ path: `/` });
    //         // console.log(window.localStorage);
    //       })
    //       .catch((error) => {
    //         this.loginError = "Error: " + error.message;
    //       });
    //   }, 500);
    },
    resent() {
      this.loginError = "";
      this.formSubmit();
    }
  },
};
</script>
