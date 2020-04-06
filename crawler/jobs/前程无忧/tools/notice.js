const fs = require('fs');
const { ERROR_LOG_PATH } = require('../config')
function notice(msg, path = ERROR_LOG_PATH) {
    return new Promise((resolve,reject)=>{
        fs.appendFile(path, msg + '\n', function (err) {
            if (err) {
                reject(err);
            } else{
                resolve(true)
            }
        });
    })
}

module.exports = notice;