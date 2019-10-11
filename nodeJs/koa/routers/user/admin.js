const Router = require('koa-router')

let router = new Router();
router.get('/a',async ctx => {
  ctx.body = 'admin a';
});

module.exports=router.routes();
