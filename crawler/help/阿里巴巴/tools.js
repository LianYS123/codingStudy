const fs = require('fs');
const Crawler = require('crawler');
const assert = require('assert');
function getUids(content) {
    if (!content) return [];
    let uids = [], hasNext = true;
    let reg = /([0-9a-z]{40}|[0-9a-z]{32}|[0-9a-z]+本站不提供下载[0-9a-f]+)/ig;
    while (hasNext) {
        let matchs = reg.exec(content);
        if (matchs) {
            uids.push(matchs[0].split('本站不提供下载').join(''));
        } else {
            hasNext = false;
        }
    }
    return uids;
}
function notice(path, msg) {
    fs.appendFile(path, msg + '\n', function (err) {
        if (err) {
            console.log('write file error!');
            console.log(err);
        }
    });
}
let imgCrawler = new Crawler({
    encoding: null,
    jQuery: false,
    rateLimit: 500
})
function fetchFile(uri, path) {
    imgCrawler.queue([{
        uri,
        callback(err, res, done) {
            if (err) {
                console.log(err);
                notice('./log/spider_err.log', err.message)
            } else {
                fs.writeFile(path, res.body, err => {
                    assert(!err,'write file err!!!')           
                })
            }
            done();
        }
    }]);
}
module.exports = {
    fetchFile,
    notice,
    getUids
}