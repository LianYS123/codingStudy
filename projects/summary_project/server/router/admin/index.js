const Router = require('koa-router')

let router = new Router();

router.use('/login',require('./login'))

router.all('*',async (ctx,next)=>{
    let {pathname} = ctx.URL
    console.log(ctx.session.admin)
    if(ctx.session.admin || pathname == '/admin/login') await next();
    else {
        ctx.status = 400
        ctx.body = {ok:false,err:'login'}
    }
})
router.use('/api',require('./api'))

module.exports = router.routes();