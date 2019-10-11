let http = require('http')
let url = require('url');
let querystring = require('querystring');

let server = http.createServer((req,res) => {
  let {query,pathname} = url.parse(req.url,true);//解析url option:ture 将query解析为一个json对象
  console.log(query,pathname); // { username: 'lian', password: '123456' } '/index.html'

  // let obj = querystring.parse(query); //如果没有通过true来解析url，可以使用querystring.parse()来解析query
  // console.log(obj); //{ username: 'lian', password: '123456' }
  res.end();
})

server.listen(8080);
