const http = require('http');
const io = require('socket.io');

let server = http.createServer((req,res) =>{});
server.listen(8080);

let webServer = io.listen(server);//使用socket.io监听http连接,得到socket服务

webServer.on('connection',client => {
  client.on('hello',(a,b) => { //监听客户端消息
    console.log(`a + b = ${a + b}`);
  });
});
