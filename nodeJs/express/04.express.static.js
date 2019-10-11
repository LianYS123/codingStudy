const express = require('express')

let server = express();//创建server，直接调用函数就行
server.use(express.static('./static/'));
server.listen('8080');
