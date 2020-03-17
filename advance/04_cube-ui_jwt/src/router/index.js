import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import History from '@/utils/history';

Vue.use(History)
Vue.use(VueRouter)

VueRouter.prototype.goBack = function(){
  this.back();//  执行原操作
  this.isBack = true;  //标记一下进行了回退操作
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: { auth: true },
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.auth) {
    if (localStorage.getItem('token')) {
      next();
    } else {
      next({ path: 'login', query: { redirect: to.path } });
    }
  } else {
    next();
  }
})
router.afterEach((to) => {
  if(router.isBack){
    //通过回退操作来到的路由
    router.isBack = false;
    History.pop();
  } else {
    History.push(to.path);
  }
})

export default router
