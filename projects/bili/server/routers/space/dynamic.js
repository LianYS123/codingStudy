let Router = require('koa-router');
let router = new Router();

//查看动态
router.get('/', async ctx => {
    ctx.body = 'dynamic';
})
//发布动态
router.post('/', async ctx => {
    ctx.body = '';
})
//修改动态
router.put('/', async ctx => {
    ctx.body = '';
})
//删除动态
router.delete('/', async ctx => {
    ctx.body = '';
})


module.exports = router.routes();