const fs = require('fs');
const { ERROR_LOG_PATH } = require('../config');
const createLinks = require('./createLinks');

function removeSpace(text) {
    if (typeof text !== 'string') return text;
    return text ? text.replace(/\s+/g, '') : undefined;
}
module.exports = {
    createLinks,
    removeSpace,
    isPromise(obj){
        return typeof obj === 'object' && typeof obj.then === 'function';
    },
    crawUriFilter(uri, opts) {
        if (typeof uri === 'string') {
            return [{ uri, ...opts }]
        } else if (Array.isArray(uri)) {
            return uri.map(item => {
                if (typeof item === 'string') {
                    return { uri: item, ...opts }
                }
                else {
                    return { ...item, ...opts }
                }
            })
        } else throw new Error('invalid uri type!');
    },
    convertFnWithLog(expo) {
        const results = {};
        Object.keys(expo).forEach(key => {
            let fn = expo[key];
            let res = function (...args) {
                return fn.apply(this, args).catch(error => {
                    console.log(fn.name + " : " + error);
                    fs.appendFile(ERROR_LOG_PATH, error, err => {
                        if (err) {
                            console.log(err);
                            return err;
                        }
                    });
                    return error;
                })
            }
            results[key] = res;
        })
        return results;
    }
}