
所有路径操作之前都要加beginPath()
beginPath()  清除之前的路径  必须加
closePath()  闭合当前的路径

moveTo/lineTo
stroke/fill

矩形：
reac() 路径操作 //参数，左上角坐标加宽高
strokeRect()   图形操作 = reac() + stroke()
fillRect()     图形操作

canvas做自适应：window.onresize

clearRect()  删除一块图形

canvas 不会保存图形
1. 图形不能修改——删了重画
2. 也没有事件
速度极快

//动画？

定时器？low
requestAnimationFrame

requestAnimationFrame(next)  //给这个函数申请一个关键帧
function next(){
    clearRect()
    //...
    requestAnimationFrame(next) //这个帧用完了再申请一个
}

事件？
ev.offsetX,ev.offsetY 


arc也是路径操作,弧度
arc(cx,cy,r,startAng,endAng,是否逆时针)
圆：
弧：圆的一部分
+3


//自封装函数，角度转弧度，弧度转角度
d2a
a2d

小例子：饼图：


strokeText('字',坐标)  //图形操作
fillText()
font = '' 跟css的font一样
坐标：字的基线的位置，中文是字的左下角

canvas 的transform
1. rotate
2. translate 
3. scale


任何对图形的操作都要在画之前
ctx.rotate()
canvas处理单位是画布，旋转是从画布的0，0为圆点旋转

沿着矩形中心点转？
和css的transform一样，从后往前执行：以下代码先rotate，再translate
translate()
rotate()


必加：
gd.save()//保存的是canvas的状态，不保存图形本身  保存：颜色、translate、rotate
gd.restore()//回到保存的状态


canvas :
图片操作：
gd.drawImage(oImg,x,y);//图片，位置
oImg对象可以是：<img>、Image对象、另一个canvas、video、base64

完整的写法：
drawImage(
    oImg,
    sx,sy,sw,sh,     source
    dx,dy,dw,dh      dest//目标图片，放到canvas之后
)
img.src = xxx
img.onload = function(){  //图片完全加载之后再执行操作

}
小例子，精灵图，可停可走

像素操作：
**性能极低
获取一块像素   =》  数组
设置一块像素   =》  数组 -> Canvas
创建一块像素   =》  空白的数组
let imageData = gd.getImageData(0,0,w,h)  //位置、宽高

4.pixel.html:40 Uncaught DOMException: Failed to execute 'getImageData' on 'CanvasRenderingContext2D': The canvas has been tainted by cross-origin data.
不允许跨域
图片必须来自服务器环境：为了防止服务器读取用户本地信息

一个像素占4个整数：r g b a
r、g、b、a:0-255
for(let r = 0; r < H; r++){
    for(let c = 0; c < H; c++){
        //(r*w+c)*4+0  => r
        //(r*w+c)*4+1  => g
        //(r*w+c)*4+2  => b
        //(r*w+c)*4+3  => a
        imageData.data[((r*w+c)*4+2)] = 0  //图像偏黄
    }
}
gd.putImageData(imageData,0,0)   // 将像素放回去
照片变黄？
黄：红+绿

变亮：数值变大
变灰：r、g、b相等

跟视频配合：
video有一个事件：timeupdate:随视频更新执行，效果不是很好
还是用 requestAnimationFrame
其他操作一样
一般不卡？
卡？高清视频？用本地语言——oc、java

图形后续处理:
用户打开？下载？存到服务器？
upload_base64
str = gd.toDataURL();   //canvas转base64编码

SVG:
canvas:位图  不保存图片信息、性能高：适合游戏，大型像素
SVG    矢量图：保留图形——能修改，有事件   性能很一般(跟普通标签差不多)：适合交互频繁——普通图标

