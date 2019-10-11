- 跨域的几种方式
  1. fetch 原生的，不需要引任何库
    配合async,await使用
    async fn(){
      1. 请求数据
      let res = await fetch(url)
      2. 解析数据
      let data = res.text();//解析文本数据, res.json():解析json数据，res.blob():解析二进制数据
    }
    二进制数据处理：
    let url = URL.createObjectURL(data);将二进制数据存储到本地，返回一个存储地址
  2. jsonp (过时的，不安全的)
    本地写好一个方法,准备接收参数 -> 通过script标签引入远程js文件调用这个函数，调用时传入参数 -> 本地得到参数
  3. FormData (Ajax2.0) 特别适合文件数据
    1. 创建FormData
    let fd = new FormData(表单元素);//传入一个form表单直接初始化formdata
  4. websocket:基于tcp的长连接
    基于一个库: socket.io 简单方便，速度快，兼容低版本浏览器(可以一直兼容到IE5)
    - 服务端
      1. 监听http服务
      server = http.createServer((req,res) => {});
      let webServer = io.listen(server); //得到webServer
      2. 监听connection事件:
      webServer.on('connection',client => {
        3. 监听客户端发送的数据
        client.on('数据名称',(...数据) => {
          处理
        })
        4. 向客户端发送数据
        client.emit('数据名称',数据1,数据2...)
      });
    - 客户端：
    1. 引入socket.io
      <script src="服务器地址/socket.io/socket.io.js"></script>
    2. 建立websocket连接：
      let sock = io.connect('ws://服务器地址')
    3. 发送或者接收数据
      sock.emit('数据名称',数据1,数据2...);
      sock.on('数据名称',callback);
