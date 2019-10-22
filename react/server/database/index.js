let mysql = require('mysql')
let co = require('co-mysql')

let conn = mysql.createPool({
    host:'localhost',
    user:'lian',
    password:'tb1766318380',
    database:'test'
})
module.exports = co(conn)