import Vue from 'vue'
import './plugins/axios'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')