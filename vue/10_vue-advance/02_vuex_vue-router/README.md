vue-router
vue add router

vue.config.js
//node js 代码
module.exports = {
    // publicPath:'prefix'  //所有路由的前缀
    //配置webpack
    configureWebpack: {
        devServer: {
            //服务器钩子，
            before(app) {
                //app 是express实例
                app.get('/goods',(res,res) => {
                    app.json([
                        {id: 1,text: 'hello'},
                        {id: 2,text: 'world'}
                    ])
                })
            }
        }
    }
}

如果页面是要路由的页面，要创建在views里面

//为什么页面（路由）要嵌套？ 可能有共同的导航菜单
路由参数获取
this.$route.params.id
路由的组件传参: 将路由参数以组件传参的方式传入
路由表中
{path:'',component:Detail,props:true}

路由守卫
//每次路由激活之前都要执行的回调函数
router.beforeEach((to,from,next) => {
    if(to.path === '/login' || !isLogin){
        next('/login?redirect='+to.path);  //传个参，指明要登录的页面
    } else{
        next();
    }
})

在登陆页中
//登陆成功后
redirct = this.$route.query.redirct || '/'
router.push(redirct);


也可以在路由表中守卫:路由独享的守卫
{
    path:'',
    beforeEnter()
}

//组件内守卫,在组件内部写
beforeRouteEnter()

可以在路由上加一些元数据
{path:'',meta:{requiredLogin:true}}
在守卫中通过to.meta拿到元数据

-------------------------------------------------------------
vuex
vue add vuex

Vuex.Store({
    state:{isLogin:false},
    mutations:{
        //能修改状态的只有mutation
        login(state){
            state.isLogin = true;
        }
    },
    actions:{
        //异步操作
        //第一个参数是context上下文对象，可以调用store的任意操作，复杂的内容都要放在actions中完成
        requestLogin({commit},param){
            return new Promise((resolve,reject) => {
                settimeout(()=>{
                    commit('login')
                    resolve(true);
                },1000)
            })
        }
    }
})


import store from 'store'
store.state.isLogin

提交mutation：
store.commit('login')
派发action
store.dispatch()

一些帮助方法
import {mapState,mapActions} from 'vuex';  
computed:{
    ...mapState(['isLogin'])  //将state映射到computed中
}
methods:{
    ...mapActions(['requestLogin]) //将actions映射到methods中
}

模块化：
modules:{
    cart:{state:{},...}  //购物车模块
}

//getters: 对于state的一些衍生属性
getters:{
    loginState(state){
        return state.isLogin ? '已登录' : '未登录'
    }
}

//原理实现
class Store {
    constructor(options){
        //借助vue来管理状态, 借助vue来实现数据的响应式
        this.vm = new Vue({
            data:{
                state: options.state
            }
        })
    }
}

//vue-router原理
将路由信息保存在一个vue实例中
监听load和hashchange事件 window.addEventListener('load',...) 获取当前路由location.hash
全局注册的Vue router-link router-view
Vue.component('router-link',{
    props:{
        to:String
    },
    render:function(h){
        //h 是什么？ createElement
        //渲染a标签
        return h("a",{attrs:{href:this.to}})
    }
})


