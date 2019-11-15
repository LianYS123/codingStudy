const mysql = require('mysql')
const co = require('co-mysql')
const {db_host,db_name,db_password,db_port,db_user} = require('./config')

let conn = mysql.createPool({
    host:db_host,
    port:db_port,
    user:db_user,
    password:db_password,
    database:db_name
})

let db = co(conn)
module.exports = db