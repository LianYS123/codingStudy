let Router = require('koa-router');
let router = new Router();
let {getUser} = require('../libs/common');

router.all('*',async (ctx,next)=>{
    let {'x-token':token} = ctx.header;
    if(getUser(token)){
        await next();
    } else{
        ctx.body = {ok:false,msg:'用户尚未登录'};
    }
})
router.get('/test',async ctx =>{
    ctx.body = {ok:true, msg:'test'};
})

module.exports = router.routes();