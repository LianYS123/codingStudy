Blob => Buffer  数据本身   很大
file            文件信息   很小

图片上传的库 clip?
html5
1. geolocation
2. video、audio
3. localStorage
    cookie:       小(4k)、浏览器和服务器共享
    localStorage  大(5M)、浏览器独享
4. webworker 
    多进程
5. WebSql、IndexedDB---安全隐患
    W3C删掉了
6. 文件操作，文件拖拽
7. canvas  画图
    SVG/VML
8. manifest 文件    前台控制缓存，用处不大


geolocation --定位
1. 原理
PC端：IP定位  定位的精度非常差
移动：GPS     精度很高
2. PC端
    IP库 
      Chrome -> google.com ->  ?
      IE     -> mcrisoft
geolocation不在window上，在navigator上：navigator.geolocation
getCurrentPosition(success,err)   获取位置(1次)，两个回调函数
watchPosition        不断获取位置(定时器)
clearWatch
域名定位，不能在file文件下使用
getCurrentPosition(function(res){
    log(res.coords) //信息在coords中
})
PC端能用的就经度和纬度

百度地图：
开放平台->地图生成器->获取代码
改什么？
版本改成v=1.2  开放的
id,坐标  BMap.Point(经度，纬度，缩放级别)

localStorage:
一个域名5M
方便
localStorage.a = 12
alert(localStorage.a)
遍历:(任何存到localStorage里面的东西都会变成字符串)
for(let name in localStorage){//会把localStorage遍历出来

}
for(let i=0;i<localStorage.length:i++){
    let key = localStorage.key(i)
    log(`${key}:${localStorage[key]}`)
}
删除：
delete localStorage.a
用途：
  记录用户名、保存草稿
小例子：存草稿

进页面读localStorage
发送  草稿消失

sessionStorage:临时存储(浏览器一关就没了，没什么用)

webWorker---web多进程，用途？没有
1. 不能控制UI的东西，可以数据交互
2. 子进程再不能创建子进程

let ow = new Worker('1.js)//创建子进程
postMessage ->  onmessage
ow.postMessage(data)//只有document不能被克隆，发了也没用
ow.onmessage = fun
1.js:
this.onmessage=function(ev){ 
    log(ev.data)//数据，只能接受一个数据

    this.postMessage()  //往回发数据
    
}
多进程-更充分发挥cpu资源，所以对于前台没什么用

多线程：共享存储空间——多个线程之间传引用
多进程：各自独享存储空间——复制一份给子进程

canvas:位图--放大就会失真    HTML5
SVG   : 矢量图--无限缩放     不是HTML5，是一个独立的标准
VML   : 矢量图              IE的矢量图解决方案，IE5的年代就有

canvas
宽高必须写在行间
跟img差不多是一个行内块
通过js向里面画图

let canvas = getElem...
let ctx = canvas.getContext('2d')//对图形的操作都放在ctx上  2d/webgl
路径操作：类似PS的选区操作：没有效果
ctx.moveTo(x,y);移到
ctx.linTo(x,y);划线到
ctx.closePath()  闭合函数
ctx.stroke()/ctx.fill()  连线，填充，产生效果

线宽：ctx.lineWidth = 20
线色：ctx.strokeStyle = 'green'
填充色：ctx.fillStyle = 'yellow'

canvas用途
1. 图表：echarts
2. 游戏
3. 滤镜

