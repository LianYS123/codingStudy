const Router = require('koa-router')
let router = new Router()

router.get('/test',async ctx => {
    ctx.body = {ok:true,data:'book api test'}
})
module.exports = router.routes()