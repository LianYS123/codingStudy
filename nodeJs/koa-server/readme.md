- 渲染：
服务器渲染：安全性高，利于SEO
  库
  node： pug/ejs
  pug: 侵入式     不常用
  ejs: 非侵入式
  类似jsp：<%=name%>
  ejs.renderFile('./template/1.ejs', {}, {err,data} => {

  })
  java： jsp
浏览器渲染:节约流量，用户体验好
库vue、react

- koa-ejs
ejs(server,{
  root:
  layout: false,//
  viewExt:'ejs',//扩展名
  cache:false,//缓存
  debug:false//打印bug
})
使用之后在ctx上加一个render()
server.use(async ctx => {
  await ctx.render('文件名',{

  })//渲染完了自动给body
})

cnpm npm yarn bower //包管理器

- 项目结构：

  - 库
  koa koa-static koa-router koa-ejs koa-session koa-mysql koa-better-body mysql co-mysql

  - 文件结构
  libs
    database.js
  routers
    admin
      index.js
    www
      index.js
    api
      index.js
    static.js
  static
    upload
  log
  template
   admin
    login.ejs
  upload

  config.js
  server.js
  admin.js

- 图片缓存时间路由
router.all()
//options.image = option.image||30
jpg,png,gif:30*86400*1000
js,jsx 1
html,htm 30
.css
其他 7

- 问题事项
1. router地址实际上是字符串拼接
/admin + /login   ->   /admin/login   正常
   / + /news      ->   //news         报错
2. config里面配置database
3. 管理员：一般存文件里
  库 await-fs读文件
  await fs.readFile();


- 自动生成session的key
const key_length = 1024;
const key_count = 2048;
const chars = 'abcdefg...'
for(){
  let key = ''
  for(){
    key+=
  }
}
//同步读取和写入，因为只在服务器启动的时候执行一次
fs.writeFileSync('.keys',arr.join('\n'))
console.log(提示)

//fs.readFileSync

- 统一错误处理：
router.use(async (ctx,next) => {
  try{
    await next()
  }catch(e){
    ctx.throw(500,'internal server error');//status?
  }
})

- 数据签名
md5 123456->e10abc...  不可逆  散列算法   还有sha

node 自带库 crypto

let obj = crypto.createHash('md5')
obj.update('123456');
return obj.digest('hex');十六进制

suffix 后缀


缓存：
服务器 maxage date -> 浏览器-> (带上date) -> 服务器判断是否过期 ->200+body或304+读你自己的     



/get/:id
id要校验


if(错了){
  ctx.body = {err:1,msg:''}
}else{

}


url HTTP_ROOT
