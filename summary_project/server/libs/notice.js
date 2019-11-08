const {appendFile} = require('./fs')
const {path_notice} = require('../config')
module.exports = async function(msg) {
    appendFile(path_notice,msg)
}