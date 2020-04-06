// const { crawUriFilter: filter } = require('./utils')
const Crawler = require('crawler');
const match = require('./match');
const { rateLimit } = require('../config')
const craw = new Crawler({
    jQuery: false,
    rateLimit,
    callback(err, res, done) {
        const { resolve, reject } = res.options;
        if (err) {
            reject(err);
        } else {
            let { pattern } = res.options;
            let body = res.body.toString();
            let results = match(body.toString(), pattern);
            resolve(results);
        }
        done();
    }
})

module.exports = function (uri, pattern) {
    if (typeof uri !== 'string') { return Promise.reject('uri must be a string') }
    return new Promise((resolve, reject) => {
        craw.queue([{ uri, pattern, resolve, reject }])
    })
}