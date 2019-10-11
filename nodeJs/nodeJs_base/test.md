2. 切分数据
  - 使用分隔符将数据切分成一个数组：
    
    ```javascript
    let result = util.bufferSplit(buf,boundary);//通过分隔符切割buf(前端传过来的二进制数据)
    ```
  
  
  
  - 类似这样一个数组：
    
  ```javascript
      [
        null,
        \r\n字段信息\r\n\r\n内容\r\n,
        \r\n字段信息\r\n\r\n内容\r\n,
        \r\n字段信息\r\n字段信息\r\n\r\n文件内容\r\n,
      --\r\n\r\n
    ]
  ```
  
  
  
  - 对数组进行简单处理，去掉无用信息：
    
  ```javascript
  let util = require('myUtils');//引入自定义函数
  let result = util.bufferSplit(buf,boundary);//通过分隔符切割buf(前端传过来的二进制数据)
    //去掉第一个和最后一个无意义结果
    result.pop();
    result.shift();
  
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
    得到化简后的数组：
    ```javascript
    [
      字段信息\r\n\r\n内容,
      字段信息\r\n\r\n内容,
      字段信息\r\n字段信息\r\n\r\n文件内容
    ]
  ```
