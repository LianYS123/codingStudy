// const defaultOpts = require('./defaultOpts');
const utils = require('../utils')
let x=0;
module.exports = function parse($, opts) {
    console.log('*'.repeat(100))
    console.log('x'+ ++x);
    console.log(opts.uri)
    
    let results = {};
    let selectors = opts.selectors || [opts];
    return new Promise((resolve) => {
        // resolve(1)
        if (Array.isArray(selectors)) {
            
            let len = selectors.length;
            if(len === 0) resolve(results)
            selectors.forEach(opt => {
                let matchs = [];  // 
                opt = { ...opts, ...opt };  //覆盖默认行为
                let { selector, attr, test, trim, deDuplication, name, handler, el, process, filter } = opt;
                let elements = el ? el.find(selector) : $(selector),
                    length = elements.length;

                //一定要考虑length===0的情况
                if(length === 0 && --len === 0) resolve(results);
                elements.each(function () {
                    try {
                        let value = attr === 'text' ? $(this).text() : $(this).attr(attr);
                        const ctx = { name, value, element: $(this), opt, $ }
                        value = handler ? handler(ctx) : value;  //使用传入的函数处理一下
                        if (value) {
                            value = typeof value === 'string' && trim ? value.trim() : value;
                            let valid = true;
                            if (test && filter) {
                                valid = test.test(value) && filter(value);
                            } else if (test) {
                                valid = test.test(value);
                            } else if (filter) {
                                valid = filter(value);
                            }
                            valid && matchs.push(value);
                        }
                    }
                    finally {
                        //解决异步问题
                        //循环完一组元素
                        // console.log(len,length)
                        
                        if (--length === 0) {
                            matchs = deDuplication ? [...new Set(matchs)] : matchs; //去重
                            if (typeof process === 'function') {
                                let pro = process({ matchs, $, name, element: elements, opt });   //处理
                                if (utils.isPromise(pro)) {
                                    pro.then(res => {
                                        matchs = res;
                                        results[name || selector] = matchs;
                                        //循环完所有元素
                                        if (--len === 0) {
                                            resolve(results);
                                        };
                                    }).catch(err => {
                                        console.log(err);
                                        if (--len === 0) {
                                            resolve(results);
                                        };
                                    })
                                } else {
                                    matchs = pro;
                                    results[name || selector] = matchs;
                                    if (--len === 0) {
                                        resolve(results)
                                    };
                                }
                            } else {
                                if (--len === 0) {
                                    resolve(results)
                                };
                            }
                        }
                    }
                });
            })
        }
    })
    
}