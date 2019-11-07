const Koa = require('koa')
let server = new Koa()
server.listen(8080)
server.use(require('./router'))