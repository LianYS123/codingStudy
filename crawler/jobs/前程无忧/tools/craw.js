const Crawler = require('crawler');
const { rateLimit } = require('../config')
const { crawUriFilter: filter } = require('./utils')
const craw = new Crawler({
    jQuery: true,
    rateLimit,
    callback(err, res, done) {
        const { resolve, reject } = res.options;
        err ? reject(err) : resolve(res);
        done();
    }
})

module.exports = function (uri, opts = {}) {
    return new Promise((resolve, reject) => {
        craw.queue(filter(uri, { resolve, reject, ...opts }))
    })
}