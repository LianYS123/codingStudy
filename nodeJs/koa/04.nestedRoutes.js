const Koa = require('koa')
const Router = require('koa-router')
let server = new Koa();

let router = new Router();

router.use('/user',require('./routers/user'));//自动找user下面的index.js
router.use('/cart',require('./routers/cart/cart.js'));//cart.js中暴露的是cart.routes方法
router.use('/news',require('./routers/news/news.js'));
server.use(router.routes());
server.listen(8080);
