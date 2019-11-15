const {cra} = require('./utils')
const {base} = require('./config')
const Detail = require('./Detail')

module.exports = class Index {
    constructor($){
        this.$ = $
    }
    async spider(){
        return this.$
    }
    async getPageCount(){
        let $ = await this.spider()
        let count = parseInt( $('#pagelink').find('.last').text() )
        return count
    }
    async parser(){
        let $ = await this.spider()
        let items = $('#content .zuixin ul li')
        let arr = []
        items.each( (index,li) => {
            if(index == 0) return
            let category = $(li).find('.lei').text()
            let name = $(li).find('.xname a').text()
            let href = $(li).find('.xname a').attr('href')
            let latestChapter = $(li).find('.xupl a').text()
            let author = $(li).find('.zuozhe').text()
            let uptime = $(li).find('.uptime').text()
            let res = {category,name,href,latestChapter,author,uptime}
            arr.push(res)
        })

        return arr
    }
    async processor(){
        let arr = await this.parser()
        let queues = []
        console.log('----------------------href----------------------')
        arr.forEach(({category,name,href,latestChapter,author,uptime}) => {
            href = base + href
            console.log(href)
            queues.push({url:href})
        })
        console.log('---------------------detail-----------------------')

        cra(queues,async function($){
            let detail = new Detail($)
            let res = await detail.processor()
            console.log(res)
        })
        
        console.log('----------------------end----------------------')
    }
}
