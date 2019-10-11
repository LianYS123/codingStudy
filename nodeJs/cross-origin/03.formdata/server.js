const http = require("http");
const multiparty = require("multiparty");

http.createServer((req,res) => {

  res.setHeader('Access-Control-Allow-Origin','*');
  // console.log(req.headers);

  let form = new multiparty.Form({ //创建form
    uploadDir:'./upload/'
  });

  form.parse(req);

  form.on('field',(name,value) => {//普通表单项
    console.log('field:',name,value);
  });

  form.on('file',(name,file) => {//文件表单项
    console.log('file:',name,file);
  });

  form.on('error',err =>{ //处理错误
    res.writeHeader(500);
    res.write('服务器错误');
    console.log(err);
    res.end();
  })

  form.on('close',() => { //处理完成
    res.write('over');
    console.log('over');
    res.end();
  });

  //res.end();不要在这写end，前面的都是异步方法，会提前结束

}).listen(8080);
