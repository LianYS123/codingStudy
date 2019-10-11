const http = require("http");
const path = require('path');
const url = require('url');
const fs = require('fs');

//向前端返回文件的服务器
http.createServer((req,res) => {

  let {pathname,query} = url.parse(req.url);
  res.setHeader('Access-Control-Allow-Origin','*');//通过设置这个头，同意前台跨域请求
  let rs = fs.createReadStream(path.resolve(__dirname,`data${pathname}`));

  rs.on('error',err => {//读取错误
    console.log(err);
    res.end();
  });

  rs.pipe(res);

  res.on('finish',() => {//写入结束
    console.log(`read ${pathname} success!`);
    res.end();
  });

}).listen(8080);
