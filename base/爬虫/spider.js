let urllib = require('url')
let http = require('http')
let https = require('https')
let assert = require('assert')

function requestUrl(url,headers={}){
    console.log(url);
    if(url.startsWith('//')){
        url = 'http:' + url
        console.log('url changed to ' + url)
    } 
    let urlObj = urllib.parse(url)
    let httpMode = null
    if(urlObj.protocol == 'http:'){
        httpMode = http
    } else if(urlObj.protocol == 'https:'){
        httpMode = https
    } else {
        throw new Error('不支持的请求方式' + urlObj.protocol)
    }
    return new Promise((resolve,reject) => {
        let req = httpMode.request({
            host: urlObj.hostname,
            path: urlObj.pathname,
            headers
        },res => {
            let data = []
            if(res.statusCode >= 200 && res.statusCode < 300 || res.statusCode == 304){
                res.on('data',buffer => {
                    data.push(buffer)
                })
                res.on('end',()=>{
                    let buffer = Buffer.concat(data)
                    resolve({
                        status: res.statusCode,
                        body: buffer,
                        headers: res.headers  //对方服务器响应的头
                    })
                })
                res.on('error',err => {
                    console.log(err);
                })
            } else if(res.statusCode == 302 || res.statusCode == 301) {
                resolve({
                    status: res.statusCode,
                    headers: res.headers  //对方服务器响应的头
                })
            } else {
                reject({
                    status: res.statusCode,
                    headers: res.headers
                })
            }
        })
        req.on('error', err => {
            throw err
        })
        req.write('')
        req.end()
    })
}


module.exports = async (url,headers) => {
    try{
        while(1){
            let {status,body,headers:resHeaders} = await requestUrl(url, headers)
            if(status == 200) {
                return {body,headers:resHeaders}
            } else {
                assert(status == 301 || status == 302)
                assert(resHeaders.location)
                url = resHeaders.location
                console.log(resHeaders.location)
            }
        }
    } catch(e){
        console.log(e)
    }
}


