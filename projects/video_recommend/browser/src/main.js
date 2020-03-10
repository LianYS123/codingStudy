// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './libs/datalib'
import store from './store'
import axios from './libs/datalib'
import {baseURL} from './config'
Vue.prototype.$axios = axios;
Vue.prototype.baseURL = baseURL;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
