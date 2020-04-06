const { FILE_PATH,rateLimit } = require('../config');
const {v4:uuid} = require('uuid');
const pathlib = require('path');
const fs = require('fs');
const Crawler = require('crawler');

let imgCrawler = new Crawler({
    encoding: null,
    jQuery: false,
    rateLimit,
    callback(err, res, done) {
        let {resolve,reject,path,uri} = res.options;
        if (err) {
            reject(err);
        } else {
            let name = uuid();
            if(uri.includes('.')){
                let i = uri.lastIndexOf('.');
                name = name + uri.substring(i);
            }
            fs.writeFile(path, res.body, err => {
                if (!err) {
                    resolve(path)
                } else {
                    reject(err);
                }
            })
        }
        done();
    }
})

function fetchFile(uri, path = pathlib.resolve(FILE_PATH, name)) {
    return new Promise((resolve, reject) => {
        imgCrawler.queue([{
            uri,
            path,
            resolve,reject
        }]);
    })
}

module.exports = fetchFile;