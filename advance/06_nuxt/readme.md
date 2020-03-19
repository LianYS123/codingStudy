ssr: server side render
服务端渲染：
单页面应用的缺点：
    1.首屏渲染事件长
    2.seo不好

ssr: 
首屏渲染

快速体验：
nuxt.js框架
安装
npx create -nuxt-app [project]  这个命令每次都会下载最新脚手架的版本然后创建项目

启动项目
npm run dev 

约定优于配置
assets:  需要编译的文件夹，如要编译成base64的图片
static: 不需要编译的静态文件
plugins: 应用启动之前执行的插件
layouts：和路由嵌套相似，用于布局（如每个页面都需要的部分）

设置环境变量： cross-env Node_env = production HOST=127.0.0.1
在vue中，process.env.HOST ...
//页面渲染
app.use(ctx => {
    nuxt.render(ctx.req,ctx.res);  //使用vue的规则渲染页面，通过ctx里面的请求获得路由决定渲染那个页面
})

所有的页面都是用 import()动态加载的 在webpack中有对应的chuck
导航：所有链接后面的页面默认会预加载
<nuxt-link to="/">
<n-link no-prefetch> 加上no-prefetch 属性会禁用预加载

嵌套路由：制造一个.vue的文件和文件夹同名
main
    //这下面的连个文件是main.vue的嵌套路由
    cart.vue
    detail.vue
main.vue

动态路由：文件名或文件夹前面加上下划线
detail
    _id.vue
转化为: /detail/:id, name=detail-id
或者
_detail
    _id.vue
转化为 /:detail/:id

nuxtServerInit:这个动作可以再服务器填充状态
middleware: 
nuxt.confg.js  类似于beforeRoute

asyncData() 组件中在组件还不存在的时候就发ajax请求

layout
最外层会把这个布局先放上去
default.vue
自定义布局:users.vue

export default{
    layout:'users'
}

自定义错误页面：在layout中
error.vue

//head

export default{
    head(){
        return {
            title:"",
            meta:[{name:"description",hid:"覆盖",...}],
            link:[{rel:"favicon",href:"favicon.ico}],
            script:[{src:"a.js"}]
        }
    }
}
异步数据的获取：不会导致页面的重绘
注意：只能在pages中使用，在component里面是没用的

koa
router = require("koa-router")({prefix:"/api"})  //配置api前缀
// api/detail
router.get(/detail)

整合axios
npm install @nuxt.js/axios
nuxt.config.js
modules:[
    '@nuxtjs/axios',
]
//可以配代理
axios:{
    //打开代理
    proxy:true
}
proxy:{
    //配置代理
    "/api":"http://localhost:8080"
}
配置变了要重启服务器

pages/main.js
export default {
    //这个类似生命周期的方法早于创建，不可以用this
    //如果是首屏渲染，这个函数会在服务端执行，此时console.log(...)会在服务端打印
    async asyncData({$axios,error，redirect}){  //还可以结构出params等
        const result = await $axios.$get('/api/goods')  //使用了$get之后result直接就是数据，不用再.data
        if(result.ok){
            return {goods:result.goods}  //直接回被加到this中，优先级比data中的数据优先级高，data中的同名数据会被覆盖
        }
        error({statusCode:400,message:'查询数据失败'})  //错误处理

    }，
    data(){
        return {
            goods:[ //

            ]
        }
    }
}
中间件：
会在一个页面或一组页面渲染之前会执行的代码：路由跳转之前
必须写在middleware文件夹下
在服务端和客户端都可能执行
//index-redirect.js
export default function({router,redirect}){
    if(route.path === '/'){
        redirect('/main')
    }
}
//auth.js
export default function({redirect,store}){//直接将store结构出来
    if(!store.state.user.token){如果token不存在，则没有登录
        redirect("/login")  //重定向到登录页
    }
}


//admin.js
export default {
    middleware:'auth' //需要执行中间件
}

在路由配置中：
router:{
    middelware:["index-redirect"]  //从前往后执行的中间件数组
}

插件：
会在Vue应用执行之前执行的代码：以前写在main.js中执行的代码
plugin/api-inject.js
export default function({$axios},inject){
    inject("login",user=>{
        return $axios.$post("/api/login",user)  注入login,最为全局的服务用
    })
}
//plugins/axios.js  //记得是plugins不是plugin
export default function({$axios}){
    //每次请求被调用的时候都会调用的回调函数
    $axios.onRequest(config => {
        if(store.state.user.token){
           config.headers.Authorization = 'Bearer ' + store.state.user.token;
        }
    })
}
plugins:["@/plugin/api-inject",'@/plugins/axios']

vuex怎么用：
在store中
index.js
export const actions = {
    //服务器初始化，执行的时间点很早
    //这个初始化是为了在某一个页面刷新的时候也可以拿到token
    以下代码有错误
    <!-- nuxtServerInit({commit},{req}){
        //服务端渲染将vuex状态填充
        //参数1是vuex的上下文
        //参数2是nuxt的上下文
        //req.ctx是koa的上下文：可以难倒token
        if(token){
            commit("user/init",token);  //跟新令牌
        }
    } -->
    //在服务器执行的时候
    nuxtServerInit({commit},{app}){
        const token = app.$cookies.get('token')
        if(token){
            commit("user/init",token);  //跟新令牌
        }
    }
}
user.js
//将状态导出为 函数
export const state = () =({

})
export const atcions = {
    login({commit},u){
        return this.$login(u).then({token} => {...})  这一使用注入过的$login
        //注意：token不要存在localStorage中，因为可能在服务端执行，可以放在cookie中
        return !!token
    }
}

补充：装一个cookie-universal-nuxt 模块   //用于在前后端获取cookie
cnpm i -S cookie-universal-nuxt
注册：modules:['cookie-universal-nuxt']

//部署的时候需要执行这两个命令
npm run build
npm run start

静态服务器的部署：
要把所有的接口服务器独立出来，因为nuxt打包不会有服务器
接口服务器：api.js   listen(8080);
然后配置一下跨域：axios:{proxy:true} proxy:{'/api':}

设置环境变量： "generate": "cross-env PORT = 8080 nuxt generate"   然后nginx配置一下反向代理就可以不用输入端口号

默认的生成目录
dist:
nginx 配置
location / {
    root ...dist;
    index index.html;
}
location ^~ /api/ {
    proxy_pass http://localhost:8080  //路径后面不要加 /
}

注意：打包的时候服务器一定要启动：因为他会去服务器请求数据




