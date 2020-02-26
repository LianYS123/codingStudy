let Router = require('koa-router');
let router = new Router();

//查看关注
router.get('/',async ctx => {
    ctx.body = 'follow';
})
//关注一个用户
router.post('/',async ctx => {
    ctx.body = '';
})
//无
router.put('/',async ctx => {
    ctx.body = '';
})
//取消关注
router.delete('/',async ctx => {
    ctx.body = '';
})


module.exports = router.routes();