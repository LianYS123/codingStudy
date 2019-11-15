const Crawler = require('crawler')
module.exports = {
    cra(links,cb){
        let c = new Crawler({
            rateLimit: 500,
            async callback(err,res,next){
                if(err){
                    console.log(err)
                } else {
                    let $ = res.$
                    $.url = res.options.uri || res.options.url
                    await cb($)
                }
                next()
            }
        })
        c.queue(links)
    }
}