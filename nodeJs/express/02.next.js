const express = require('express')

let server = express();//创建server，直接调用函数就行

server.get('/a',(req,res,next) => {//处理路径为a的get请求
  console.log('a1');
  next()//执行下一个匹配的路由
});
server.get('/a',(req,res,next) => {//处理路径为a的get请求
  console.log('a2');
  res.send('over');
});
server.listen('8080');
