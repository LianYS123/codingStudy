const express = require('express');
const parser = require('body-parser');

let server = express();//创建server，直接调用函数就行

server.use(parser.urlencoded({
  extended: false //给个属性，一般不开
}));
server.post('/a',(req,res,next) => {
  console.log(req.body);
  res.send('over');
});
server.use(express.static('./static/'));
server.listen('8080');
