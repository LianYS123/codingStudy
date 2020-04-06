import { cateValues } from '../config'
import qs from 'querystring'
import axios from 'axios'
let lastUrl = '';

const initCates = {};
cateValues.forEach(cate => initCates[cate] = '');
export default {
    state: {
        menu: null,
        cates: { ...initCates },
        page: 1,
        sort: 'favorites',
        desc: 'desc',
    },
    mutations: {
        setMenu(state, menu) {
            state.menu = menu;
        },
        setParams(state, { cates, page, sort = 'favorites', desc = 'desc' }) { //commit只能接受一个参数
            state.cates = {
                ...state.cates,
                ...cates
            }
            if (page) {
                state.page = page;
            }
            state.sort = sort;
            state.desc = desc;
        }
    },
    actions: {
        //啥都不传加载原分类数据, cates不传重置分类,cates传空对象加载原分类数据, 传空对象{}加载第一页无分类数据
        async loadMenu({ commit, state }, { page = 1, cates = initCates, sort = 'favorites', desc = 'desc' } = {}) {
            commit("setParams", { cates, page, sort, desc });
            let url = `api/video/${state.page}/20?${qs.stringify({ ...state.cates, sort: state.sort, desc: state.desc })}`;
            if (lastUrl !== url) {
                console.log(url);
                commit('setMenu', null);
                let res = (await axios.get(url)).data;
                if (res.ok) {
                    commit('setMenu', res.data);
                }
                lastUrl = url;
            }
        }
    },
    getters: {
        total(state) {
            return state.menu ? state.menu.total : 0;
        },
        totalPages(state) {
            let total = state.menu ? state.menu.total : 0;
            return total % 20 == 0 ? parseInt(total / 20) : parseInt(total / 20) + 1;
        }
    }
};