const Router = require('koa-router')

let router = new Router();
router.get('/a',async ctx => {
  ctx.body = 'cart a';
});

module.exports=router.routes();
