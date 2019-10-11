let http = require('http');
let server = http.createServer((req,res) => {
  req.write('welcome');
});
server.listen(8080);
