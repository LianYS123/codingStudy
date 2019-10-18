let Koa = require('koa');
let Router = require('koa-router');
let static= require('koa-static');
let path = require('path');
let body = require('koa-better-body');
let mysql = require('mysql')
let co = require('co-mysql')



let server = new Koa();
server.listen(8081);

let conn = mysql.createPool({
    host:'localhost',
    user:'lian',
    password:'tb1766318380',
    database:'test'
})
server.context.db = co(conn);
let router = new Router();

server.use(body());//server.use()不是router.use();
server.use(async (ctx,next)=>{
    ctx.res.setHeader('Access-Control-Allow-Origin','*')
    await next();
})
router.get('/users', async ctx => {
    console.log('users request');

    ctx.body = await ctx.db.query('select id,username,password from users');//注意：数据库操作是一个异步操作
    
})
router.get('/del/:id',async ctx => {
    console.log('del request');
    try{
        let {id}=ctx.params;
        await ctx.db.query('delete from users where id = ?',id)
        ctx.body = {success:true,message:'删除成功'}
    }catch(e){
        console.log(e);
        ctx.body = {
            success:false,
            message:'删除失败'
        }
    }
})
router.get('/user',async ctx=>{
    console.log('get request');
    
    console.log(ctx.request.fields);;
    ctx.body = {"username":"lian","password":"123456"};
})
router.post('/user',async ctx => {
    console.log('post request');
    
    console.log(ctx.request.fields);
    ctx.body = {"username":"lian","password":"123456"}
})


server.use(router.routes());
server.use(static(path.resolve(__dirname,'./03.communication')));