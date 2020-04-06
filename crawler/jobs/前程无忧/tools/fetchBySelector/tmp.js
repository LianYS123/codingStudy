const Crawler = require('crawler');
const { rateLimit } = require('../../config');
const defaultOpts = require('./defaultOpts');
const parse = require('./parse');
const utils = require('../utils');
const parseOpts = function ($, options) {
    let { itemProcess, el } = options;
    return new Promise((resolve, reject) => {
        parse($, options).then(result => {
            //处理一组数据的process(一个li级别的数据)
            if (typeof itemProcess === 'function') {
                element = el || $;
                let pro = itemProcess({ data: result, element, $ });
                if (utils.isPromise(pro)) {
                    
                    pro.then(res => {
                        console.log(res);
                        resolve(res);
                    }).catch(reject)
                } else {
                    resolve(pro);
                }
            } else {
                resolve(result);
            }
        })
    });
}

const linkCraw = new Crawler({
    jQuery: true,
    rateLimit,
    callback(err, res, done) {
        const { resolve, reject, uri } = res.options;
        let opts = res.options.opts;
        opts.uri = uri;
        if (err) {
            reject(err);
        } else {
            const $ = res.$;
            let { groups, selectors } = opts;
            if (Array.isArray(groups)) {
                if (selectors) {
                    //
                }
                let results = {}, length = groups.length;//处理完所有分组是减为0
                groups.forEach((group) => {
                    let { el, groupName } = group;
                    el = $(el);
                    let elResults = [], len = el.length;  //处理完一组数据时减为0
                    const done = (item) => {
                        if (item) {
                            elResults.push(item);
                        }
                        //循环完一个group(ul级别)
                        if (--len === 0) {
                            results[groupName || el] = elResults;
                            //循环完所有group(page级别)
                            if (--length === 0) {
                                resolve({ data: results, option: opts });
                            }
                        }
                    }
                    if (len === 0 && --length === 0) done();
                    el.each(function () {
                        let options = { ...opts, ...group, el: $(this) };
                        // console.log(options);
                        parseOpts($, options).then(done).catch(err => {
                            console.log(err);
                            done();
                        });
                    })
                })
            } else {
                parseOpts($, opts).then(resolve).catch(reject);
            }

        }
        done();
    }
})


module.exports = function (uri, opts = defaultOpts) {
    if (typeof uri === 'string') {
        return new Promise((resolve, reject) => {
            linkCraw.queue({
                uri, resolve, reject, opts: { ...defaultOpts, ...opts }
            })
        })
    }
    return Promise.reject(new Error('uri must be a string!!!'))
}