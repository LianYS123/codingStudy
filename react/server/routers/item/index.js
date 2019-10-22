let Router = require('koa-router')
let router = new Router()


router.post('/add',async ctx => {
    let {item_name,item_price,desc} = ctx.request.fields;
    try{
        let res = await ctx.db.query(
            'insert into item(item_name, item_price, `desc`) values(?,?,?)',
            [item_name,item_price,desc]
        )

        if(res.affectedRows == 0){
            ctx.body = {
                error:true,
                msg:'插入失败'
            }
        }
        else{
            let {insertId} = res;
            ctx.body = {
                msg:"success",
                insertId
            }
        }
    }
    catch(err){
        console.log(err);
        ctx.status = err.statusCode || err.status || 500
        ctx.body = {
            error : true,
            msg : '服务器错误'
        }
    }
})


router.get('/del/:id',async ctx => {
    let {id} = ctx.params;
    
    try{
        let res = await ctx.db.query('delete from item where ID = ?',id)

        if(res.affectedRows == 0){
            ctx.body = {
                error:true,
                msg:'该商品不存在'
            }
        }
        else{
            ctx.body = {
                msg:"success"
            }
        }
        
    } catch(e){
        console.log(e);
        ctx.status = e.statusCode || e.status || 500
        ctx.body = {
            error:true,
            msg:'服务器错误'
        }
    }
})

router.post('/modify',async ctx => {
    console.log(ctx.request.fields);
    let {ID,item_name,item_price,desc} = ctx.request.fields;
    
    try{
        let res = await ctx.db.query(
            'update item set item_name = ?, item_price = ?, `desc` = ? where id = ?',
            [item_name,item_price,desc,ID]
        )

        if(res.affectedRows == 0){
            ctx.body = {
                error:true,
                msg:'该商品不存在'
            }
        }
        else{
            ctx.body = {
                msg:"success"
            }
        }
    }
    catch(err){
        console.log(err);
        ctx.status = err.statusCode || err.status || 500
        ctx.body = {
            error : true,
            msg : '服务器错误'
        }
    }
})


router.get('/getItems',async ctx => {
    try{
        let data = await ctx.db.query('select ID,item_name,item_price,`desc` from item')
        ctx.body = {
            data,
            msg:"success"
        }
    }
    catch(err){
        console.log(err);
        ctx.status = err.statusCode || err.status || 500
        ctx.body = {
            error : true,
            msg : '服务器错误'
        }
    }
})

module.exports = router.routes();