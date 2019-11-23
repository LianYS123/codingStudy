const mysql = require('mysql')
const co = require('co-mysql')
const {db_host,db_name,db_password,db_user,db_port} = require('../config')

let conn = mysql.createPool({
    host: db_host,
    database: db_name,
    password: db_password,
    user: db_user,
    port: db_port
})
let db = co(conn)

db.getById = async function(id,table,fields=['*']){
    let rows = await db.query(`select ${fields.join(',')} from ${table} where id = ?`,id)
    if(rows.length == 0) throw 'no data'
    return rows[0]
}
db.delById = async function(id,table){
    await db.query(`delete from ${table} where id = ?`,[id])
}
db.getCount = async function(table){
    let rows = await db.query(`select count(*) c from ${table}`)
    return rows[0]['c']
}
module.exports = db