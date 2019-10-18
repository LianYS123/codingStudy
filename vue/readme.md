#
##三大框架：
vue
react
angular


现代开发模式： 20%表现层
vue、react
创通开发模式   80%表现层
jquery

mvc
数据、表现、行为分离

视图层 <---> 数据层

MVC,MVP,MVVM
M:数据层
V:视图层
C:控制层

前端渲染：降低服务器负担。带宽压力小，用户体验好
后端渲染：SEO，兼容，安全性

## vue核心是数据
vue的核心是数据，对于所有挂载到页面上的内容，数据变了，视图会跟着变。
```javascript
let vm = new Vue({
  el:''//根元素，挂载点
});
```
将script加到下面等待div加载完执行

vue表达式：写一些简单的表达式
不能输出到标签里面，只能用到innerHTML里面
{{}}
{{new Date()}}

data:{
  数据
}

只要数据变了，视图都会变：数据自动同步到视图

## 指令(direction)--补充了html的属性
### v-bind:     向html属性里面输出东西
v-bind:title、v-bind:src
简写v-bind:相当于直接写‘:’

class:可以用数组
v-bind:[数组]
style：可以用json
:{width,height,...}

问题：
箭头函数，绑定this为所处环境

### v-model:数据双向绑定

```html
<input type="text" v-model="name">

data{
  name:111
}
```
数据和input之间双向绑定
view:html
controller:vm
model:data

v-model:跳过vm,vue自动完成

通过input进来的数据都是字符串

### v-text:没什么用
```html
<div v-text='aaa'></div>
相当于：
<div class="">
  {{aaa}}
</div>

data{
  aaa:111
}
```
### v-html:直接输出html:innerHTML，

## vue事件
### v-on
```javascript
v-on:click="fn()"//括号可以不加，只要没参数
简称@click
```
v-show:是否显示，input隐藏也会起作用
v-if:是否有这个东西:会删除元素

v-show:true/false/函数
v-if:true/false/函数


### v-for:
```html
<ul>
  <li v-for="user,index in users">
    {{user.name}}:{{user.password}}
  </li>
</ul>
data{
  users
}
```
循环json
value,key in json
循环字符串
char in str
循环数字:从1开始
i in 50

:key属性,提高性能
唯一的，不变的

虚拟DOM：大JSON
{
  tag:'ul',
  child:{
    {
      tag:'',
      ...
    }
  }
}

<ul v-for='...' :key></ul>

### v-pre:预编译，禁用vue表达式
提高性能,防止意外
<div v-pre></div>

### v-cloak:防止vue代码意外显示

```html
<script src="卡住">

</script>
<script>

</script>
```
v-cloak:编译完成后去掉这个属性


## 内部原理

```html
<script type="text/javascript">
let el = document.getElementBy..
let template = el.innerHTML;
真实数据
let _data={
  name:'lian',
  age:10
}
let data = new Proxy(_data,{//数据代理, 给_data设置set方法
  set(obj,name,value){//obj == _data
    obj[name] = value;
    console.log('数据变了');
    render();
  }
})
render();
function render(){
  el.innerHTML = template.replace(/\{\w+\}/g,str=>{
    str = str.substring(2,str.length-2);
    return _data[str];
  })
  Array.from(el.getele...input)
  .filter(ele => ele.getattr..v-model)
  .forEach(input=>{
    let name = input.getAttribute('v-mode;')//得到要绑定到哪个数据？
    input.value = _data[name];//
    input.oninput = function() {
      data[name] = input.value;//
    }
  })
}
</script>

```

虚拟DOM:
合并请求
快速查询
局部刷新


## 事件修饰符
@click='fn()'
@click.stop = 'fn()'//禁止冒泡
@click.once  单次事件
@click.prevent 阻止默认事件(阻止表单提交)
vue事件中的this是window对象
可以多个@click.stop.once
@click.native 原生事件，跟组件配合

@keydown.数字|ctrl     .keycode|名字
self:     冒泡的不要
capture   捕获阶段的事件
可以按组合键


## computed-计算属性
computed:
带缓存：性能
方便：即可以读，又可以写
```javascript
computed{
  sum(){
    return this.a + this.b
  }
}
```

```html
姓：<input type="text" name="" value="">
名：
<script>
data{
  familyName:'',
  givenName:''
}
computed{
  name:{
    get(){
      return ''
    },
    set(value){
      this.familyName=...
      this.givenName=...
    }
  }
}
</script>
```

## watch--监听：
data:{
  name
}
watch:{
  name(){监听name

  },
  'user_info.name':function(){//监听userinfo里面的name

  }
}

## vue-router
需要vue-router库

1. 容器
2. 路由表
let router = new VueRouter({
  routes:[
  {path,component}
  ]
  })
3.
new Vue({
  router
})
```html
<div>
  <router-view></router-view>
</div>

<script>
let router = new VueRouter({
  routes: [
    {
      path: '/a',
      component:{
        template:'<div>aaa<div>'
      }
    },
    {
      path: '/b',
      component:{
        template:'<div>aaa<div>'
      }
    }
  ]
})

</script>
用 a 切地址
用<router-link to'#'></router-link>切地址
#:锚点，不会导致页面刷新，history不会失效
可以加class
.uer-link-active:激活的时候显示
<router-link class='' to'#'></router-link>

routes中的一项可以有名字,可以传参-->通过':'传参
$route:路由信息
{
  path:'/a/:id',
  name:'news',
  component:{
    template:`
      <div class="">
        {{$route.params.id}}
      </div>
    `
  }
}
<router-link class='' :to'{name:news,params:}'></router-link>


路由可以重叠：
匹配多个路由，走前面那个 比如path:'/'和path:'/index'会挂载path:'/'下的组件


js控制路由跳转：
获取路由信息：$route
操作路由：$router
this.$router.push('/news/19')
this.$router.push({name:'news',params:{}})
history是一个栈

push()入栈
replace()替换当前历史记录，不希望用户回来
go(int)
  go(-1)
  go(1)

watch:{
  监视路由，不能操作
  $route(value,old_value){

  }
}

路由守卫 ?
  beforeRouteUpdate(value,old_value,next){
    next()//放行
  }


多视图
可以有一个不给名
router-view name="header"
router-view name="footer"

{
  path,name,
  components:{
    default:indexCmp,
    header:headerCmp,
  }
}

路由嵌套：
src
  vm.js
  router.js
  components
    header.js
    home.js
    news1.js
    news2.js

import vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)             //Vue.prototype.VueRouter=VueRouter?

let vm = new Vue({
  el:''
  router
})

header.js
export default {
  template:  `
    <div class="nav">
      <router-link class='nav-item' to='/'>首页</router-link>

    </div>
  `
}

childern:
子路由
路径是相对路径，不要加/

在news组件里面暴露路由表

引入：
import news,{router as news_router} from 

路由里面套路由，视图里面套视图


数据通信：
1.用库
axios
  data
    user.json
  src
    vm.js

  index.html


import Axios from 'axios'

created()   钩子函数，创建完成了，
async created(){
  let res = await Axios.get('./data/user.json')  //异步读取，try来处理 get方式
  console.log(res.data)
}


await Axios({ 
  url:
  method:post   post方式
  data,
  transformRequest:[
    function(data){
      return stringify(data) //将json转成 a=1&b=2的querystring的形式提交 
    }
  ]

})


let axios = Axios.create({创建实例的方法

})
Axios 默认json方式传数据
webpack可以引用后台模块
import：es6定的webpack语法



2.原生
fetch

let res = await fecth(')
let data = await res.json();解析也可能是异步操作


post:
let formdata = new FormData();
formdata.append('a',80);
formdata.append('b',90);
let res = await fecth(url,{
  method:
  body:formdata
})


methods：{
  fn_submit(){
    let formdata = new FormData(this.$refs.form1);

  }
}

ref:给组件内部的标签起个名字，存在vm的$refs里面
<form ref='form1'>
  <input name> input必须有name





component 
  src
  index.html


new Vue({
  //局部组件
  components:{
    cmp1:{
      template:
    }
  }，
  template:`<div>
    <cmp1/>
  </div>`
})

组件其实也是vm对象，data必须是函数
为什么用函数？跟全局变量隔开
全局组件：
cmp1.js
Vue.component('cmp1',{
  props:['name','age']传参
  data(){
    return 
  },
  template
})

局部组件和全局组件的区别？  
- 局部组件在当前实例中声明，只能在当前Vue实例(组件)中能用
- 全局组件直接用，不用在组件的components中声明

vm.js
import './cmp1'

传参方法:
<cmp1 name='lian' :list='json'/>

动态组件：
data{
  type:'cmp1'
}
<component is="cmp1"/>  //component标签名确定，通过cmp1指明真实标签名
<component :is="type"/>


//暴露组件
Cmp1.js
export default Vue.component('Cmp1',{
})


import Cmp1 from './cmp1'
new Cmp1({ //相当于<Cmp1 name='lian' :age='18'/>
  propsData:{
    name:lian,
    age:18
  }
})

let vm = cmp.$mount();创建一个虚拟的组件，可以用来做测试


插槽：slot,(<slot/>)，占位符，将来会被组件里面的内容替代掉
<slot name="title"/>有名字的插槽，去找template里面的slot='title'的同名内容插入
<slot/>没名字的slot，其他的插入

dialog.js

具名插槽：
<template slot='title'></template>


--------------------------------------------------------------

组件的生存周期
![组件生命周期](./component-lifecycle.png)
有el：new Vue({}) 挂到挂载点
没有el：Vue.component({}) 
有template

事件，生命周期函数，钩子(hook?)
created(已创建):内部状态稳定：可以数据操作(内部组件还没构建)
mounted(已挂载):可以操作内部元素（包括组件）

挂载：生成html
钩子函数不只是生命周期函数

webpack的另一种用法
module.exports=function(env,argv){//两个参数


  return {
    ...env.development?require():require()
  }
}

配置
config/webpack.development.js
module.exports={
  mode:
  output:{
    不需要path，在内存里面
  }，
  devtool:'source-map',
  plugins:[
    new  HtmlWebpackPlugin({
      template:'index.html'//模板，自动生成html，根据模板多加一个script,test不需要
    })
  ]
}
config/webpack.prodction.js
{
  mode
  output{

  }
}

html-webpack-plugin:模板，自动生成html，根据模板多加一个script,test不需要
1. 挂载点必须自己写上
2. 挂载点id不见了？js文件的问题？配置的问题？别名的问题？


resolve:{
  alias:{
    'vue':'vue/dist/vue.esm' //起个别名，告诉webpack引用时提到vue指的是vue/dist/vue.esm 注意：两边都要加引号
  }
}
组件间通信：
1.土办法
  组件事件：
  $emit   发送
  $on     接收
  $off    删掉
  $once   一次

父组件操作子组件数据
this.refs.child.num++ //直接操作子组件数据
this.refs.child.fn() //调用子组件函数
template:
`
<div>
<Child ref='child'/>
</div>
`
子组件找父级
template:
`
<div>
<Child :parent='this'/>
</div>
`
props:['parent']
this.parent.num++


发送给谁.$emit(事件名，参数)
this.$on(事件名，cb) 接收事件

2.vuex

--------------------------------------------------------------------------------------





.vue文件 vue2.0的组件
```vue
<template>
</template>
<script>
import Child from './Child.vue'
export default {
  name: 'cmp1',//方便调试
  components:{
    Child//注册,这就是个局部组件
  }
}
<scirpt>
<style scoped>//只在这个组件起作用
</style>
```

cnpm i vue-loader vue-style-loader vue-html-loader vue-template-compiler
vue-style-loader：将外面的css文件样式融到vue中
vue-template-compliler:解析器(将js,css,html分开)
vue-html-loader：解析html
plugin:vue-loader/lib/plugin：不需要下载

plugins:[
  new 
]

一般有一个主组件App.vue

vue-router -S
routers文件夹
import VueRouter

怎么加VueRouter?
写路由表
  引vue，vue-router
  加alias:'@':path.resolve(__dirname,'')
  在路由表中use

不写路由表不能使用<router-link>,写了路由表<router-link>在组件中直接用，不用引


数据通信：
axios，vue-axios
都要引
Vue.use(VueAxios,Axios)
async created(){
  await this.axios.get...
}


--------------------------------------------------------------------------------------------------------

loader:  类似过滤器，流水线的处理方式，侧重处理文件
plugin： 并行的，一起启动



vue-cli：启动器(脚手架) 快速构建一个架构
cnpm i -g vue-cli
装完使用vue命令
vue list:能用的模板列出来，一般用webpack
vue init webpack(模板) project1(名字)
运行时+编译器
Standard
jest测试
e2e:端对端测试:最完整的测试（功能测试）
自己装

cnpm i


测试：
单元测试
集成测试
压力测试
回归测试

build：配置文件

Eslink 开发阶段关了
config -> index.js -> use eslink:false

src->components



main.js 全局的东西在这引

静态文件：可以引
assets：会被打包
static：不会被打包，名字也不会变

组件中的<img src='...'> ：隐藏的require
options{outputPath:}：打包后的文件在哪

如果直接引，引的是js
引bootstrap bootstrap/dist/css/bootstrap.min.js

components
  common
    Table.vue

fields[
  {name,text}
]
datas:[
  {1,lian,18}
]

操作 delete
props不推荐改，要改的是数据

-------------------------------------------------------------------
vuex
所有数据统一管理，不用考虑层级关系
全局，统一，单一

解决：
数据跨组件共享
防止数据意外修改
调试，测试(会追踪)

actions触发mutations，可以异步
调用
mutations:行为，同步的
调用
state:变量
component：调用actions

cnpm i -S vuex

引入 
use：添加到vue身上
声明 store
const store = new Vuex.Store({
  strict:true,//开发为true，发布为false   process.env.NODE_ENV！='production'
  state:{a:1,b:2},
  mutations:{}，
  actions:{},
  getters:{},//读取数据
  modules:{},//模块，拆分store
})

将store挂到vue身上


组件中：
{{$store.state.a++}}会引发报错，要在mutations里面改，用actions调用mutations里面的函数
mutations:{
  add(state,n){
    state.a+=n
  }
}
$store.commit('add',5):commit找mutations
actions:{
  add(context,n){
    context.commit('add',n)
  }
}
{{$store.dispatch(action_name,payload)}}

组件中的name给vue-devtool用

state————存储
mutation————修改数据，追踪；同步
action————封装：组合、异步

store
  index.js

  import vue
  import vuex

getters:{}:类似computed
getters:{
  count(state){
    return state.a+state.b
  }
}
当一个变量用
$store.getters.count
配合computed用
count(){
  return this.$store.getters.count
}

vuex辅助方法（helper）
mapState   state   ->   computed
mapActions action  ->   methods 
mapGetters getters ->   computed

mapState 是vuex里面的 
import {mapState} from vuex
computed:{
  ...mapState(['a','b'])
}
methods:{
  ...mapActions(['addA','addB'])
}

users=[{}]
getters:{
  onlineUsers
}

getters:{ 数据变了就会执行
  async fn(state,getters){
    if(!state.users){//相当于做了个缓存，防止死循环
      await store.dispatch()
      log
    }
  }
}
没法配合computed，显示不出来(computed没法接收异步方式)

建议用actions做异步操作

modules:{
  mod_a:store_a,
  mod_b:store_b
}

const store_a={
  state:{
    str:
  }
}
const store_b={
  state:{
    str:
  }
}
$store.state.mod_name.str...
...mapState({
  str_a(state){
    return state.mod_a.str
  }
})

mutations:{
  setStr(state,s){
    state.str=s
  }
}

this.$store.commit('setStr','ddd')
子store的state是分开的，同名mutations或action会被同时触发

动画：
vue2-animate:配合vue做动画
cnpm i vue2-animate -D
import 'vue2-animate/dist/...

做动画的元素包在
<transition name='fadeUp'>
<div class='box' v-if='b'>
</transtiton>
animation-duration

<transition-group name='fade' tag='p'>  //使用p标签代替当前transition标签(默认是span)
</transition-group>

name可以是animate.css动画的名字，也可以是自定义的，使用钩子函数
del(index){
  this.arr=this.arr.splice(index,1)
}