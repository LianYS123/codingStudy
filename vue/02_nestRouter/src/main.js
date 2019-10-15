import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'

import router from './router'


Vue.use(VueRouter);

let vm = new Vue({
    el:'#root',
    data:{

    },
    router,
    template:`
    <div>
        <router-view></router-view>
        <router-view name='content'></router-view>
    </div>

    `
})