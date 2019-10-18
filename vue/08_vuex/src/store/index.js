import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store_a = {
    state:{
        str:'store_a',
    },
    mutations:{
        printStr(state){
            console.log(state.str);
        }
    },
    actions:{
        printStrAction({commit}){
            commit('printStr')
        }
    }
}
const store_b = {
    state:{
        str:'store_b',
    },
    mutations:{
        printStr(state){
            console.log(state.str);
        }
    },
    actions:{
        printStrAction({commit}){
            commit('printStr')
        }
    }
}

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
        },
        delUser(state,id){
            state.users = state.users.filter(user => user.id != id);
            console.log(state.users);
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
            commit('setUsers',users)
        },
        async delUser({commit},id){
            try{
                let res = await fetch('http://localhost:8081/del/'+id)
                let result = await res.json();
                console.log(result);
                
                if(result.success){
                    commit('delUser',id);
                }else{
                    alert('删除失败:' + result.message)
                }
            } catch(e){
                alert('删除失败:内部服务器错误')
                console.log(e);
                
            }
            
        }
        
    },
    getters:{
        sum(state){
            return state.a + state.b;
        }
    },
    modules:{
        store_a,
        store_b
    }
}) 
export default store;