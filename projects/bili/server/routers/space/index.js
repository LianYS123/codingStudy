let Router = require('koa-router');
let router = new Router();
let {getUser} = require('../../libs/common');

router.all('*',async (ctx,next)=>{
    let {'x-token':token} = ctx.header;
    if(getUser(token)){
        await next();
    } else{
        ctx.body = {ok:false,msg:'用户尚未登录'};
    }
})

// space/12345   查看个人空间主页
router.get('/:id',async ctx => {
    ctx.body = "space";
})


//动态
router.use('/:id/dynamic', require('./dynamic'));

//收藏夹
router.use('/:id/collection', require('./collection'));

//追剧信息
router.use('/:id/favorites', require('./favorites'));

// 我的关注
router.use('/:id/follow', require('./follow'));

//我的粉丝
router.use('/:id/fans', require('./fans'));

module.exports = router.routes();