import axios from 'axios'
let lastUrl = '';
export default {
    state: {
        result: null,
        page: 1
    },
    mutations: {
        setResult(state, result) {
            state.result = result;
        },
        setParams(state, page) { //commit只能接受一个参数
            if(page){
                state.page = page;
            }
        }
    },
    actions: {
        async loadResult({ commit,state }, {page, keyword}) { 
            commit("setParams", page);
            let url = `api/video/search/${state.page}/10?keyword=${keyword}`;
            if (lastUrl !== url) {
                console.log(url);
                let res = (await axios.get(url)).data;
                if (res.ok) {
                    commit('setResult', res.data);
                }
                lastUrl = url;
            }
        }
    },
    getters: {
        result_total(state) {
            return state.result ? state.result.total : 0;
        },
        result_pages(state) {
            let total = state.result ? state.result.total : 0;
            return total % 20 == 0 ? parseInt(total / 10) : parseInt(total / 10) + 1;
        }
    }
};