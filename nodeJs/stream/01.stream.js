const fs = require('fs');
const zlib = require('zlib');

let rs = fs.createReadStream('1.txt');//读取流，传入要读的文件
let gz = zlib.createGzip();//压缩流
let ws = fs.createWriteStream('2.txt.gz');//写入流，写到哪里去

rs.pipe(gz).pipe(ws);

//监听读取流的error事件，处理读取失败
rs.on('error',err => {
  console.log(err);
});
ws.on('finish',() => {
  //写入结束执行
  console.log('完成');
})
