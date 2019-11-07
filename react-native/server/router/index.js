const Router = require('koa-router')

let router = new Router()
router.use('/items',require('./items'))

module.exports = router.routes()

