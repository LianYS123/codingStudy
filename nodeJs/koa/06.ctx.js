const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa();

let router = new Router();
router.get('/a', async ctx => {
  console.log(
    `method:${ctx.method}
    url: ${ctx.url}
    path: ${ctx.path}
    ip: ${ctx.ip}` );
    console.log(ctx.query);
    console.log(ctx.headers);
  ctx.throw(404,'你访问的链接不存在');
});
router.get('/assert', async ctx => {
  ctx.assert(ctx.query.username,400,'用户名不能为空');
  ctx.assert(ctx.query.password,400,'密码不能为空');
});
router.get('/throw', async ctx => {
  if(!ctx.query.username || !ctx.query.password)
    ctx.throw(400,'用户名或密码不能为空')
})
router.get('/redirect', async ctx => {
  ctx.redirect('http://www.baidu.com');
});

server.use(router.routes());
server.listen(8080);
