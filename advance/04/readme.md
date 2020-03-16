项目（移动端）：
合适的UI库：
 Mint-ui: 饿了么团队
 vux    ：个人
 cube-ui：滴滴  选这个
 vant   ：有赞   支持SSR,TS

 vue add cube-ui vuex router

 权限的控制：令牌机制

 {path:'/about',meta:{auth:true}}  //进入about页面要校验校验
 router.beforeEach((to,from,next) => {
     if(to.meta.auth){
         //是否登录了
         //只要有令牌就认为登陆了
         const token = localStorage.getItem('token');
         if(token){
             next()
         }
         else{
             next({
                 path:"/login",
                 query:{redirect:to.path}
             })
         }
     } else{
         next();  //不需要登录
     }
 })

 store.js
 Vuex.Store({
     modules:{user}
 })
 user.js
 import us from '@/service/user
 {
     state:{
         isLogin: !!localStorage.getItem('token')
     },
     setLoginState(state,val){

     },
     actions:{
         login({commit},userInfo){
             //将具体的请求提取到service层中
             return us.login()(userInfo).then((data) => {
                 //code,token
                 let {token} = data;
                 if(token){
                     commit('seLoginState',true);
                     localStorage,setItem('token',token)
                     return true
                 } else{
                     return false;
                 }
             })
         },
         logout({commit}){
             localStorge.removeItem('token')
             commit('setLoginState',false);
         }
     }
 }
 //src/service
 user.js
    login(user){
        return axios.get("/api/login",{params:user}).then(({data}) => data);
    }

Login:
<cube-form :model :schema>
data(){
    return {
        model:{
            username:'',
            password:'',
        },
        schema:{
            fields:[
                {
                    type:'input',
                    modelKey:'username',
                    label:'用户名'
                    props:{placeholder:'请输入用户名',type:'text'},
                    rules:{
                        required:true
                    },
                    trigger:'blur'
                },
                {
                    type:'input',
                    modelKey:'password',
                    label:'密码'
                    props:{placeholder:'请输入用户名',eyes:{open:true}},  //input属性
                    rules:{
                        required:true
                    },
                    trigger:'blur'
                }
            ]
        }
    }
}
methods:{
    handlerLogin(e){
        this.$store.dispatch("login",this.model).then(success => {
            if(success){
                const path = this.$route.query.redirct || '/'
            }
        }).catch(err0r => {
            const toast = this.$createToast({
                time:2000,
                txt:'登录失败'
                type:'error'
            }).show();
        })
    }
}

vue.config.js
configureWebpack:{
    devServer:{
        before(app){
            app.get('/api/login',(req,res) => {
                let {username,password} = req.query;
                if(username==='' && password === ''){
                    res.json({code:1,token:'tokenstr'})
                } else{
                    res.status(401).json({code:0,message:'用户名或密码错误'}) //登录失败
                }
            })
        }
        function auth(req,res,next){
            if(req,headers.token){
                next();
            } else{
                res.status(401)
            }
        }
        app.get('/api/userinfo',auth,(req,res) => {
            res.json({code:1data:{name:'jerry}})
        })
    }
}
拦截器 
src/interceptor.js
export default function(vm){
    axios.interceptors.request.use(config => {
        //给所有的请求添加token
        const token = localStorage.getItem('token')
        if(token){
            config.headers.token = 'token'
        }
        return config;
    })
    //响应的拦截器
    axios.interceptors.response.use(null,err => {
        if(err.response.status === 401){
            //清空
            vm.$store.dispatch('logout')
            //跳转
            vm.$router.push('/login');
        }
        return Promise.reject(err);  //让后续的操作可以继续
    })
}
main.js
vm = new Vue({...})
interceptor(vm);  执行拦截器

注销：
<button v-if="$store.state.user.isLogin">注销</button>

令牌机制
OAuth2.0
不关心所有者是谁
Bearer Token规范
通过请求头中的Authorization中添加令牌
config.headers.Authorization = "Bearer " + token;

jwx规范： json Web Token规范： 怎么传令牌
头.载荷.签名   
头：加密算法
载荷： 用户信息、签发时间和过期时间等信息 base64编码
签名：根据头、载荷以及密钥签名得到哈希串Hmac Sha1 256

koa/server.js
jwt = require(jsonwebtoken)  //签发
jwtAuth = require(koa-jwx)  //校验
const secret  = "miyao'
router.get("/api/userinfo",jwtAuth({secret}),ctx => {

}))
router.get('login',ctx => {
    if(username='...'){
        const token = jwt.sign({
            data:{name:'一些自定义信息'},  //用户信息数据
            exp:Math.floor(Data.now() / 1000) + 60* 60 // 过期时间
        },secret)
        
    ctx.body = {code:1,token};
    }else{
        ctx.status = 401;
    }
})

代理
configureWebpack{
    devServer:{
        proxy:{
            "/api":{
                target:"http://127.0.0.1:3000/",
                changOrigin:true
            }
        }
    }
}
反解数据：jwt.io
