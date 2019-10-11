const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa();

let router = new Router();
router.get('/a',async ctx => {
  ctx.body = 'welcome';
})

server.use(router.routes());
server.listen(8080);
