const Router = require('koa-router');
let router = new Router();
router.use('/api', require('./api'));
module.exports = router.routes();