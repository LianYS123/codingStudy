const Crawler = require('crawler');
const { notice, fetchFile, getUids } = require('./tools');
const db = require('./db');
let detail = new Crawler({
    callback(err, res, done) {
        console.log('fetch detail uri: ' + res.options.uri);
        if (err) {
            notice('./crawler_err.log', err);
            console.log(err);
        } else {
            (async ()=>{
                db.update('article',data,`id=${res.options.id}`);
            })()
        }
        done();
    }
});

(async ()=>{
    let arr = (await db.select('article',['href','id'], 'length(uid)<32 and title != \'\''));
    arr = arr.map(item => ({uri:item.href,id:item.id}));
    detail.queue(arr);
})()
