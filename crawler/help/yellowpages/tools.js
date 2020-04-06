const fs = require('fs');
const Crawler = require('crawler');
const assert = require('assert');
const uidReg = /([0-9a-z]{40}|[0-9a-z]{32}|[0-9a-z]+本站不提供下载[0-9a-f]+)/ig;
function match(content,reg) {
    if (!content) return [];
    let results = [], hasNext = true;
    while (hasNext) {
        let matchs = reg.exec(content);
        if (matchs) {
            results.push(matchs[0]);
        } else {
            hasNext = false;
        }
    }
    results = [...new Set(results)]
    return results;
}

let linkCraw = new Crawler({
    jQuery: true,
    rateLimit: 500
})

function fetchLinks(uri) {
    if (typeof uri === 'string') {
        return new Promise((resolve, reject) => {
            linkCraw.queue({
                uri,
                callback(err, res, done) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        let $ = res.$;
                        // console.log($('title').text());
                        let links = [];
                        $('a').each(function () {
                            href = $(this).attr('href');
                            if(href){
                                links.push(href.trim())
                            }
                        });
                        let uri = res.options.uri;
                        links.push(uri);
                        uri = uri.endsWith('/') ? uri.substring(0,uri.length-1) : uri;

                        links = links
                        .map(link => {
                            if(link.startsWith('//')){
                                return 'http' + link;
                            } else if(link.startsWith('/')){
                                return uri + link;
                            }
                            return link;
                        })
                        .filter(link => link && /^((https?:)?\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+))(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(link));
                        let set = new Set(links);
                        resolve([...set]);
                    }
                    done();
                }
            })
        })
    }
    return Promise.reject(new Error('uri must be a string!!!'))
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
                    assert(!err, 'write file err!!!')
                })
            }
            done();
        }
    }]);
}
module.exports = {
    fetchFile,
    notice,
    match,
    fetchLinks
}