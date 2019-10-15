import VueRouter from 'vue-router'
import news,{router as news_router} from './components/news';
import home from './components/home';
import header from './components/header';

export default new VueRouter({
    routes:[
       {
           path:'/news',
           name:'news',
           components:{
               default:header,
               content:news
           },
           children: news_router
        },
       {
           path:'/home',
           name:'home',
           components:{
               default:header,
               content:home
           }
       }
    ]
})