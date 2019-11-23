const Koa = require('koa')
const session = require('koa-session')
const static = require('koa-static')
const body = require('koa-better-body')
const convert = require('koa-convert')
const {port,path_upload,path_static,key_file} = require('./config')
const fs = require('fs')
let server = new Koa()

server.context.db = require('./libs/database')

server.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*')
    await next()
})
server.use(convert(body({
    uploadDir: path_upload
})))
server.keys = fs.readFileSync(key_file).toString().split(',')
server.use(session({
    maxAge: 20 * 60 * 1000,
    renew: true,
    signed:true
    // httpOnly:true
},server))

server.use(async (ctx,next)=>{
    try{
       await next()
    } catch(e){
        if(typeof e == 'string') {
            ctx.body = {ok:false,err: e}
        } else {
            ctx.body = {ok:false, err: 'internal server error'}
            console.error(e)
        }
    }
})

server.use(require('./router'))
server.use(static(path_static,{

}))
server.listen(port)