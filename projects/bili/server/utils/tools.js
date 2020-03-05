const fs = require('fs');
const Crawler = require('crawler');
function notice(path, msg) {
    fs.appendFile(path, msg + '\n', function (err) {
        if (err) {
            console.log('write file error!');
            console.log(err);
        }
    });
}
//d2a29631ca19a2fd119e0ae27fbf9c42165c322c
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
                notice('../log/spider_err.log', err.message)
            } else {
                fs.writeFile(path, res.body, err => {
                    if (err) {
                        console.log(err);
                        notice('../log/spider_err.log', err.message);
                    }
                })
            }
            done();
        }
    }]);
}
module.exports = {
    fetchFile,
    notice
}