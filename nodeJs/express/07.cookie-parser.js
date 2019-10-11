const express = require('express');
const multer = require('multer');
const cookieParser = require('cookie-parser');//一个方法


let server = express();//创建server，直接调用函数就行

server.use(cookieParser());//使用之后可使用req.cookie()方法,req.signedCookies

server.get('/a',(req,res) => {
  console.log(req.cookies);
  res.cookie('a',998);
  res.send('over');
})
server.use(express.static('./static/'));
server.listen('8080');
