const Koa = require('koa')
const Router = require('koa-router')
const session = require('koa-session')

let server = new Koa();

let router = new Router();
server.keys = ['adasdfsad','asdfdlsdfcna','xindsfgpasdf'];//循环密钥

server.use(session({
  maxAge: 20*60*1000, //20min
  renew: true //自动刷新时间
},server))//需要server
router.get('/a',async ctx => {
  if(!session.view){
    session.view = 1;
  }
  else{
    session.view ++;
  }
  ctx.body = `欢迎你第${session.view}次来访`;
})

server.use(router.routes());
server.listen(8080);
