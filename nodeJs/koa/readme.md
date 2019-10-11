

学习总结：  
整理了前段时间学习koa的一些知识点

## 基本使用：
### 创建服务:
安装：  
koa-router实际上是koa的路由中间件，也是koa不可或缺的一个中间件，之所以特别分离出来，或是为了路由嵌套方便
```shell
npm i koa koa-router
```

服务创建：
```javascript
let Koa = require('koa');
let server = new Koa();
server.listen(8080);
```
### 路由
#### koa-router: 路由中间件
路由三个基本方法

 - router.get(path,cb)  : 处理对应路径的get请求
 - router.post(path,cb) : 处理对应路径的post请求
 - router.all(path,cb)  : 处理对应路径的get和post请求

路由的方法都有两个参数:  
- 第一个是路径，'*'表示所有路径.  
- 第二个参数是回调函数，用于处理请求，它是一个异步函数(要加async关键字)

回调函数的两个参数：
- 第一个参数：ctx：  
ctx是上下文对象，类似express中req和res的整合体，可以通过它得到用户上传的数据、请求方式等一系列信息，也可以使用它对客户端进行响应。  
- 第二个参数：next：  
next是一个函数，执行它可以放行请求，使数据继续进入后面的相匹配的路由。

```javascript
const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa();

let router = new Router();

router.all('*', async (ctx,next) => { //*代表所有请求
    ctx.res.setHeader('Access-Control-Allow-Origin','*');
    await next();
})
router.all('/a', async (ctx,next) => {
  ctx.body = 'router all';
  await next();//异步
})
router.get('/a', async (ctx,next) => {
  ctx.body += 'router get';
  await next();
});
router.post('/a', async (ctx,next) => {
  ctx.body += 'router post';
  console.log(ctx.method + ":" + ctx.url)
  await next();
});

server.use(router.routes());//将路由挂在到服务中
server.listen(8080);
```

#### 嵌套路由

- router.use('路径',路由.routes()) : 和server.use()一样，添加子路由
- router.routes(): 将自己加到其他路由上去

以下代码将admin路由和company路由挂载到user路由下面：

```javascript
const Koa = require('koa')
const Router = require('koa-router')
let server = new Koa();

let router = new Router();
let user = new Router();//用户路由
user.get('/a',async ctx => {
  ctx.body = 'user a';
})

let admin = new Router();//用户的子路由：管理员
admin.get('/a',async ctx => {
  ctx.body = 'admin a';
});
user.use('/admin',admin.routes());//将管理员路由挂载到用户路由上，必须在定义get之后挂载

let company = new Router();//用户的子路由：公司
company.get('/a',async ctx => {
  ctx.body = 'company a';
});
user.use('/company',company.routes());//将公司路由挂载到用户路由上

router.use('/user',user.routes());//将用户路由挂载到根路由上

server.use(router.routes());//将跟路由加到服务上
server.listen(8080);
```

#### 模块化路由管理
目录结构：  

![路由文件目录结构](https://user-gold-cdn.xitu.io/2019/10/11/16dbb1fd87f90c22?w=326&h=286&f=png&s=8413)
index.js:主文件
```javascript
const Koa = require('koa')
const Router = require('koa-router')
let server = new Koa();
let router = new Router();

router.use('/user',require('./routers/user'));//自动找user下面的index.js
router.use('/cart',require('./routers/cart/cart.js'));//cart.js中暴露的是cart.routes方法
router.use('/news',require('./routers/news/news.js'));
server.use(router.routes());
server.listen(8080);
```

cart->cart.js: 购物车路由
```javascript
const Router = require('koa-router')
let router = new Router();
router.get('/a',async ctx => {
  ctx.body = 'cart a';
});
module.exports=router.routes();//暴露路由的routes方法
```
其他：admin.js,company.js,news.js暴露方法与cart.js相同  

user下的index.js暴露方法
user->index.js
```javascript
const Router = require('koa-router')
let router = new Router();

router.use('/admin',require('./admin.js'));//将管理员路由挂载到user下
router.use('/company',require('./company.js'));//将公司路由挂载到user下

module.exports = router.routes();
```



#### 路由参数：
路由的路径可以通过冒号":"传递参数，参数存储在ctx对象的params属性里  

如：
路径'/a/:id'可以匹配路径为'/a/1','/a/2','/a/aaa'的请求  
1、2、aaa作为参数存储在params属性里  

```javascript
const Koa = require('koa');
const Router = require('koa-router');
let server = new Koa();
let router = new Router();

router.get('/a/:id', async ctx => {
  let {id} = ctx.params;
  console.log(id);
  ctx.body = id;
})
router.get('/a/:id1/:id2/:id3', async ctx => {//只能匹配三个参数的路由，1个或2个参数都不能匹配
  let {id1,id2,id3} = ctx.params;
  console.log(ctx.params);
  ctx.body = `id1:${id1}  id2:${id2}  id3:${id3}`;
})

server.use(router.routes());//这里传的是一个routes方法，不要忘了
server.listen(8080);
```

使用urlencoded和params传参比较  
* urlencoded(query)：更灵活(不在意传参顺序),可省略部分参数
* params传参：利于SEO(搜索引擎)检索

### ctx上下文对象
- server.context：
相当于ctx 的原型，公用的东西(如：database)可以往上加  

常用属性：  
- ctx.request：     koa 的 Request 对象
- ctx.response：    koa 的 Response 对象.

- ctx.method：请求方式（get/post）
- ctx.url：请求url(如：http://xxx.com?a=1&b=2)
- ctx.path:请求路径(如：http://xxx.com)
- ctx.query:问号后面跟的参数(urlencoded) (如：a=1&b=2)
- ctx.ip： 客户端ip地址
- ctx.headers：请求头  

- ctx.req： Node 的 request 对象.
- ctx.res： Node 的 response 对象.  


不支持： 绕过 Koa 的 response 处理是 不被支持的. 应避免使用以下 node 属性：
- res.statusCode
-  res.writeHead()
-  res.write()
-  res.end()

方法：  
- ctx.throw(code,'msg')： code是响应给前台的状态码,会结束后面操作
- ctx.assert(条件,code,msg)： 断言，条件不成立时执行，相当于封装起来的throw

- ctx.redirect(url)： 重定向，告诉前端浏览器请求跳转url内容
- ctx.attachment()： 下载

## 常用中间件
### koa-static
koa的静态文件中间件的使用：  

server.use(static('静态文件位置',options))  
```javascript
const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static') //静态文件中间件

let server = new Koa();
let router = new Router();

router.get('/a',async ctx => {
  ctx.body = 'welcome';
})

server.use(static('./static',{
  maxage: 86400*1000,//缓存时间
  index: 'form.html' //默认文件
}));

server.use(router.routes());
server.listen(8080);
```

### koa-better-body 
用于解析表单的中间件，既可以解析普通表单，也可以处理文件表单  
使用方法：server.use(body(options))  
使用之后在ctx.request中会新增三个属性：body、fields、files，里面存了表单信息
```javascript
const Koa = require('koa')
const Router = require('koa-router')
const body = require('koa-better-body')
const static = require('koa-static') //静态文件中间件

let server = new Koa();
server.use(body({
  uploadDir: './upload'
}))
let router = new Router();
router.post('/a',async ctx => {
  console.log(ctx.request.body);
  console.log(ctx.request.fields);
  console.log(ctx.request.files);
  ctx.body = 'over';
});

server.use(static('./static'));
server.use(router.routes());

server.listen(8080);
```

### cookie
koa自带cookie,直接使用ctx.cookies属性就可以了  
* ctx.cookies.get('key'):获取名为key的cookie的值  
* ctx.cookies.set('key':'value'):设置cookie 

```javascript
const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa();
let router = new Router();

server.keys = ['adasdfsad','asdfdlsdfcna','xindsfgpasdf'];//循环密钥
router.get('/a',async ctx => {
  if(!ctx.cookies.get('amount')){
    console.log('没有amount');
    ctx.cookies.set('amount',998,{ //这只cookies
      signed: true//签名
    });
    ctx.body = 'over';
  } else{
    console.log(ctx.cookies.get('amount'));//获取cookies
    ctx.body = 'over';
  }
})

server.use(router.routes());
server.listen(8080);
```

### koa-session
* 使用server.use(session(options,server))将session作为中间件添加,注意将server作为第二个参数传给session（主要需要server里面的循环密钥） 

* 添加之后直接给session添加属性，属性赋值就能操作session了  

* 注意：使用session必须要给server加密钥：  
server.keys = ['adasdfsad','asdfdlsdfcna','xindsfgpasdf'...]

```javascript
const Koa = require('koa')
const Router = require('koa-router')
const session = require('koa-session')

let server = new Koa();

let router = new Router();
server.keys = ['adasdfsad','asdfdlsdfcna','xindsfgpasdf'];//循环密钥

server.use(session({
  maxAge: 20*60*1000, //多久过期
  renew: true //自动刷新过期时间
},server))//需要server
router.get('/a',async ctx => {
  if(!session.view){
    session.view = 1;
  }
  else{
    session.view ++;
  }
  ctx.body = `欢迎你第${session.view}次来访`;
})

server.use(router.routes());
server.listen(8080);
```

### 数据库 mysql,co-mysql
使用co-mysql包装mysql，使它可以配合koa使用
1. 使用mysql建立连接池
2. 使用co-mysql包装，添加到server.context中

```javascript
const Koa = require('koa')
const Router = require('koa-router')
const mysql = require('mysql')
const co = require('co-mysql')

let server = new Koa();
let conn = mysql.createPool({
  host: 'localhost',
  user: 'lian',
  password: 'xxxxxxxx',
  database: 'db1',
})
server.context.db = co(conn);
let router = new Router();
router.get('/a',async ctx => {
  ctx.body = await ctx.db.query('select * from user');
})

server.use(router.routes());
server.listen(8080);
```



## 错误处理
数据库操作都要错误处理，可以通用处理

  ```
  router.all('*', async (ctx,next) => {
    await next();
  })

  ```
