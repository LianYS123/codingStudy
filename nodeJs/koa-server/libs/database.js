const mysql = require('mysql')
const co = require('co-mysql')

let conn = mysql.createPool(require('../config.js').database);

module.exports = co(conn);
