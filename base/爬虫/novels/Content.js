const {cra} = require('./utils')
const db = require('./database')
class Content {
    async processor(){
        let rows = (await db.query('select id,href from chapter where content is null limit 0,50000'))
        let queues = rows.map(({id,href}) => ({url:href,id}))
        //爬取章节内容并存入数据库
        cra(queues,async ($) => {
            let id = $.options.id
            let content = $('#info .txt_cont #content1').html()
            await db.query('update chapter set content = ? where id = ?',[content,id])
        })
    }
} 
setTimeout(async () => {
    await new Content().processor()
}, 100);