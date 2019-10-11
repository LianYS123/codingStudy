- 创建服务：
let server = express();//不需要new，koa需要new
server.listen(8080);

- 路由
get('url',fn);//处理get请求
post('url',fn);//处理post请求
use('url',fn);//处理所有请求

use(fn);//处理所有地址的所有请求

server.get('url',(req,res,next) => {//3个参数，调用next()执行后面的匹配url的路由
  res.send();//发数据，也可以发json,自带end()
})

- 传参：
直接往request上面加属性

- 中间件
1. express.static()
这是一个用来返回文件的自带中间件
  就是一方法，直接往use()里面加
  express.static(root, [options]) 第一个参数是静态文件存储的目录


2. body-parser:解析post数据
这玩意er执行后会往req里面塞一个body
body里面就有要的数据
const parser = require('body-parser');

//所有的post请求都经过这个中间件
server.use(parser.urlencoded({
  extended: false //给个属性，一般不开
}))
server.post('/reg',(req,res) => {
  console.log(req.body);//在这就可以使用解析好的body数据
})
3. multer:处理文件上传
使用：
const multer = require('multer')
let obj = multer({
  dest: '上传的文件所放的路径'
})
server.post(obj.any());//添加之后，会往req加一个files属性

4. cookie-parser
用来操作cookie
let cookieParser = require('cookie-parser');//一个方法
server.use(cookieParser([签名的key]));//使用之后可使用req.cookie()方法,req.signedCookies

- cookie
res.cookie(键,值)
res.cookie(键,值,{options})
  options:
  domain:域名
  path：路径，一般给个/
  maxAge:最大时长
  httpOnly:true 只有服务器能看到
  secure: true //只有https能用
  signed:true //是否签名


5. cookie-session:
const cookieSession = require('cookie-session');

server.use(cookieSession({
  keys:['1sfdsa44','asdfdaf'...]//循环密钥
  maxAge:多久过期
}))
后面可以使用req.session['键']
用户的cookie -> 服务器的密钥签名 -> session_id -> 通过cookie+session_id访问服务器 -> 使用密钥校验cookie和session_id是否匹配
