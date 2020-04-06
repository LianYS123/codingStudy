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
            let $ = res.$;
            let title = $('.entry-title').text();
            let rating_count = $('.post-ratings strong').eq(0).text().trim();
            let rating_score = $('.post-ratings strong').eq(1).text().trim();
            let uids = getUids($('.entry-content').text());
            let data = {
                title,
                rating_count: parseInt(rating_count) || 0,
                rating_score: parseFloat(rating_score) || 0,
                uid: uids.join('|'),
                ...res.options.data
            };
            (async ()=>{
                // let count = await db.getCount('article',`href=${db.valueFilter(data.href)}`);
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
