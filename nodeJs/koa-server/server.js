const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const body = require('koa-better-body');
const session = require('koa-session')
const fs = require('fs')
const static = require('./routers/static.js')
const ejs = require('koa-ejs')

let server = new Koa();
let router = new Router();

server.context.config = require('./config.js');
server.context.db = require('./libs/database.js');
server.context.admin = require('./admin.js');

require('./libs/common.js').generateKeys();
server.keys = fs.readFileSync('./.keys').toString().split('\n');
server.use(session({
  maxAge: 20 * 86400 * 1000,
  renew: true
},server))


ejs(server,{
  root: './template/',
  layout: false,//
  viewExt:'ejs',//扩展名
  cache:false,//缓存
  debug:false//打印bug
})

router.use('/admin',require('./routers/admin'));
server.use(body({  //better-body是server.use
  uploadDir: './static/upload'
}))

static(router,{
  js: 86400 * 1000 * 60
});
server.use(router.routes());

server.listen(8080);
