import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        a:1,
        b:2,
        users:null
    },
    mutations:{
        setA(state,a){
            state.a = a;
        },
        setB(state,b){
            state.b = b;
        },
        setUsers(state,users){
            state.users = users;
        }
    },
    actions:{
        setA({commit},a){
           commit('setA',a);
        },
        setB({commit},b){
           commit('setB',b);
        },
        async readUsers({commit}){
            let res = await fetch('http://localhost:8081/users')
            let users = await res.json();
            console.log(users);
            commit('setUsers',users)
        }
        
    },
    getters:{
        sum(state){
            return state.a + state.b;
        }
    }
}) 
export default store;