import axios from 'axios';

export default {
  install(app) {
    const http = axios.create({
      baseURL: process.env.VUE_APP_API_ENDPOINT,
      timeout: 10000,
    });
    // http.interceptors.request.use((config) => {
    //   config.headers = Vue.prototype.$stores.getters["auth/show"];
    //   return config;
    // });
    app.config.globalProperties.$http = http;
  }
}