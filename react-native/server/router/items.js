const Router = require('koa-router')
let router = new Router()

router.get('/getItems',ctx=>{
    ctx.body = 'items test'
})

module.exports = router.routes()