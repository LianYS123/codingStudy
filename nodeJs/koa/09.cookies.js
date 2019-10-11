const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa();

let router = new Router();
server.keys = ['adasdfsad','asdfdlsdfcna','xindsfgpasdf'];//循环密钥
router.get('/a',async ctx => {
  if(!ctx.cookies.get('amount')){
    console.log('没有amount');
    ctx.cookies.set('amount',998,{ //这只cookies
      signed: true//签名
    });
    ctx.body = 'over';
  } else{
    console.log(ctx.cookies.get('amount'));//获取cookies
    ctx.body = 'over';
  }
})

server.use(router.routes());
server.listen(8080);
