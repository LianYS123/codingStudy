import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    }
  },
  actions: {
    requestLogin({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('login');
          resolve(true);
        }, 1000);
      });
    }
  },
  modules: {}
});
export default store
