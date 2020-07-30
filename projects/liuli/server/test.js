const http = require('http');
const app = http.createServer((req, res) => {
  console.log('some one visit me');
  res.end('hello world');
})
console.log('server start');
app.listen(8080);
