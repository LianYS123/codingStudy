http:
https:

let req = http.request('http://...',(res)=>{  // res 对方相应的东西  
    if(res.statusCode>=200 && res.statusCode<300 || res.statusCode = 304){
        res.on('data',data=>{

        })
        res.on('end',()=>{
            let buffer = Buffer.concat(arr)
            fs.writeFile(pathlib.reslove(),buffer,err=>{
                if(err){

                }
            })
        })
    } else if(res.statusCode == 301 ...==302){

    } else {
        log(cuole)
    }
})
req.on('error',err = >{
    log(错了)
})
req.write('')   //发送post数据
req.end()     //对request配置结束，发送的信息结束了


http.request({
    host:'www.taobao.com',
    path:'/',
    headers:{},

},res)

function requestUrl(url,headers){
    let urlObj = urllib.parse(url)
    if(urlObj.protocol=='http:'){

    } else if(https) {

    } else {
        throw new Error()
    }
    return new Promise((reslove,reject)=>{
        //响应
        resolve({
            statusCode:200,
            body:buffer,
            headers:res.headers
        })
    })
}

request(){
    while(){

        try{
            let {status,body,headers} = await requestUrl(url)
            if(status==200){
                return {body,headers}
            }else {
                assert(status==301||status==302)
                assert(headers.location)
                url=headers.location
            }
        }
        catch(e){

        }
    }
}
(async ()=>{
 let {body,headers} = await request()
})()

//async
async(){
    await async()
    await function()
    await promise
}

jsdom
将html文件解析成dom
const JSDOM = require('jsdom').JSDOM
let html = buffer.toString()
let jsdom = new JSDOM(html)
let document = jsdom.window.document


html2$(){

}

detailSpider(url){

}
detailParser(body){
    return []
}
detailProcessor(data){

}

cnpm i gbk
gbk.toString('utf-8',body)


//crawler : 一个爬虫库