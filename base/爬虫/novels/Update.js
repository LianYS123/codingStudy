const {cra, cra_img} = require('./utils')
const db = require('./database')

class Update {
    async parser(){
        let arr = await db.query('select id,img from novel2 where img like "http%"')
        return arr.map(({id,img}) => ({url:img,id}))
    }
    async processor(){
        let queues = await this.parser()
        console.log(queues)
        console.log('---------------------detail-----------------------')
        
        // cra(queues,async function($){
        //     let novel_id = $.options.id
        //     let intro = $('#info .info_cont .intro').text()
        //     let img_src = $('#info .info_cont .tupian img').attr('src')
        //     await db.query('update novel2 set intro = ?,img=? where id = ?',[intro,img_src,novel_id])
        //     cra_img(img_src,async name => {
        //         await db.query('update novel2 set img = ? where id = ?',[name,novel_id])
        //     })
        // })

        cra_img(queues,async (name,{id}) => {
            await db.query('update novel2 set img = ? where id = ?',[name,id])
        })
        console.log('----------------------end----------------------')
    }
}
setTimeout(async () => {
    await new Update().processor()
}, 100);
