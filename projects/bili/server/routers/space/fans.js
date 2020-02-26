let Router = require('koa-router');
let router = new Router();

//查看所有粉丝信息
router.get('/',async ctx => {
    ctx.body = 'fans';
})
//没有主动添加粉丝功能，就不实现了...
router.post('/',async ctx => {
    ctx.body = '';
})
//也没有
router.put('/',async ctx => {
    ctx.body = '';
})
//移除粉丝
router.delete('/',async ctx => {
    ctx.body = '';
})


module.exports = router.routes();