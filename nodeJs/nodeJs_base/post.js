let http = require('http');
let querystring = require('querystring')



http.createServer((req,res) => {
  console.log('come......');

  let arr = [];  //?
  //data事件：一段数据到达了
  req.on('data',data => {
    arr.push(data);
  });
  //end事件：接收结束
  req.on('end',data => {
    let buf = Buffer.concat(arr);
    let obj = querystring.parse(buf.toString());//使用querystring解析数据  a=1&b=2 -> {a:'1',b:'2'}
    console.log(obj);
    res.end();
  });

}).listen(8080);
