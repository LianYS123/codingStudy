const pathlib = require('path')

const resolve = (path) => {
    return pathlib.resolve(__dirname,path);
}
module.exports = {
    ERROR_LOG_PATH: resolve('./log/crawler_err.log'),
    DB_NAME: 'job',
    DB_HOST: 'localhost',
    DB_PASS: 'tb1766318380',
    DB_USER: 'lian',
    DB_PORT: 3306,
    FILE_PATH: resolve('./static/files'),
    rateLimit: 500
}