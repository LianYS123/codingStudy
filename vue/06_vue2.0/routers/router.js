import Vue from 'vue'
import Router from 'vue-router'
import News,{router as news_router} from '@/News.vue'
import Sports from '@/Sports'
import SportSection1 from '@/SportSection1'
import SportSection2 from '@/SportSection2'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/news',
            name:'news',
            components:{
                default:News
            },
            children:news_router
        },
        {
            path:'/sports',
            name:'sports',
            components:{
                default:Sports,
                SportSection1,
                SportSection2
            }
        }
    ]
})