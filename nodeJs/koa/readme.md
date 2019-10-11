# koa
1. 创建服务：
let Koa = require('koa');
let server = new Koa();
server.listen(8080);

2. 路由
 - koa-router 路由中间件
 const Router = require('koa-router')
 let router = new Router();
 router.get('/a',async (ctx,next) => {//ctx上下文，req，res二合一
  await next()//next要用await
 })
 server.use(router.routes());//中间件使用

 router.get()
 router.post()
 router.all()
 router.use('路径',路由)//加路由
  router.routes()//将自己加到其他路由上去

  - 嵌套路由
  /user
    /company
    /
    /admin
  /news
    /sport
    /women
  /cart

  用法：
  //根路由
  let router = new Router()

  let userRouter = new Router();//用户路由

    let company = new router();//用户子路由company

    let admin = new router();//用户子路由admin

  userRouter.use('/company',company.routes())//将子路由加到userRouter上
  userRouter.use('/admin',admin.routes())//将子路由加到userRouter上

  router.use('/user',userRouter);//将user加到根路由上去。

  let news = new Router();
  router.use('/news',news.routes());
  let cart = new Router();
  router.use('/cart',cart.routes());

  目录结构：使用模块化方法进行路由管理
  >routers
   >user
    -admin.js     暴露admin的路由
    -company.js   暴露company的路由
    -index.js     整合
   >cart
    -cart.js
   >news
    -news.js

   - 路由参数：
   router.get('/news/:id',async ctx => {//localhost:8080/news/11
     let {id} = ctx.params;//接收参数 11
   });
   多个参数
   router.get('/news/:id1/:id2/',async ctx => {//localhost:8080/news/11/12
     let {id1,id2} = ctx.params;//接受多个参数,11,12
   });

   urlencoded(query)               params传参
   灵活
   可省略
   不利于SEO(搜索引擎)


  3. ctx
   - server.context
   相当于ctx 的原型，公用的东西(database)可以往上加

   ctx.request     koa 的 Request 对象
   ctx.response    koa 的 Response 对象.

   ctx.method
   ctx.url
   ctx.path
   ctx.query
   ctx.ip
   ctx.headers  

   ctx.req Node 的 request 对象.

   ctx.res Node 的 response 对象.
      绕过 Koa 的 response 处理是 不被支持的. 应避免使用以下 node 属性：
      res.statusCode
      res.writeHead()
      res.write()
      res.end()


   ctx.throw(code,'msg') code 响应状态码,结束后面操作
   ctx.assert(条件,code,msg) 相当于封装起来的throw

   ctx.state = 305 推荐的命名空间，用于通过中间件传递信息和你的前端视图。
   ctx.redirect() 重定向
   ctx.attachment() 下载，待定

  4. 中间件
  - koa-static
  let static = request(...)
  server.use(static(root,options));
  server.use(static('./static',{
    maxage:86400*1000,缓存时间
    index:'1.html'//默认文件
  }))

  //图片文件让他缓存两个月
  router.all(/(\.jpg|\.png|\.gif$)/i,static('./static',{
    maxage:60*86400
  }))

  //注意：如果用在路由上使用router.all(),如果用在server/app上,用use

  - koa-better-body 解析文件和普通数据

  server.use(body({
    uploadDir:
  }))

  //使用之后
  ctx.request.fields

  - cookie自带的
  server.keys = [];滚动密钥

  ctx.cookies.set(key,value,{
    options
    signed:true
  })
  ctx.cookies.get(key,{
    singed:true 获取时候校验
  })


  - koa-session
  server.keys = [] 强制加的
  server.use(session({
    maxAge: 20*60*1000,   //20分钟
    renew: true          //自动续期
  },server))//传server给他，主要要用keys

  ctx.session   //存在ctx上

  - 数据库 mysql,co-mysql
  mysql = require...
  co = require...
  let conn = mysql.createPoll({//通常扔外面
    host
    user
    password
    database
  })
  let db = co(conn);
  server.context.db=db;//require(./lib/database.js)
  使用ctx.db
  let data = await ctx.db.query('')

5. 错误处理
  数据库操作都要错误处理，可以通用处理
  server.ues(async (ctx,next) => {
    try{
      await next();
    }catch(e){
      处理
    }
  })

  也可以在router处理：
  ```
  router.all('*', async (ctx,next) => {
    await next();
  })

  ```
