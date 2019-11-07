const mysql = require('mysql')

let db = mysql.createPool({
    host:'localhost',
    database:'test',
    user:'lian',
    password:'tb1766318380'
})
db.query('select * from item',(error, results, fields)=>{
    if(error) throw error
    console.log(results)
    return
})
