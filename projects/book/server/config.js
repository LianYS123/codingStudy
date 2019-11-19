const path = require('path')
module.exports = {
    db_user:'lian',
    db_password:'123456',
    db_port:3306,
    db_name:'test',
    db_host:'localhost',

    path_upload: path.resolve(__dirname,'upload'),
    path_static: path.resolve(__dirname,'static'),
    path_key: path.resolve(__dirname,'.keys'),
    port: 8080
}