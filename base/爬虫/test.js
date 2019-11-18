const fs = require('fs-extra')
const path = require('path')
const db = require('./novels/database')
const {cra} = require('./novels/utils')

cra('https://www.xuanshu.com/book/50192/18511920.html',async ($) => {
    let content = $('#info .txt_cont #content1').html()
    // console.log(content)
    fs.writeFile(path.resolve(__dirname,'novels/1.html'),content)
})

    // let {content} = (await db.query('select content from chapter limit 0,1'))[0]
    // let res = content.split('    ').join('\n')
    // fs.writeFile(path.resolve(__dirname,'novels/1.txt'),res)