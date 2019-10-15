let Koa = require('koa');
let Router = require('koa-router');
let static= require('koa-static');
let path = require('path');
let body = require('koa-better-body');

let server = new Koa();
server.listen(8081);

let router = new Router();

server.use(body());//server.use()不是router.use();
server.use(async (ctx,next)=>{
    ctx.res.setHeader('Access-Control-Allow-Origin','*')
    await next();
})
router.get('/users', async ctx => {
    console.log('users request');
    ctx.body = [
        {"username":"lian","password":"123456"},
        {"username":"zhangsan","password":"111"},
        {"username":"lisi","password":"222"},
    ]
    
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