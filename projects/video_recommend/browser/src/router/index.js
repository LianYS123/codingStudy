import Vue from 'vue'
import Router from 'vue-router'
import Home,{router as homeRouter} from '@/components/home'
import Single,{router as singleRouter} from '@/components/Single'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path:'/home',
      component: Home,
      children:homeRouter
    },
    {
      path:'/single',
      component: Single,
      children: singleRouter
    },
    {
      path:'/',
      component: Home,
      children: homeRouter
    }
  ]
})
// 路由变化跳转页面回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
export default router
