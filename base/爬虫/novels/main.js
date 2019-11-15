let Index = require('./Index')
const {cra} = require('./utils')

setTimeout(async () => {
    let queues = []
    for(let i = 1;i < 11; i++){
        //获取页数
        let count = 0
        cra([{url:'https://www.xuanshu.com/sort1/1.html'}],async function($){
            // let index = new Index(queues)
            let index = new Index($)
            count = await index.getPageCount()
            console.log('count:' + count)
            for(let j = 0; j < count; j++){
                queues.push({url:`https://www.xuanshu.com/sort${i}/${j+1}.html`})
            }
        })
    }
    cra([{url:'https://www.xuanshu.com/sort1/1.html'}],async function($){
        // let index = new Index(queues)
        let index = new Index($)
        await index.processor()
    })
}, 100);