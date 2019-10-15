import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
let store =  new Vuex.Store({
    strict:true,
    state:{
      a:1,
      b:2
    },
    mutations:{
      add(state){
        state.a += 1;
      }
    },
    actions:{
      add(ctx){
        ctx.commit('add')
      }
    }
  
  })
  export default store