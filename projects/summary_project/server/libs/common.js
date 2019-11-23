const crypto = require('crypto')
const {suffix} = require('../config')

module.exports = {
    sign(str){
        let obj = crypto.createHash('md5')
        return obj.update(str + suffix).digest().toString('hex')
    }
}