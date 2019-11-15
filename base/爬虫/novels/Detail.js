const {cra} = require('./utils')
let Content = require('./Content')
module.exports = class Detail {
    constructor($){
        this.$ = $
    }
    async spider(){
        return this.$
    }
    async parser(){
        let $ = await this.spider()
        this.url = $.url
        let intro = $('#info .info_cont .intro').text()
        let chapters = []
        let lis = $('.pc_list ul li')
        lis.each((index,li)=>{
            let href = $(li).find('a').attr('href')
            let chapterName = $(li).find('a').text()
            chapters.push({href,chapterName})
        })
        return {intro,chapters}
    }
    async processor(){
        let {chapters,intro} = await this.parser()
        await chapters.forEach(chap => {
            let href = this.url + chap.href
            cra([{url:href}],async function($){
                let content = await new Content($).processor()
                chap.content = content
            })
        })
        return {intro,chapters}
    }
} 