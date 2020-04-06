const Crawler = require('crawler');
const { notice, fetchFile, getUids } = require('./tools');
const fs = require('fs')
const db = require('./db');
let craw = new Crawler({
    jQuery: true,
    callback(err, res, done) {
        console.log('fetch page uri: ' + res.options.uri);
        if (err) {
            notice('./crawler_err.log', err + ' : ' + res.options.uri);
            console.log(err);
        } else {
            let $ = res.$;
            console.log($('title').text())

            let list = $('.listing__content__wrap--flexed')
            console.log(list.length);

            list.each(function (item) {
                item = $(this);
                let box = item.find('div.listing__title--wrap h3 a');
                let title = box.text();
                let href = box.attr('href');

                let area = item.find('.listing__address--full').text();

                let content = item.find('.listing__details__teaser').text();

                let text1 = item.find('.jsPreventBubbleMobile').eq(0).text();
                let text2 = item.find('.jsPreventBubbleMobile').eq(1).text();

                let tel1 = item.find('.mlr__submenu__item > h4').eq(0).text();
                let tel2 = item.find('.mlr__submenu__item > h4').eq(1).text();


                let website;
                item.find('.mlr__item__cta').each(function () {
                    let itemTitle = $(this).attr('title')
                    if (itemTitle && itemTitle.startsWith(title)) {
                        website = $(this).attr('href');
                    }
                })
                let websiteSplit, convertWebsite;
                if (website && website.indexOf('redirect=') !== -1) {
                    websiteSplit = website.split('redirect=')[1]
                    convertWebsite = 'https://www.yellowpages.ca/' + website;
                }
                let result = {
                    title, href, area, content, text1, text2, tel1, tel2, website, websiteSplit, uri: res.options.uri, convertWebsite
                }
                db.insert('yellowpages', result);
                // console.log(result);
            })
            console.log('$'.repeat(100));
        }
        done();
    }
})


let links = [];
const listUrl = "https://www.yellowpages.ca/search/si/2/Medical+Equipment+%26+Supplies/Canada";
for (let i = 1; i <= 42; i++) {
    links.push(`https://www.yellowpages.ca/search/si/${i}/Medical+Equipment+%26+Supplies/Canada`)
}


craw.queue(links);

