<template>
  <div>
    <!--  BEGIN NAVBAR  -->
    <div class="header-container fixed-top">
      <header class="header navbar navbar-expand-sm">
        <ul class="navbar-item theme-brand flex-row text-center">
          <li class="nav-item theme-logo">
            <router-link to="/">
              <img
                src="@/assets/images/logo.png"
                class="navbar-logo"
                alt="logo"
              />
            </router-link>
          </li>
          <li class="nav-item theme-text">
            <router-link to="/" class="nav-link"> SeeDAO</router-link>
          </li>
        </ul>
        <div class="dark-mode d-flex align-items-center float-left">
          <b-alert
            show
            variant="light-success"
            class="alert-icon-left mt-3"
            style="height: 10px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-alert-triangle"
            >
              <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              ></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12" y2="17"></line>
            </svg>
            <span class="mb-4" style="position: relative; bottom: 10px"
              >{{ $t("website-under-construction") }}</span
            >
          </b-alert>
        </div>
        <div class="navbar-item flex-row ml-md-auto">
          <div
            class="dark-mode d-flex align-items-center"
            v-if="getAccount !== ''"
          >
            <b-badge
              variant="outline-success"
              class="outline-badge-success mr-1"
              v-if="getChainId === masterNetId()"
              >{{ chainName(getChainId) }}</b-badge
            >
            <button
              variant="outline-danger"
              class="outline-badge-danger mr-1"
              @click="switchNetwork"
              v-else
            >
              {{ $t("wrong-network") }}
            </button>
          </div>

          <div class="dark-mode d-flex align-items-center">
            <a
              v-if="$store.state.dark_mode == 'light'"
              href="javascript:;"
              class="d-flex align-items-center"
              @click="toggleMode('dark')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-sun"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <span class="ml-2">{{ $t("light-mode") }}</span>
            </a>
            <a
              v-if="$store.state.dark_mode == 'dark'"
              href="javascript:;"
              class="d-flex align-items-center"
              @click="toggleMode('light')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-moon"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                ></path>
              </svg>
              <span class="ml-2">{{ $t("dark-mode") }}</span>
            </a>
          </div>
          &nbsp;&nbsp;&nbsp;
          <b-dropdown
            toggle-tag="a"
            variant="icon-only"
            toggle-class="user nav-link"
            class="nav-item user-profile-dropdown"
            :right="true"
          >
            <template #button-content>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M24 23h-2.784l-1.07-3h-4.875l-1.077 3h-2.697l4.941-13h2.604l4.958 13zm-4.573-5.069l-1.705-4.903-1.712 4.903h3.417zm-9.252-10.804c.126-.486.201-.852.271-1.212l-2.199-.428c-.036.185-.102.533-.22 1-.742-.109-1.532-.122-2.332-.041.019-.537.052-1.063.098-1.569h2.456v-2.083h-2.161c.106-.531.198-.849.288-1.149l-2.147-.645c-.158.526-.29 1.042-.422 1.794h-2.451v2.083h2.184c-.058.673-.093 1.371-.103 2.077-2.413.886-3.437 2.575-3.437 4.107 0 1.809 1.427 3.399 3.684 3.194 2.802-.255 4.673-2.371 5.77-4.974 1.134.654 1.608 1.753 1.181 2.771-.396.941-1.561 1.838-3.785 1.792v2.242c2.469.038 4.898-.899 5.85-3.166.93-2.214-.132-4.635-2.525-5.793zm-2.892 1.531c-.349.774-.809 1.543-1.395 2.149-.09-.645-.151-1.352-.184-2.107.533-.07 1.072-.083 1.579-.042zm-3.788.724c.062.947.169 1.818.317 2.596-1.996.365-2.076-1.603-.317-2.596z"
                /></svg
              >&nbsp;&nbsp;<font color="white">{{ $t("language") }}</font>
            </template>
            <b-dropdown-item @click="changeLanguageZH()">
              中文
            </b-dropdown-item>
            <b-dropdown-item @click="changeLanguageEN()">
              English
            </b-dropdown-item>
          </b-dropdown>

          <!-- <b-dropdown toggle-tag="a" variant="icon-only" toggle-class="nav-link" class="nav-item language-dropdown">
                        <template #button-content>
                            <img v-if="selectedLang" :src="require(`@/assets/images/flags/${selectedLang.code}.png`)" class="flag-width" alt="flag" />
                        </template>
                        <perfect-scrollbar>
                            <b-dropdown-item
                                v-for="item in countryList"
                                :key="item.code"
                                link-class="d-flex align-items-center"
                                :active="$i18n.locale === item.code"
                                @click.prevent="changeLanguage(item)"
                            >
                                <img :src="require(`@/assets/images/flags/${item.code}.png`)" class="flag-width" alt="" /> <span>{{ item.name }}</span>
                            </b-dropdown-item>
                        </perfect-scrollbar>
                    </b-dropdown> -->

          <!-- <b-dropdown toggle-tag="a" variant="icon-only" toggle-class="nav-link" class="nav-item message-dropdown" :right="true">
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
                                class="feather feather-mail"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </template>

                        <b-dropdown-item>
                            <b-media class="media">
                                <template #aside>
                                    <div class="avatar avatar-xl">
  <span class="avatar-title rounded-circle">KY</span>
                                    </div>
                                </template>
                                <h5 class="usr-name">Kara Young</h5>
                                <p class="msg-title">ACCOUNT UPDATE</p>
                            </b-media>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <b-media class="media">
                                <template #aside>
                                    <img src="@/assets/images/profile-15.jpeg" alt="avatar" />
                                </template>
                                <h5 class="usr-name">Daisy Anderson</h5>
                                <p class="msg-title">ACCOUNT UPDATE</p>
                            </b-media>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <b-media class="media">
                                <template #aside>
                                    <div class="avatar avatar-xl">
  <span class="avatar-title rounded-circle">OG</span>
                                    </div>
                                </template>
                                <h5 class="usr-name">Oscar Garner</h5>
                                <p class="msg-title">ACCOUNT UPDATE</p>
                            </b-media>
                        </b-dropdown-item>
                    </b-dropdown> -->

          <!-- <b-dropdown toggle-tag="a" variant="icon-only" toggle-class="nav-link" menu-class="notification-scroll" class="nav-item notification-dropdown" :right="true">
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
                                class="feather feather-bell"
                            >
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            <span class="badge badge-success"></span>
                        </template>

                        <b-dropdown-item>
                            <b-media class="server-log">
                                <template #aside>
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
  class="feather feather-server"
                                    >
  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
  <line x1="6" y1="6" x2="6" y2="6"></line>
  <line x1="6" y1="18" x2="6" y2="18"></line>
                                    </svg>
                                </template>
                                <div class="data-info">
                                    <h6 class="">Server Rebooted</h6>
                                    <p class="">45 min ago</p>
                                </div>

                                <div class="icon-status">
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
  class="feather feather-x"
                                    >
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                            </b-media>
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>
                            <b-media>
                                <template #aside>
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
  class="feather feather-heart"
                                    >
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </template>
                                <div class="data-info">
                                    <h6 class="">Licence Expiring Soon</h6>
                                    <p class="">8 hrs ago</p>
                                </div>

                                <div class="icon-status">
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
  class="feather feather-x"
                                    >
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                            </b-media>
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>
                            <b-media class="file-upload">
                                <template #aside>
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
  class="feather feather-file-text"
                                    >
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="16" y1="13" x2="8" y2="13"></line>
  <line x1="16" y1="17" x2="8" y2="17"></line>
  <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </template>
                                <div class="data-info">
                                    <h6 class="">Kelly Portfolio.pdf</h6>
                                    <p class="">670 kb</p>
                                </div>

                                <div class="icon-status">
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
  class="feather feather-check"
                                    >
  <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                            </b-media>
                        </b-dropdown-item>
                    </b-dropdown> -->

          <div class="d-flex align-items-center" v-if="getAccount == ''">
            <a
              class="d-flex align-items-center btn btn-primary"
              @click="connectWallet()"
            >
              <font color="white">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 501.333 501.333"
                  style="enable-background: new 0 0 501.333 501.333"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        fill="#ffffff"
                        d="M448,41.6H22.4C9.6,41.6,0,51.2,0,64v373.333c0,12.8,9.6,22.4,22.4,22.4H448c29.867,0,53.333-23.467,53.333-52.267V94.934
			C501.333,65.067,476.8,41.6,448,41.6z M455.467,298.667H274.134V201.6h181.333V298.667z M455.467,156.8h-204.8
			c-12.8,0-22.4,9.6-22.4,22.4v142.933c0,12.8,9.6,22.4,22.4,22.4h204.8v62.933c0,4.267-3.2,7.467-7.467,7.467H44.8V87.466H448
			c4.267,0,7.467,3.2,7.467,7.467V156.8z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        fill="#ffffff"
                        d="M328.534,228.267h-7.467c-12.8,0-22.4,9.6-22.4,22.4c0,12.8,9.6,22.4,22.4,22.4h7.467c12.8,0,22.4-9.6,22.4-22.4
			C350.934,237.867,341.334,228.267,328.534,228.267z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g></svg
                >&nbsp;&nbsp;{{ $t("connect-wallet") }}</font
              ></a
            >
          </div>
          <div class="d-flex align-items-center" v-else>
            <b-dropdown
              toggle-tag="a"
              variant="icon-only"
              toggle-class="user nav-link"
              class="nav-item user-profile-dropdown"
              :right="true"
            >
              <template #button-content>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#adb5bd"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle></svg
                >&nbsp;<font color="white">{{ getWalletShortAddress }}</font>
              </template>
              <b-dropdown-item @click="openProfile">
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
                  class="feather feather-book"
              >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
                {{ $t("profile") }}
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="disconnect">
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
                  class="feather feather-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                {{ $t("disconnect") }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </header>
    </div>
    <!--  END NAVBAR  -->
    <!--  BEGIN NAVBAR  -->
    <div class="sub-header-container">
      <header class="header navbar navbar-expand-sm">
        <a
          href="javascript:void(0);"
          class="sidebarCollapse"
          data-placement="bottom"
          @click="$store.commit('toggleSideBar', !$store.state.is_show_sidebar)"
        >
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
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </a>

        <!-- Portal vue for Breadcrumb -->
        <portal-target name="breadcrumb"> </portal-target>
      </header>
    </div>
    <!--  END NAVBAR  -->
    <!--  BEGIN TOPBAR  -->
    <div class="topbar-nav header navbar" role="banner">
      <nav class="topbar">
        <ul class="list-unstyled menu-categories" id="topAccordion">
          <li class="menu single-menu">
            <a
              href="javascript:;"
              data-toggle="collapse"
              aria-expanded="true"
              class="dropdown-toggle autodroprown"
            >
              <div class="">
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
                  class="feather feather-home"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>{{ $t("dashboard") }}</span>
              </div>
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
            </a>
            <ul
              class="collapse submenu list-unstyled"
              id="dashboard"
              data-parent="#topAccordion"
            >
              <router-link tag="li" to="/"
                ><a>{{ $t("sales") }}</a></router-link
              >
              <router-link tag="li" to="/index2"
                ><a>{{ $t("analytics") }}</a></router-link
              >
            </ul>
          </li>

          <li class="menu single-menu">
            <a
              href="javascript:;"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <div class="">
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
                  class="feather feather-cpu"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
                <span>{{ $t("apps") }}</span>
              </div>
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
            </a>
            <ul
              class="collapse submenu list-unstyled"
              id="app"
              data-parent="#topAccordion"
            >
              <router-link tag="li" to="/apps/chat"><a>Chat</a></router-link>
              <router-link tag="li" to="/apps/mailbox"
                ><a>Mailbox</a></router-link
              >
              <router-link tag="li" to="/apps/todo-list"
                ><a>Todo List</a></router-link
              >
              <router-link tag="li" to="/apps/notes"><a>Notes</a></router-link>
              <router-link tag="li" to="/apps/scrumboard"
                ><a>Scrumboard</a></router-link
              >
              <router-link tag="li" to="/apps/contacts"
                ><a>Contacts</a></router-link
              >

              <li class="sub-sub-submenu-list">
                <a
                  href="javascript:;"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Invoice
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
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <ul
                  class="collapse list-unstyled sub-submenu"
                  id="appInvoice"
                  data-parent="#app"
                >
                  <router-link tag="li" to="/apps/invoice/list"
                    ><a>List</a></router-link
                  >
                  <router-link tag="li" to="/apps/invoice/preview"
                    ><a>Preview</a></router-link
                  >
                  <router-link tag="li" to="/apps/invoice/add"
                    ><a>Add</a></router-link
                  >
                  <router-link tag="li" to="/apps/invoice/edit"
                    ><a>Edit</a></router-link
                  >
                </ul>
              </li>
              <router-link tag="li" to="/apps/calendar"
                ><a>Calendar</a></router-link
              >
            </ul>
          </li>

          <li class="menu single-menu">
            <a
              href="javascript:;"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <div class="">
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
                  class="feather feather-box"
                >
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  ></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <span>{{ $t("components") }}</span>
              </div>
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
            </a>
            <ul
              class="collapse submenu list-unstyled"
              id="components"
              data-parent="#topAccordion"
            >
              <router-link tag="li" to="/components/tabs"
                ><a>Tabs</a></router-link
              >
              <router-link tag="li" to="/components/accordions"
                ><a>Accordions</a></router-link
              >
              <router-link tag="li" to="/components/modals"
                ><a>Modals</a></router-link
              >
              <router-link tag="li" to="/components/cards"
                ><a>Cards</a></router-link
              >
              <router-link tag="li" to="/components/carousel"
                ><a>Carousel</a></router-link
              >
              <router-link tag="li" to="/components/countdown"
                ><a>Countdown</a></router-link
              >
              <router-link tag="li" to="/components/counter"
                ><a>Counter</a></router-link
              >
              <router-link tag="li" to="/components/sweetalert"
                ><a>Sweet Alerts</a></router-link
              >
              <router-link tag="li" to="/components/timeline"
                ><a>Timeline</a></router-link
              >
              <router-link tag="li" to="/components/notifications"
                ><a>Notifications</a></router-link
              >
              <router-link tag="li" to="/components/media-object"
                ><a>Media Object</a></router-link
              >
              <router-link tag="li" to="/components/list-group"
                ><a>List Group</a></router-link
              >
              <router-link tag="li" to="/components/pricing-table"
                ><a>Pricing Tables</a></router-link
              >
              <router-link tag="li" to="/components/lightbox"
                ><a> Lightbox </a></router-link
              >
            </ul>
          </li>

          <li class="menu single-menu">
            <a
              href="javascript:;"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <div class="">
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
                  class="feather feather-zap"
                >
                  <polygon
                    points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                  ></polygon>
                </svg>
                <span>{{ $t("ui_kit") }}</span>
              </div>
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
            </a>
            <ul
              class="collapse submenu list-unstyled"
              id="uiKit"
              data-parent="#topAccordion"
            >
              <router-link tag="li" to="/elements/alerts"
                ><a>Alerts</a></router-link
              >
              <router-link tag="li" to="/elements/avatar"
                ><a>Avatar</a></router-link
              >
              <router-link tag="li" to="/elements/badges"
                ><a>Badges</a></router-link
              >
              <router-link tag="li" to="/elements/breadcrumbs"
                ><a>Breadcrumbs</a></router-link
              >
              <router-link tag="li" to="/elements/buttons"
                ><a>Buttons</a></router-link
              >
              <router-link tag="li" to="/elements/buttons-group"
                ><a>Button Groups</a></router-link
              >
              <router-link tag="li" to="/elements/color-library"
                ><a>Color Library</a></router-link
              >
              <router-link tag="li" to="/elements/dropdown"
                ><a>Dropdown</a></router-link
              >
              <router-link tag="li" to="/elements/infobox"
                ><a>Infobox</a></router-link
              >
              <router-link tag="li" to="/elements/jumbotron"
                ><a>Jumbotron</a></router-link
              >
              <router-link tag="li" to="/elements/loader"
                ><a>Loader</a></router-link
              >
              <router-link tag="li" to="/elements/pagination"
                ><a>Pagination</a></router-link
              >
              <router-link tag="li" to="/elements/popovers"
                ><a>Popovers</a></router-link
              >
              <router-link tag="li" to="/elements/progress-bar"
                ><a>Progress Bar</a></router-link
              >
              <router-link tag="li" to="/elements/search"
                ><a>Search</a></router-link
              >
              <router-link tag="li" to="/elements/tooltips"
                ><a>Tooltips</a></router-link
              >
              <router-link tag="li" to="/elements/treeview"
                ><a>Treeview</a></router-link
              >
              <router-link tag="li" to="/elements/typography"
                ><a>Typography</a></router-link
              >
            </ul>
          </li>

          <li class="menu single-menu">
            <a
              href="javascript:;"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <div class="">
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
                  class="feather feather-layout"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <span>{{ $t("tables") }}</span>
              </div>
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
            </a>
            <ul
              class="collapse submenu list-unstyled"
              id="tables"
              data-parent="#topAccordion"
            >
              <router-link tag="li" to="/tables/basic"
                ><a>Basic</a></router-link
              >
              <li class="sub-sub-submenu-list">
                <a
                  href="javascript:;"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  DataTables
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
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <ul
                  class="collapse list-unstyled sub-submenu"
                  id="datatable"
                  data-parent="#datatable"
                >
                  <router-link tag="li" to="/tables/basic"
                    ><a>Basic</a></router-link
                  >
                  <router-link tag="li" to="/tables/striped"
                    ><a>Striped Table</a></router-link
                  >
                  <router-link tag="li" to="/tables/order-sorting"
                    ><a>Order Sorting</a></router-link
                  >
                  <router-link tag="li" to="/tables/multi-column"
                    ><a>Multi Column</a></router-link
                  >
                  <router-link tag="li" to="/tables/multiple-tables"
                    ><a>Multiple Tables</a></router-link
                  >
                  <router-link tag="li" to="/tables/alt-pagination"
                    ><a>Alt. Pagination</a></router-link
                  >
                  <router-link tag="li" to="/tables/custom"
                    ><a>Custom</a></router-link
                  >
                  <router-link tag="li" to="/tables/range-search"
                    ><a>Range Search</a></router-link
                  >
                  <router-link tag="li" to="/tables/export"
                    ><a>Export</a></router-link
                  >
                  <router-link tag="li" to="/tables/live-dom-ordering"
                    ><a>Live DOM ordering</a></router-link
                  >
                  <router-link tag="li" to="/tables/miscellaneous"
                    ><a>Miscellaneous</a></router-link
                  >
                </ul>
              </li>
            </ul>
          </li>

          <li class="menu single-menu">
            <a
              href="javascript:;"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <div class="">
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
                  class="feather feather-clipboard"
                >
                  <path
                    d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                  ></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
                <span>{{ $t("forms") }}</span>
              </div>
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
            </a>
            <ul
              class="collapse submenu list-unstyled"
              id="forms"
              data-parent="#topAccordion"
            >
              <router-link tag="li" to="/forms/basic"><a>Basic</a></router-link>
              <router-link tag="li" to="/forms/input-group"
                ><a>Input Group</a></router-link
              >
              <router-link tag="li" to="/forms/layouts"
                ><a>Layouts</a></router-link
              >
              <router-link tag="li" to="/forms/validation"
                ><a>Validation</a></router-link
              >
              <router-link tag="li" to="/forms/input-mask"
                ><a>Input Mask</a></router-link
              >
              <router-link tag="li" to="/forms/select2"
                ><a>Select2</a></router-link
              >
              <router-link tag="li" to="/forms/touchspin"
                ><a>TouchSpin</a></router-link
              >
              <router-link tag="li" to="/forms/checkbox-radio"
                ><a>Checkbox &amp; Radio</a></router-link
              >
              <router-link tag="li" to="/forms/switches"
                ><a>Switches</a></router-link
              >
              <router-link tag="li" to="/forms/wizards"
                ><a>Wizards</a></router-link
              >
              <router-link tag="li" to="/forms/file-upload"
                ><a>File Upload</a></router-link
              >
              <router-link tag="li" to="/forms/quill-editor"
                ><a>Quill Editor</a></router-link
              >
              <router-link tag="li" to="/forms/markdown-editor"
                ><a>Markdown Editor</a></router-link
              >
              <router-link tag="li" to="/forms/date-picker"
                ><a>Date &amp; Range Picker </a></router-link
              >
              <router-link tag="li" to="/forms/clipboard"
                ><a>Clipboard</a></router-link
              >
            </ul>
          </li>

          <li class="menu single-menu">
            <a
              href="javascript:;"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <div class="">
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
                  class="feather feather-file"
                >
                  <path
                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                  ></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                <span>{{ $t("pages") }}</span>
              </div>
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
            </a>
            <ul
              class="collapse submenu list-unstyled"
              id="page"
              data-parent="#topAccordion"
            >
              <router-link tag="li" to="/pages/helpdesk"
                ><a>Helpdesk</a></router-link
              >
              <router-link tag="li" to="/pages/contact-us"
                ><a>Contact Form</a></router-link
              >
              <router-link tag="li" to="/pages/faq"><a>FAQ</a></router-link>
              <router-link tag="li" to="/pages/faq2"><a>FAQ 2</a></router-link>
              <router-link tag="li" to="/pages/privacy-policy"
                ><a>Privacy Policy</a></router-link
              >
              <li>
                <a target="_blank" href="/pages/coming-soon">Coming Soon</a>
              </li>
              <router-link tag="li" to="/pages/blank-page"
                ><a>Blank Page</a></router-link
              >
              <router-link tag="li" to="/pages/sample"
                ><a>Sample Page</a></router-link
              >

              <router-link tag="li" to="/users/profile"
                ><a>Profile</a></router-link
              >
              <router-link tag="li" to="/users/account-setting"
                ><a>Account Settings</a></router-link
              >
              <li class="sub-sub-submenu-list">
                <a
                  href="javascript:;"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Error
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
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <ul
                  class="collapse list-unstyled sub-submenu"
                  id="pages-error"
                  data-parent="#more"
                >
                  <li><a target="_blank" href="/pages/error404">404</a></li>
                  <li><a target="_blank" href="/pages/error500">500</a></li>
                  <li><a target="_blank" href="/pages/error503">503</a></li>
                  <li>
                    <a target="_blank" href="/pages/maintenence">Maintanence</a>
                  </li>
                </ul>
              </li>
              <li class="sub-sub-submenu-list">
                <a
                  href="javascript:;"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Login
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
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <ul
                  class="collapse list-unstyled sub-submenu"
                  id="user-login"
                  data-parent="#page"
                >
                  <li><a target="_blank" href="/auth/login">Login Cover</a></li>
                  <li>
                    <a target="_blank" href="/auth/login-boxed">Login Boxed</a>
                  </li>
                </ul>
              </li>
              <li class="sub-sub-submenu-list">
                <a
                  href="javascript:;"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Register
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
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <ul
                  class="collapse list-unstyled sub-submenu"
                  id="user-register"
                  data-parent="#page"
                >
                  <li>
                    <a target="_blank" href="/auth/register">Register Cover</a>
                  </li>
                  <li>
                    <a target="_blank" href="/auth/register-boxed"
                      >Register Boxed</a
                    >
                  </li>
                </ul>
              </li>

              <li class="sub-sub-submenu-list">
                <a
                  href="javascript:;"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Password Recovery
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
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <ul
                  class="collapse list-unstyled sub-submenu"
                  id="user-passRecovery"
                  data-parent="#page"
                >
                  <li>
                    <a target="_blank" href="/auth/pass-recovery"
                      >Recover ID Cover</a
                    >
                  </li>
                  <li>
                    <a target="_blank" href="/auth/pass-recovery-boxed"
                      >Recover ID Boxed</a
                    >
                  </li>
                </ul>
              </li>

              <li class="sub-sub-submenu-list">
                <a
                  href="javascript:;"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Lockscreen
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
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <ul
                  class="collapse list-unstyled sub-submenu"
                  id="user-lockscreen"
                  data-parent="#page"
                >
                  <li>
                    <a target="_blank" href="/auth/lockscreen">Unlock Cover</a>
                  </li>
                  <li>
                    <a target="_blank" href="/auth/lockscreen-boxed"
                      >Unlock Boxed</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="menu single-menu">
            <a
              href="javascript:;"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <div class="">
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
                  class="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <span>{{ $t("more") }}</span>
              </div>
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
            </a>
            <ul
              class="collapse submenu list-unstyled"
              id="more"
              data-parent="#topAccordion"
            >
              <router-link tag="li" to="/dragndrop"
                ><a>Drag and Drop</a></router-link
              >
              <router-link tag="li" to="/widgets"><a>Widgets</a></router-link>
              <router-link tag="li" to="/charts/apex-chart"
                ><a>Charts</a></router-link
              >
              <router-link tag="li" to="/font-icons"
                ><a>Font Icons</a></router-link
              >
              <li>
                <a target="_blank" href="https://cork-vue.sbthemes.com">
                  Documentation
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div v-if="isConnecting">
        <vue-metamask userMessage="msg" @onComplete="onComplete">
        </vue-metamask>
      </div>
    </div>
    <!--  END TOPBAR  -->
    <b-modal ref="profileModal" size="xl" centered>
      <ProfileModal />
      <template #modal-footer>
          <div></div>
        </template>
      </b-modal>
  </div>
</template>
<script>
import VueMetamask from "vue-metamask"

import ProfileModal from "@/views/components/profileModal.vue"

import ethers from "@/config/ethers.helper"

import { mapGetters, mapActions } from "vuex"
import {
  WALLET_ADDRESS,
  GET_ACCOUNT,
  GET_CHAIN_ID,
  GET_WALLET_SHORT_ADDRESS,
  CONNECT_WALLET
} from "@/store/wallet.module"

export default {
  data() {
    return {
      isProfileOpened: false,
      isConnecting: false,
      wallet: {
        message: "",
        metaMaskAddress: "",
        netID: -1,
        type: "",
        web3: {
          givenProvider: null
        }
      },
      msg: "This is demo net work",
      selectedLang: null,
      countryList: this.$store.state.countryList
    }
  },
  components: {
    VueMetamask,
    ProfileModal
},
  mounted() {
    this.selectedLang = this.$appSetting.toggleLanguage()
    this.toggleMode("dark")
  },
  methods: {
    openProfile(){
      this.$refs["profileModal"].show()
    },
    isConnected() {
      const address = localStorage.getItem(WALLET_ADDRESS)
      if (address === undefined || address === "") {
        return false
      } else return true
    },
    disconnect() {
      this.wallet = {
        message: "",
        metaMaskAddress: "",
        netID: -1,
        type: "",
        web3: {
          givenProvider: null
        }
      }
      this.$store.dispatch(CONNECT_WALLET, this.wallet).then(() => {})
      this.isConnecting = false
    },
    toggleMode(mode) {
      this.$appSetting.toggleMode(mode)
    },
    masterNetId() {
      return ethers.masterNetId()
    },
    switchNetwork() {
      ethers.switchNetwork()
    },
    connectWallet() {
      this.isConnecting = true
    },
    async onComplete(data) {
      console.log("data:", data)
      if (data !== null) {
        this.wallet = data
        this.$store.dispatch(CONNECT_WALLET, this.wallet).then(() => {
          this.switchNetwork()
        })
      }
    },
    changeLanguageEN() {
      this.selectedLang = this.$appSetting.toggleLanguage({
        code: "en",
        name: "English"
      })
    },
    changeLanguageZH() {
      this.selectedLang = this.$appSetting.toggleLanguage({
        code: "zh",
        name: "Chinese"
      })
    },
    changeLanguage(item) {
      this.selectedLang = item
      this.$appSetting.toggleLanguage(item)
    },
    chainName(id) {
      return ethers.chainName(id)
    }
  },
  computed: {
    ...mapGetters([GET_WALLET_SHORT_ADDRESS, GET_CHAIN_ID, GET_ACCOUNT]),
    ...mapActions([])
  }
}
</script>
