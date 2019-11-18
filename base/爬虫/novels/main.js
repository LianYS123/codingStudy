let Index = require('./Index')
const {cra} = require('./utils')

setTimeout(async () => {
    let queues = []
    for(let i = 1; i < 11; i++){
        //获取页数
        let count = 0
        cra([{url:`https://www.xuanshu.com/sort${i}/1.html`}],async function($){
            let index = new Index($)
            count = await index.getPageCount()
            console.log('count:' + count)
            for(let j = 0; j < count; j++){
                queues.push({url:`https://www.xuanshu.com/sort${i}/${j+1}.html`})
            }
        })
    }
    setTimeout(() => {
        console.log(queues)
        cra(queues,async function($){
            let index = new Index($)
            try{
                await index.processor()
            } catch(e){
                console.error(e)
            }
        })
    }, 5000);
}, 100);