const {cra} = require('./utils')
const db = require('./database')
class Detail {
    parser($){
        let chapters = []
        $('.pc_list ul li').each((index,li)=>{
            let href = $.options.url + $(li).find('a').attr('href')
            let chapterName = $(li).find('a').text()
            chapters.push({href,chapterName})
        })
        return chapters
    }
    async processor(){

        let rows = (await db.query('select id,href from novel2 where id not in (select novel_id from chapter)'))
        let queues = rows.map(({id,href}) => ({url:href,id}))
        cra(queues, async $ => {
            let chapters = this.parser($)
            let novel_id = $.options.id
            let str = chapters.map(chap => `("${chap.chapterName}","${novel_id}","${chap.href}")`).join(',')
            let sql = `insert into chapter (chapter_name,novel_id,href) values ${str}`
            // console.log(sql)
            await db.query(sql)
        })
        // //爬取章节内容并存入数据库
        // cra(queues,async ($) => {
        //     let content = $('#info .txt_cont #content1').text()
        //     let {id} = (await db.query('select id from novel2 where href = ?',[$.options.url]))[0]
        //     await db.query('update chapter set content = ? where id = ?',[content,id])
        // })
    }
} 
setTimeout(async () => {
    await new Detail().processor()
}, 100);
