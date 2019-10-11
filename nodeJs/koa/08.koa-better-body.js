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
