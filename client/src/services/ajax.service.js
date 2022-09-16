import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

/**
 * Service to call HTTP request via Axios
 */
const AjaxService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = ""; 
  },

  /**
   * Send the GET HTTP request
   * @param url
   * @returns {*}
   */
  get(url) {
    return new Promise((resolve) => {
      Vue.axios.get(url).then(res => {
        resolve(res);
      });
    });
  },

  /**
   * Set the POST HTTP request
   * @param url
   * @param params
   * @returns {*}
   */
  post(url, params) {
    return new Promise((resolve) => {
      Vue.axios.post(url, params).then(res => {
        resolve(res);
      });
    });
  },

  /**
   * Send the UPDATE HTTP request
   * @param url
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(url, params) {
    return new Promise((resolve) => {
      Vue.axios.put(url, params).then(res => {
        resolve(res);
      });
    });
  },

  /**
   * Send the PUT HTTP request
   * @param url
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(url, params) {
    return new Promise((resolve) => {
      Vue.axios.put(url, params).then(res => {
        resolve(res);
      });
    });
  },

  /**
   * Send the DELETE HTTP request
   * @param url
   * @returns {*}
   */
  delete(url) {
    return new Promise((resolve) => {
      Vue.axios.delete(url).then(res => {
        resolve(res);
      });
    });
  }
};

export default AjaxService;
