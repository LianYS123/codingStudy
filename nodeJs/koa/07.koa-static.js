const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static') //静态文件中间件

let server = new Koa();

let router = new Router();

router.get('/a',async ctx => {
  ctx.body = 'welcome';
})

router.use(static('./static',{
  maxage: 86400*1000,//缓存时间
  index: 'form.html' //默认文件
}));

server.use(router.routes());
server.listen(8080);
