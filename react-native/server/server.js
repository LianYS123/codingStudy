const Koa = require('koa')
let server = new Koa()
server.listen(8080)
server.context.db = require('./database')
server.use(async (ctx,next) => {
    ctx.set('Access-Control-Allow-Origin','*')
    await next()
})
server.use(async (ctx,next) => {
    try{
        await next()
    } catch(e) {
        ctx.body = {ok:false,err:'internal server error'}
        console.log(e)
    }
})
server.use(require('./router'))