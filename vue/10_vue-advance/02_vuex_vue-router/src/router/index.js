import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '@/views/Admin';
import Login from '@/views/Login';

import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/admin', component: Admin, meta:{requireLogin: true} },
  { path: '/login', component: Login },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) => {
  if(to.meta.requireLogin && !store.state.isLogin){
    next('/login?redirect='+to.path);
  } else{
    next();
  }
})

export default router
