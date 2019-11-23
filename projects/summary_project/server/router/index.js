const Router = require('koa-router')

let router = new Router()
router.use('/admin',require('./admin'))
module.exports = router.routes()