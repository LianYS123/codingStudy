const Router = require('koa-router')
let router = new Router();


router.use('/item',require('./item'))

module.exports = router.routes()