const Router = require('koa-router');
let router = new Router();

router.options('*',ctx => {
    ctx.body = {ok:true}
})
router.use('/api',  require('./api'));
router.use('/user', require('./user'));
router.use('/space',require('./space'))

module.exports = router.routes();