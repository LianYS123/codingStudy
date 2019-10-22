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
  //如果有要传参，可以用 ctx.db.query('select * from student where id = ?',id)
  //如果有多个参数，query第二个参数可以是数组：ctx.db.query('select * from student where id = ? and name = ?',[id,name])
  //query的第三个参数是一个回调函数

  //对于：callback.apply is not a function in node js 这个错误：传入的第3个参数不是一个回调函数
})

server.use(router.routes());
server.listen(8080);
