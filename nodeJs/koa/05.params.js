const Koa = require('koa');
const Router = require('koa-router');
let server = new Koa();
let router = new Router();

router.get('/a/:id', async ctx => {
  let {id} = ctx.params;
  console.log(id);
  ctx.body = id;
})
router.get('/a/:id1/:id2/:id3', async ctx => {
  let {id1,id2,id3} = ctx.params;
  console.log(ctx.params);
  ctx.body = `id1:${id1}  id2:${id2}  id3:${id3}`;
})

server.use(router.routes());//这里传的是一个routes方法，不要忘了
server.listen(8080);
