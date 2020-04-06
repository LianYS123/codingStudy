const Crawler = require('crawler');
const { rateLimit } = require('../../config');
const defaultOpts = require('./defaultOpts');
const parse = require('./parse');
const utils = require('../utils');

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
            let { groups } = opts;
            if (Array.isArray(groups)) {
                let results = {}, length = groups.length;//处理完所有分组是减为0
                groups.forEach((group) => {
                    let { el, selectors, groupName, itemProcess } = group;
                    el = $(el);
                    let elResults = [], len = el.length;  //处理完一组数据时减为0
                    const done = (item) => {
                        // console.log(item);
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
                    if(len === 0 && --length === 0) done();
                    el.each(function () {
                        let element = $(this);
                        parse($, { ...opts, ...group, selectors, el: element }).then(result => {
                            //处理一组数据的process(一个li级别的数据)
                            if (typeof itemProcess === 'function') {
                                let pro = itemProcess({ data: result, element, $ });
                                if (utils.isPromise(pro)) {
                                    // 进来了15次
                                    // pro只resolve了5次
                                    pro.then(res => {
                                        done(res);
                                    }).catch(err => {
                                        console.log(err);
                                        done();
                                    })
                                } else {
                                    done(pro);
                                }
                            } else {
                                done(result);
                            }
                        }).catch(err => {
                            console.log(err);
                            done();
                        })
                    })
                })
            } else {
                parse($, opts).then(results => {
                    resolve({ data: results, option: opts });
                }).catch(error => {
                    console.log(error);
                    reject(error);
                });
            }

        }
        done();
    }
})


module.exports = function (uri, opts = defaultOpts) {
    if (typeof uri === 'string') {
        console.log(uri)
        return new Promise((resolve, reject) => {
            linkCraw.queue({
                uri, resolve, reject, opts: { ...defaultOpts, ...opts }
            })
        })
    }
    return Promise.reject(new Error('uri must be a string!!!'))
}