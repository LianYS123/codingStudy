# 原生node处理文件上传

## 步骤
### 1. 读取请求数据：
  - 监听request的data事件，每到达一段数据，就将它push到一个准备好的数组中（传入的每一段数据为二进制数据，即Buffer数据）
  ```javascript
  req.on('data',data => {
    arr.push(data);
  });
  ```
  - 监听request的end事件，当数据传输完成，将他拼接成一整个Buffer
  ```javascript
  req.on('end',() => {
    let buf = Buffer.concat(arr);
    //...
  }
  ```
### 2. 分析请求数据：
1. 查看初始数据

    ```
    ------WebKitFormBoundaryG2q0mXghlEP1cKnA
    Content-Disposition: form-data; name="username"

    lian
    ------WebKitFormBoundaryG2q0mXghlEP1cKnA
    Content-Disposition: form-data; name="password"

    123
    ------WebKitFormBoundaryG2q0mXghlEP1cKnA
    Content-Disposition: form-data; name="f1"; filename="1.txt"
    Content-Type: text/plain

    12333
    dasfds
    ------WebKitFormBoundaryG2q0mXghlEP1cKnA--
    ```

2. 加上换行符

  ```
    ------WebKitFormBoundaryG2q0mXghlEP1cKnA\r\n
    Content-Disposition: form-data; name="username"\r\n\r\n

    lian
    ------WebKitFormBoundaryG2q0mXghlEP1cKnA\r\n
    Content-Disposition: form-data; name="password"\r\n\r\n

    123
    ------WebKitFormBoundaryG2q0mXghlEP1cKnA\r\n
    Content-Disposition: form-data; name="f1"; filename="1.txt"\r\n
    Content-Type: text/plain\r\n\r\n

    12333
    dasfds
    ------WebKitFormBoundaryG2q0mXghlEP1cKnA--\r\n\r\n
  ```

3. 化简：

  ```
  <分隔符>\r\n字段信息\r\n\r\n内容\r\n<分隔符>\r\n字段信息\r\n\r\n内容\r\n<分隔符>\r\n字段信息\r\n字段信息\r\n\r\n文件内容\r\n<分隔符>--\r\n\r\n
  ```

### 3. 简化处理

1. 获取分隔符：

    分隔符每一次请求都不同，它包含在请求头中。

    ```json
      headers:
      { host: 'localhost:8080',
        connection: 'keep-alive',
        'content-length': '387',
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        origin: 'null',
        'content-type':
         'multipart/form-data; boundary=----WebKitFormBoundarysWisdMdtVoYD3DC9',  //这个是切割文件要用到的分隔符
        'user-agent':
         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36',
        accept:
         'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-US;q=0.6' }
    ```

    通过request.headers[content-type],切割buffer就可以得到分隔符

    ```javascript
    let boundary = '--' + req.headers['content-type'].split('; ')[1].split('=')[1];//从请求头中获取分隔符
    ```

2. 切分数据

  - 使用分隔符将数据切分成一个数组：

    ```javascript
    let util = require('myUtils');//引入自定义函数
    let result = util.bufferSplit(buf,boundary);//通过分隔符切割buf(前端传过来的二进制数据)

    //bufferSplit是一个自定义的方法，用于切分二进制数据,在node_modules文件夹的myUtils.js中,下面是具体代码：
exports.bufferSplit = function(buf,delimiter) { //传入要切割的buffer，分隔符
        let arr = [];
        while((n = buf.indexOf(delimiter))!=-1){
            arr.push(buf.slice(0,n));
            buf = buf.slice(n + delimiter.length);
        }
        arr.push(buf);
        return arr;
    }
    ```

    类似这样一个数组：

    ```javascript
    [
        null,
        \r\n字段信息\r\n\r\n内容\r\n,
        \r\n字段信息\r\n\r\n内容\r\n,
        \r\n字段信息\r\n字段信息\r\n\r\n文件内容\r\n,
        --\r\n\r\n
    ]
    ```

3. 化简数组

  - 对数组进行简单处理，去掉无用信息：

    ```javascript
    let result = util.bufferSplit(buf,boundary);//通过分隔符切割buf(前端传过来的二进制数据)
      //去掉第一个和最后一个无意义结果
      result.pop();
      result.shift();
    ```
得到简化后的数组
      ```javascript
      [
          字段信息\r\n\r\n内容,
          字段信息\r\n\r\n内容,
          字段信息\r\n字段信息\r\n\r\n文件内容
      ]
      ```

### 4. 提取数据或文件

 1. 判断数组信息：通过上面的化简可以看出，如果数组中的一项中有单独存在的\r\n(换一行),则说明该项存的是文件信息，否则为普通信息。
   ```javascript
   result.forEach(item => {
     item = item.slice(2,item.length - 2);//去掉首尾的换行(\r\n)
     let [info,content] = util.bufferSplit(item,'\r\n\r\n');//(字段信息)\r\n\r\n(内容)

     if(info.indexOf('\r\n') == -1){ //普通表单
       //处理普通信息
     } else {//文件表单
       //处理文件信息
     }
   });
   ```
 2. 获取文件基础信息：
   ```javascript
   //从第一个字段信息种获取文件名和前端表单的name属性值
   let desc = util.bufferSplit(info,'\r\n')[0].toString(); //Content-Disposition: form-data; name="f1"; filename="1.txt"

   let name = desc.split('; ')[1].split('=')[1];
   name = name.substring(1,name.length-1);
   let filename = desc.split('; ')[2].split('=')[1];
   filename = filename.substring(1,filename.length-1);
   ```
### 5. 处理文件

将文件内容写入磁盘：将文件保存到upload文件夹中，当然具体处理时，可以用流操作，也可以给文件名加一个uuid防止重名

  ```javascript
  fs.writeFile(`upload/${filename}`,content,err => {
     if(err){
    	 console.log(err);
     } else{
   	  console.log('上传成功');
  	}
  })
  ```

## 代码：

### 表单

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>title</title>
  </head>
  <body>
    <div class="box">
      <p>这是主页</p>
      <form class="form" action="http://localhost:8080/reg" method="post" enctype="multipart/form-data">
        <input type="text" name="username" value="lian"> <br>
        <input type="password" name="password" value="123"> <br>
        <input type="file" name="f1"><br>
        <input type="submit">
      </form>
    </div>
  </body>
</html>
```

### js代码

1. 服务器代码

   ```javascript
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
   ```

2.  buffer切割函数工具(myUtils.js)

   ```javascript
   exports.bufferSplit = function(buf,delimiter) {//传入要切割的buffer，分隔符
     let arr = [];
     while((n = buf.indexOf(delimiter))!=-1){
       arr.push(buf.slice(0,n));
       buf = buf.slice(n + delimiter.length);
     }
     arr.push(buf);
     return arr;
   }
   ```
