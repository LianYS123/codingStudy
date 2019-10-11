const express = require('express');
const multer = require('multer');

let server = express();//创建server，直接调用函数就行

let upload = multer({
  dest: './upload/'//传到当前目录的upload文件夹中
});

server.post('/a',upload.any(),(req,res) => {
  console.log('post/a');
  res.send('over');
})

server.use(express.static('./static/'));
server.listen('8080');
