let Router = require('koa-router');
let router = new Router();
const {test,testAll} = require('../../libs/validator')
//获取所有收藏,分页展示
router.get('/',async ctx => {
    // let {page, size} = ctx.query; 
    // testAll(page, size);
    ctx.body = 'collection';
})
//创建收藏夹
router.post('/',async ctx => {
    ctx.body = '';
})
//添加收藏
router.post('/:id',async ctx => {
    ctx.body = '';
})
//修改收藏夹信息
router.put('/',async ctx => {

})

//删除收藏夹
router.delete('/',async ctx => {
    ctx.body = '';
})

//删除收藏
router.delete('/:id',async ctx => {

})


module.exports = router.routes();