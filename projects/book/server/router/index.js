const Router = require('koa-router')
let router = new Router()

router.use('/book',require('./book'))

module.exports = router.routes()

