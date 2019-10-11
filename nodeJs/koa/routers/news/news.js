const Router = require('koa-router')

let router = new Router();
router.get('/a',async ctx => {
  ctx.body = 'news a';
});

module.exports=router.routes();
