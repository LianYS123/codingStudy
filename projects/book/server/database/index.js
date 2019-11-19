const mysql = require('mysql')
const co = require('co-mysql')
const {db_host,db_name,db_password,db_port,db_user} = require('../config')

let conn = mysql.createPool({
    host: db_host,
    database: db_name,
    user: db_user,
    port: db_port,
    password: db_password
})

let db = co(conn)
module.exports = db