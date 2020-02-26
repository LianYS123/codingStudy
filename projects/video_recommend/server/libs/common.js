const crypto = require('crypto');
const { suffix } = require('../config');
const { test, testAll } = require('../libs/validator');
const tokens = {};
module.exports = {
    sign(str) {
        let obj = crypto.createHash('md5');
        return obj.update(str + suffix).digest().toString('hex');
    },
    getUser(token) {
        test(token, 'token');
        return tokens[token];
    },
    setUser(token, userId) {
        test(token, 'token');
        tokens[token] = userId;
    }
}