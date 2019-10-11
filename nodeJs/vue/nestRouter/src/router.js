import VueRouter from 'vue-router'
import news from './components/news';
import home from './components/home';
import header from './components/header';
import news1 from './components/news1';
import news2 from './components/news2';

export default new VueRouter({
    routes:[
       {
           path:'/news',
           name:'news',
           components:{
               default:header,
               content:news
           },
           children:[
               {
                   path:'news1',
                   name:'news1',
                   component:news1
               },
               {
                   path:'news2',
                   name:'news2',
                   component:news2
               }
           ]
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