const Crawler = require('crawler');

let craw = new Crawler({
    jQuery: true,
    callback(err, res, done) {
        console.log('fetch page uri: ' + res.options.uri);
        if (err) {
            console.log(err);
        } else {
            console.log(res.$('title').text())
        }
        done();
    }
})

craw.queue('https://www.google.com');

