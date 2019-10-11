const Koa = require('koa')
const Router = require('koa-router')
const mysql = require('mysql')
const co = require('co-mysql')

let server = new Koa();
let conn = mysql.createPool({
  host: 'localhost',
  user: 'lian',
  password: 'tb1766318380',
  database: 'student',
})
server.context.db = co(conn);
let router = new Router();
router.get('/a',async ctx => {
  ctx.body = await ctx.db.query('select * from student');
})

server.use(router.routes());
server.listen(8080);
