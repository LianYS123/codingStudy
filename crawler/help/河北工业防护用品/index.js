const Crawler = require('crawler');
const { notice, fetchFile, getUids } = require('./tools');
const fs = require('fs')
const db = require('./db');


let craw = new Crawler({
    jQuery: true,
    // rateLimit: 500,
    callback(err, res, done) {
        console.log('fetch page uri: ' + res.options.uri);
        if (err) {
            notice('./crawler_err.log', err + ' : ' + res.options.uri);
            console.log(err);
        } else {
            // console.log(res.body.toString());
            let $ = res.$;
            let uri = res.options.uri;
            let title = $('body > div.container > div.header > div.head-mid.ac > h1').text().trim();
            let person = $('body > div.container > div.content > div > div:nth-child(1) > div.bd.clearfix > div.label.l > span.nr').text().trim();
            let type = $('body > div.container > div.content > div > div:nth-child(1) > div.bd.clearfix > div.label.r > span.nr').text().trim();
            let area = $('body > div.container > div.content > div > div:nth-child(1) > div.label.mt20 > span.nr').text().trim();
            let website = $('body > div.container > div.content > div > div:nth-child(2) > div:nth-child(3) > span.nr').text().trim();
            let contact = $('body > div.container > div.content > div > div:nth-child(2) > div:nth-child(2) > span.nr').text().trim();
            let tel = $('body > div.container > div.content > div > div:nth-child(2) > div:nth-child(2) > span.nr').text().trim();
            let email = $('body > div.container > div.content > div > div:nth-child(2) > div:nth-child(4) > span.nr').text().trim();
            let address = $('body > div.container > div.content > div > div:nth-child(2) > div:nth-child(5) > span.nr').text().trim();

            let data = {
                title,
                person,
                type,
                area,
                website,
                contact,
                tel,
                email,
                address,
                uri
            }
            console.log(data);
            db.insert('company_gsdata',data).catch(err=>{
                console.log(err);

            });
            console.log('*'.repeat(100));
        }
        done();
    }
})


const detialUrl = "http://2019ncov.gsdata.cn/oem/fanghu/detail.php?sign=fe6780da15c93ed8&id=20284";
const listUrl = "http://2019ncov.gsdata.cn/oem/fanghu/action/getSearch.php";
let links = [];

for(let i = 20284; i >= 14680; i --){
   links.push({uri:`http://2019ncov.gsdata.cn/oem/fanghu/detail.php?sign=fe6780da15c93ed8&id=${i}`})
}


craw.queue(links);
