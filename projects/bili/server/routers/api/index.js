const Router = require('koa-router');
let router = new Router();

router.use('/search',require('./search'));
router.use('/video',require('./video'));

module.exports = router.routes();