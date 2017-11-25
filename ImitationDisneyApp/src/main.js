// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/images/error.gif',
  loading: './assets/images/loading.gif',
  attempt: 1
})

require('./assets/css/reset.css')


Vue.config.productionTip = false

// axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { 
  return response;
}, function (error) {
  return Promise.reject(error);
});

Vue.prototype.$http = axios  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

