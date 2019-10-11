const express = require('express')

let server = express();//创建server，直接调用函数就行

server.get('/a',(req,res,next) => {//处理路径为a的get请求
  res.send('aaa');//返回数据，自带end()
});
server.listen('8080');
