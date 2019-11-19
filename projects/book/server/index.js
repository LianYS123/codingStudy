const Koa = require('koa')
const session = require('koa-session')
const body = require('koa-better-body')
const static = require('koa-static')
const fs = require('fs')
const {port,path_static,path_upload,path_key} = require('./config')
let server = new Koa()

server.context.db = require('./database')
server.keys = fs.readFileSync(path_key).toString().split(',')

server.use(session({
    renew: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 20
}, server))

server.use(async (ctx,next) => {
    try{
        ctx.set('Access-Control-Allow-Origin','*')
        await next()
    }catch(e){
        if(typeof e === 'string') {
            ctx.body = {ok:false,err:e}
        } else {
            console.log(e)
            ctx.body = {ok:false,err:'internal server error'}
        }
    }
})


server.use(body({
    uploadDir:path_upload
}))

server.use(require('./router'))

server.use(static(path_static))
server.listen(port)
