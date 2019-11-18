const Crawler = require('crawler')
const path = require('path')
const uuid = require('uuid/v4')
const fs = require('fs-extra')
const db = require('./database')

const PATH_IMG = path.resolve(__dirname,'img')
module.exports = {
    cra(links,cb,options={}){
        let c = new Crawler({
            // rateLimit: 500,
            ...options,
            async callback(err,res,next){
                if(err){
                    console.log(err)
                } else {
                    let $ = res.$
                    $.options = res.options
                    await cb($)
                }
                next()
            }
        })
        c.queue(links)
    },
    cra_img(links,cb,options={}){
        let c = new Crawler({
            jQuery:false, encoding:null,
            ...options,
            async callback(err,res,next){
                if(err){
                    console.log(err)
                } else {
                    let name = uuid()
                    await fs.writeFile(`${PATH_IMG}/${name}`,res.body)
                    await cb(name,res.options)
                }
                next()
            }
        })
        c.queue(links)
    },
    async getNovelId(){
        let {id} = (await db.query('select id from novel2 where name="都市之绝世妖尊" and author = "微雨残叶"'))[0]
        return id
    }
}