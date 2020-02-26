const Router = require('koa-router');
const { test,testAll } = require('../../libs/validator');
const router = new Router();

//分页获取所有
router.get('/', async ctx => {
    //提取数据
    let { type, area, tag, sort, desc, page, size} = ctx.query;
    //数据校验
    testAll({num:page,size});
    test(sort, 'sort', false);
    //格式化
    page = parseInt(page);
    size = parseInt(size);
    //这里封装数据完成，调用数据库(或者service)
    ctx.body = {
        ok: true, data: {
            has_next,
            list,
            page,
            total
        }
    };
})
//获取指定
router.get('/:media_id', async ctx => {
    let { media_id } = ctx.params;
    test(media_id, 'id');
    media_id = parseInt(media_id);
    //这里调用database层得到数据
    ctx.body = { ok: true, data: { mediaInfo } };
})

module.exports = router.routes();