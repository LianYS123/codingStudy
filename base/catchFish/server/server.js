const http = require('http')
const fs = require('fs')
// const zlib = require('zlib')
const path = require('path')

http.createServer((req,res)=>{
    let rs = fs.createReadStream(path.resolve(__dirname,'imgs'+req.url))
    // let gz = zlib.createGzip()
    rs.pipe(res)
    rs.on('error',function(err){
        console.log(err);
        res.write('error')
        res.end()
    })
    rs.on('finish',function(){
        res.end()
    })
    
}).listen(8080)