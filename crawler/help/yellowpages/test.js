const Crawler = require('crawler');
const fs = require('fs');
const { fetchLinks, match } = require('./tools');
let tmp = [];
const craw = new Crawler({
    jQuery:false,
    // rateLimit:500,
    callback(err, res, done) {
        if (err) {
            console.error(err);
        } else {
            let body = res.body.toString();
            let pattern = /([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})/g;
            let emails = match(body, pattern);
            emails = emails.filter(email => !tmp.includes(email))
            if(emails.length > 0){
                tmp.push(...emails);
                fs.appendFile('./res.txt',emails.join('\n') + '\n',err => {
                    if(err){
                        console.log(err);
                    }
                })
                console.log(emails);
            }
        }
        done();
    }
})

fetchLinks('http://www.yingjiesheng.com/hangzhoujob/').then(links => {
    console.log(links);
    craw.queue(links);
});



