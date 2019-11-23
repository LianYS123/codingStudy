const Crawler = require('crawler')
const mysql = require('mysql')
const fs = require('fs')
const uuid = require('uuid/v4')
const {path_static} = require('../config')

let db = mysql.createPool({
    host:'localhost',
    database:'test',
    user:'lian',
    password:'tb1766318380'
})
// let db = co(conn)
function link2queue(links,encoding,jQuery=true,parser,processor){  
    let queues = []
    links.forEach(({uri,name}) => {
        let queue = {
            uri,
            jQuery,
            rateLimit:1000,
            callback(error,res,done){
                if(error){
                    console.log(error)
                } else{
                    try{
                        let data = parser(res.body)
                        processor(data,name)
                    } catch(e){
                        console.error(e)
                        done()
                    }
                }
                done()
            }
        }
        if(!encoding) queue.encoding = null
        queues.push(queue)
    })
    console.log(queues)
    return queues
}
//数据操作
function dataSpider(parser,processor){  //爬取数据
    links = [{uri:'https://api.xiaoshuo1-sm.com/sc/1/channel/channel/?format=json&page=1&size=100&q=%E7%83%AD%E6%90%9C&_t=1573228590570&_=1573228590571&callback=jsonp1'}]
    let queues = link2queue(links,true,false,parser,processor)
    new Crawler().queue(queues)
}
function dataParser(data){  //数据转换
    let str = data.toString() 
    str = str.substring(7,str.length - 2).replace(/(\\\/)/g,'/')
    let items = []
    icons = []
    JSON.parse(str).list.forEach(item => {
        let {title,author,icon,description,mark_score} = item
        let ext = icon.substring( icon.lastIndexOf('.') )
        let name = uuid()+ext
        icons.push({name,uri:icon})
        items.push({title,author,icon:name,description,mark_score:Number(mark_score)})
    })
    return {items,icons}
}
function dataProcessor({items,icons}){  //数据处理
    items = items.map(({title,author,icon,description,mark_score}) => 
        `('${title}','${author}','${icon}','${description}','${mark_score}')`
        )
    let sql = `INSERT INTO novels (title,author,icon,description,mark_score) values${items.join(',')}`
    db.query(sql,[],err=>{
        if(err) console.error(err)
    })

    // items.forEach(({title,author,icon,description,mark_score}) => 
    //     db.query('INSERT INTO novels (title,author,icon,description,mark_score) values(?,?,?,?,?)'
    //     ,[title,author,icon,description,mark_score],err=>{
    //         if(err)console.error(err)
    //     })
    // )
    iconSpider(icons,data=>data,iconProcessor)
}
//图片操作
function iconSpider(links,parser,processor){ //爬取图片
    let queues = link2queue(links,false,false,parser,processor)
    // queues.forEach(queue => {
    //     new Crawler().queue([queue])
    // })
    new Crawler().queue(queues)
}
function iconProcessor(body,name){  //处理图片
    fs.writeFile(`${path_static}/imgs/${name}`,body,err=>{
        if(err) console.error(err)
    })
}
dataSpider(dataParser,dataProcessor)
