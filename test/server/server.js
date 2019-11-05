let Koa = require('koa')
let mysql = require('mysql')
let co = require('co-mysql')
let server = new Koa()
let config = {
    columnsSql : "select COLUMN_NAME from INFORMATION_SCHEMA.Columns where table_name='item' and table_schema='test'"
}
let conn = mysql.createPool({
    host:'localhost',
    database: 'test',
    user:'lian',
    password:'tb1766318380',
    port:3306,
})
let db = co(conn)
server.use(async ctx=>{
    let res = await db.query('select * from item')
    ctx.body = res
})
server.listen(8080)