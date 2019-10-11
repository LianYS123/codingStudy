const express = require('express')

let server = express();//创建server，直接调用函数就行

// 不能拦截，原因待定
server.get('*',(res,req,next) => {//不带路径的get,所有get请求都会经过
  console.log('不带参数的get');
  next();
});

server.post((res,req,next) => {//不带路径的post，
  console.log('不带参数的post');
  next();
});
server.use('*',(res,req,next) => {//处理所有请求
  console.log('不带参数的use');
  next();
});

server.get('/a',(req,res,next) => {//处理路径为a的get请求
  console.log('get a');
  next();
});
server.post('/a',(req,res,next) => {//处理路径为a的post请求
  console.log('a2');
  next();
});
server.use('/a',(req,res,next) => {//处理路径为a的所有请求
  console.log('use a');
  res.send('over');
});
server.listen('8080');
