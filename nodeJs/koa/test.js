let Koa = require('koa')
let server = new Koa();
server.listen(8080);
server.use(async (ctx,next) => {
    console.log('hello');
    ctx.body='hello';
    
})