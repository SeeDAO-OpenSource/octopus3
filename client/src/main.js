import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//bootstrap vue
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

//perfect scrollbar
import PerfectScrollbar from 'vue2-perfect-scrollbar';
Vue.use(PerfectScrollbar);

//vue-scrollactive
import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

//vue-meta
import VueMeta from 'vue-meta';
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
});

//vue-meta
import VueTimeago from 'vue-timeago';
Vue.use(VueTimeago, {
    name: 'Timeago', // Component name, `Timeago` by default
    locale: 'en',
    locales: {
        zh: require('date-fns/locale/zh_cn'),
      }
});

// vue-axios
import axios from 'axios';
import vueAxios from 'vue-axios';
Vue.use(vueAxios, axios);
Vue.axios.defaults.baseURL = "http://localhost:3030"; // 'http://localhost:3030', 'http://server.seedao.xyz:3030';

//Sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
    confirmButtonColor: '#4361ee',
    cancelButtonColor: '#e7515a'
};
Vue.use(VueSweetalert2, options);

//portal vue
import PortalVue from 'portal-vue';
Vue.use(PortalVue);

//vue-i18n
import i18n from './i18n';
Vue.config.productionTip = false;

//vue-cryptoicon
import Cryptoicon from 'vue-cryptoicon';
import icon from 'vue-cryptoicon/src/icons';
Cryptoicon.add(icon);
Vue.use(Cryptoicon);

// set default settings
import appSetting from './app-setting';
Vue.prototype.$appSetting = appSetting;
appSetting.init();

//ApiService
import ApiService from './services/api.service'
ApiService.init();

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
