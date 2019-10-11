const Koa = require('koa')
const Router = require('koa-router')
let server = new Koa();

let router = new Router();
let user = new Router();
user.get('/a',async ctx => {
  ctx.body = 'user a';
})

let admin = new Router();
admin.get('/a',async ctx => {
  ctx.body = 'admin a';
});
user.use('/admin',admin.routes());

let company = new Router();
company.get('/a',async ctx => {
  ctx.body = 'company a';
});
user.use('/company',company.routes());//必须在定义get之后use

router.use('/user',user.routes());

server.use(router.routes());
server.listen(8080);
