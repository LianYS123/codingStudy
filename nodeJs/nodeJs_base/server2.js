let http = require('http');
let util = require('myUtils');
let fs = require('fs');
let path = require('path');

http.createServer((req,res) => {
  let arr = [];

  req.on('data',data => {
    arr.push(data);
  });
  req.on('end',() => {
    let buf = Buffer.concat(arr);
    if(req.headers['content-type']){
      let boundary = '--' + req.headers['content-type'].split('; ')[1].split('=')[1];//从请求头中获取分隔符
      let result = util.bufferSplit(buf,boundary);//通过分隔符切割buf(前端传过来的二进制数据)
      //去掉第一个和最后一个无意义结果
      result.pop();
      result.shift();

      let postInfo = {};//文本信息存在这
      result.forEach(item => {
        item = item.slice(2,item.length - 2);//去掉首尾的换行(\r\n)
        let [info,content] = util.bufferSplit(item,'\r\n\r\n');//字段信息和内容------字段信息\r\n\r\n内容

        if(info.indexOf('\r\n') == -1){ //普通表单
          let name = util.bufferSplit(info,'; ')[1].toString();
          postInfo[name] = content.toString();
        } else {//文件表单
          let desc = util.bufferSplit(info,'\r\n')[0].toString(); //Content-Disposition: form-data; name="f1"; filename="1.txt"

          let name = desc.split('; ')[1].split('=')[1];
          name = name.substring(1,name.length-1);
          let filename = desc.split('; ')[2].split('=')[1];
          filename = filename.substring(1,filename.length-1);

          console.log(name,filename);
          fs.writeFile(`upload/${filename}`,content,err => {
            if(err){
              console.log(err);
            } else{
              console.log('上传成功');
            }
          })
        }
        console.log('----------')
      });
    }
    res.end();
  });
}).listen(8080);
