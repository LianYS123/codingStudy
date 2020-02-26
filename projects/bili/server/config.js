const path = require('path')

module.exports = {
    //db
    DB_USER: 'lian',
    DB_PASS: 'tb1766318380',
    DB_PORT: 3306,
    DB_NAME: 'video_recommend',
    DB_HOST: 'localhost',

    //
    SERVER_PORT: 8080,

    //path
    PATH_STATIC: path.resolve(__dirname, 'static'),
    PATH_UPLOAD: path.resolve(__dirname, 'upload'),
    PATH_NOTICE: path.resolve(__dirname, 'log/notice.log'),

    suffix:'aasfdsflksdfkdsf'
}