const Router = require('koa-router')
const {test} = require('../libs/validator')
const {path_static} = require('../config')
const {unlink,exist} = require('../libs/fs')
const notice = require('../libs/notice')

let router = new Router()


//分页查找
router.get('/booklist/:page/:size', async ctx => {
    let {size,page} = ctx.params
    test(page,'page')
    page = parseInt(page)
    size = parseInt(size)
    let data = await ctx.db.query(`select * from novels limit ?,?`,[(page-1) * size, size])
    let count = await ctx.db.getCount('novels')
    if(data.length == 0)
        ctx.body = {ok:false,err:'no data'}
    else{
        ctx.body = {ok:true, data, pageCount:Math.ceil((count/size))}
    }

})
//根据id查找
router.get('/book/:id', async ctx => {
    let {id} = ctx.params
    test(id,'id')
    let data = await ctx.db.getById(id,'novels')
    ctx.body = {ok:true,data}
})
//删除
router.del('/book/:id',async ctx=>{
    let {id} = ctx.params
    test(id,'id')
    //删除数据
    let {icon} = await ctx.db.getById(id,'novels',['icon'])
    await ctx.db.delById(id,'novels')
    //删除图片
    let filePath = `${path_static}/imgs/${icon}`
    try{
        await unlink(filePath)
    } catch(e){ //删除失败
        if(exist(filePath)) { //文件存在
            notice(`file in ${filePath} can't be deleted`)
            ctx.body = {ok:false,err:'file can not be deleted'}
        }
    }
    ctx.body = {ok:true}
})
//添加
router.post('/book',async ctx => {
    let {title,author,description,icon,mark_score} = ctx.request.fields
})
//修改
router.post('/book/:id',async ctx => {
    
})
//test
router.get('/a/b', ctx =>{
    ctx.body='hello world'
})
module.exports = router.routes()