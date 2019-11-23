const Router = require('koa-router')
const {test} = require('../../libs/validator')
const {path_static} = require('../../config')
const {unlink,exist,rename} = require('../../libs/fs')
const notice = require('../../libs/notice')
const path = require('path')

let router = new Router()
const imagePath = path.resolve(path_static,'imgs')
const remove = async (filePath) => {
    try{
        await unlink(filePath)
    } catch(e){ //删除失败
        if(exist(filePath)) { //文件存在
            notice(`file in ${filePath} can't be deleted`)
        }
    }
}
const moveImage = async (file,dest) => {
    let {size,path:filepath,type} = file
    let {base,ext} = path.parse(filepath)
    dest = dest || path.resolve(imagePath,base+ext)
    if(size == 0) {
        await remove(filepath)
        throw 'image upload failed'
    }
    try{
        test(type,'imageType')  //判断类型是否为图片
    } catch(e){
        await remove(filepath)
        throw `image type ${type} isn't supported`
    }
    await rename(filepath,dest)
}
//分页查找
router.get('/pagecount/:size',async ctx=>{  //获取页数
    let {size} = ctx.params
    size = parseInt(size)
    let count = await ctx.db.getCount('novels')
    let data = Math.ceil((count/size))
    ctx.body = {ok:true,data}
})
router.get('/booklist/:page/:size', async ctx => {  //获取一页的内容
    let {size,page} = ctx.params
    test(page,'page')
    page = parseInt(page)
    size = parseInt(size)
    let data = await ctx.db.query(`select * from novels limit ?,?`,[(page-1) * size, size])
    if(data.length == 0)
        ctx.body = {ok:false,err:'no data'}
    else{
        ctx.body = {ok:true, data}
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
router.get('/delbook/:id',async ctx=>{
    let {id} = ctx.params
    test(id,'id')
    //删除数据
    let {icon} = await ctx.db.getById(id,'novels',['icon'])
    await ctx.db.delById(id,'novels')
    //删除图片
    let filePath = path.resolve(imagePath,icon)
    await remove(filePath)
    ctx.body = {ok:true}
})
//添加
router.post('/book',async ctx => {
    let {title,author,description,icon} = ctx.request.fields
    //数据校验
    if(!title || title == '') throw 'title is required'
    if(!author || author == '') throw 'author is required'
    if(!icon) throw 'icon is required'
    description = description || ''
    //移动图片
    moveImage(icon[0])
    //存到数据库
    let {name:filename} = path.parse(icon[0].path)
    await ctx.db.query(
        `insert into novels (title,author,description,icon) values(?,?,?,?)`,
        [title,author,description,filename])
    ctx.body={ok:true}
})
//修改
router.post('/book/:id',async ctx => {
    let {id,title,author,description,icon} = ctx.request.fields
    test(id,'id')
    if(!title || title == '') throw 'title is required'
    if(!author || author == '') throw 'author is required'

    if(icon){
        //移动图片
        await moveImage(icon[0])
        //删除原来的
        let {icon:old} = await ctx.db.getById(id,'novels',['icon'])
        console.log(old)
        await remove(path.resolve(imagePath,old))
        //将icon改为文件名
        let {name:filename} = path.parse(icon[0].path)
        icon = filename
    }

    let fields = {id,title,author,description,icon}
    let arr = []
    for(let key in fields) {
        if(!fields[key]) continue
        arr.push(key+'='+`"${fields[key]}"`)
    }
    let sql = `update novels set ${arr.join(',')} where id = ${id}`
    // console.log(sql)
    await ctx.db.query(sql)
    ctx.body={ok:true}

})
module.exports = router.routes()