const path = require('path')

module.exports = {
    db_name: 'test',
    db_port: 3306,
    db_user: 'lian',
    db_password: 'tb1766318380',
    db_host: 'localhost',

    port: 8080,
    path_upload: path.resolve(__dirname,'upload'),
    path_static: path.resolve(__dirname,'static'),
    key_file: path.resolve(__dirname,'.keys'),
    path_notice: path.resolve(__dirname,'notice.txt')
}