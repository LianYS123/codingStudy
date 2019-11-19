const path = require('path')
function resolve(name){
    path.resolve(__dirname,name)
}
module.exports = {
    db_user:'lian',
    db_password:'123456',
    db_port:3306,
    db_name:'test',
    db_host:'localhost',

    path_upload:resolve('upload'),
    path_static:resolve('static'),
    path_key:resolve('.keys'),
    part: 8080
}