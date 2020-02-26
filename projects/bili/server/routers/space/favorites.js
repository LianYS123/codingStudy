let Router = require('koa-router');
let router = new Router();

//查看追剧
router.get('/',async ctx => {
    ctx.body = 'favorites';
})
//添加追剧
router.post('/',async ctx => {
    ctx.body = '';
})
//无
router.put('/',async ctx => {
    ctx.body = '';
})
//删除追剧
router.delete('/',async ctx => {
    ctx.body = '';
})


module.exports = router.routes();