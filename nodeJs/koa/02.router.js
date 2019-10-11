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

server.use(router.routes());
server.listen(8080);
