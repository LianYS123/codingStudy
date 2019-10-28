let Koa = require('koa')
let body = require('koa-better-body')
let static = require('koa-static')

let server = new Koa();

server.listen(8080)

server.context.db = require('./database')

server.use(async (ctx,next)=>{
    ctx.response.set("Access-Control-Allow-Origin","*")
    await next();
})

server.use(body({
    uploadDir:'./upload'
}))


server.use(require('./routers'))

server.use(static('./public'))

