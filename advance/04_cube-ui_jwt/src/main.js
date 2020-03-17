import Vue from 'vue'
import './plugins/axios'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import store from './store'
import router from './router'
import create from './utils/create'
Vue.prototype.$create = create;
Vue.config.productionTip = false

const vm = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

export default vm;
