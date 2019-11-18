const {cra} = require('./utils')
const {base} = require('./config')
const Detail = require('./Detail')
const db = require('./database')

module.exports = class Index {
    constructor($){
        this.$ = $
    }
    getPageCount(){
        return parseInt( this.$('#pagelink').find('.last').text() )
    }
    parser(){
        let $ = this.$, arr = []
        let items = $('#content .zuixin ul li')
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
        let arr = this.parser()
        let queues = []
        console.log('----------------------href----------------------')
        arr.forEach(({href}) => {
            href = base + href
            queues.push({url:href})
        })
        arr.forEach(async ({category,name,href,latestChapter,author,uptime}) => {
            href = base + href
            await db.query(`insert into novel2 
                (category,name,href,latest_chapter,author,uptime) 
                values(?,?,?,?,?,?)`,[category,name,href,latestChapter,author,uptime])
        })
        
        console.log(queues)
        console.log('---------------------detail-----------------------')
        cra(queues,async function($){
            let detail = new Detail($)
            await detail.processor()
            // console.log(res)
        })
        console.log('----------------------end----------------------')
    }
}
