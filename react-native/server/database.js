const mysql = require('mysql')
const co = require('co-mysql')

let conn = mysql.createPool({
    host:'localhost',
    database:'test',
    port:'3306',
    user:'lian',
    password:'tb1766318380'
})

module.exports = co(conn)