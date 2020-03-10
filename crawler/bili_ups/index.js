const Crawler = require('crawler');
const fs = require('fs');
const JSDOM = require('jsdom').JSDOM;
let craw = new Crawler({
    callback(err,res,done){
        if(!err){
            let $ = res.$;
            console.log($('title').text());
            let urls = [];
            $('tbody tr td a').each(function() {
                urls.push($(this).attr('href'));
            });
            fs.writeFile('./data',urls.join('\n'),err=>{
                if(err){
                    console.log(err);
                }
            });
        }else{
            console.log(err);
        }
        done();
    }
})
craw.queue('http://127.0.0.1:8080/datas.html');
// let text = fs.readFileSync('./datas.html').toString();
// const {document} = new JSDOM(text).window;
// let hrefs = Array.from(document.querySelectorAll('tbody tr td a')).map(a => a.href);
// fs.writeFileSync('./data',hrefs.join('\n'));

