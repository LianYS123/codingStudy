const Router = require('koa-router');
const { test,testAll } = require('../../libs/validator');
const router = new Router();

router.get('/',async (ctx)=>{
    //提取封装数据和数据校验
    let {keyword, page, size} = ctx.query;
    testAll({page,size});
    page = parseInt(page);
    size = parseInt(size);
    //这里调用数据库...
    //返回数据
    ctx.body = {
        ok: true, data: {
            has_next,
            list,
            page,
            total
        }
    };
})

module.exports = router.routes();