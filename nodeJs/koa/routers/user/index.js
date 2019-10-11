const Router = require('koa-router')

let router = new Router();
router.use('/admin',require('./admin.js'));
router.use('/company',require('./company.js'));

module.exports = router.routes();
