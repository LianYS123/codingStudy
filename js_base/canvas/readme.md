
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
