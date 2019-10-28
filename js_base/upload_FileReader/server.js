const Koa = require('koa')
let path = require('path')
const mysql = require('mysql')
const co = require('co-mysql')
const body = require('koa-better-body')
const Router = require('koa-router')

let server = new Koa()
server.listen(8080)
let router = new Router()

let conn = mysql.createPool({
    host:'localhost',
    user:'lian',
    password:'tb1766318380',
    database:'test'
})
let db= co(conn)
server.context.db = db

server.use(body({  //给server加
    uploadDir:path.resolve(__dirname,'upload'),
    maxFileSize: 1024 * 1024 * 1024  //设置最大上传大小
}))

router.all('/upload',ctx => {
    ctx.set('Access-Control-Allow-Origin','*')  //同意跨域
    let fields = ctx.request.fields
    let files = []
    for(let field in fields) {
        let { path, name }= fields[field][0]
        files.push(`("${name}","${path}")`)
    }
    let sql = 'insert into files(name,path) values' + files.join(',')
    console.log(sql);
    
    ctx.db.query(sql)
    console.log('---------------------------');
    ctx.body='test'
})

server.use(router.routes())