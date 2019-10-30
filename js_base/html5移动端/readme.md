移动端：
1. viewport
meta：源信息
viewport：可视区，content="width=device-width,initial-scale"
initial-scale：缩放
user-scalable=0:不允许用户缩放
maximum-scale=1.0  最大缩放比例
minimum-scale=1.0  最小缩放比例
放大缩小有些浏览器不认

2. 盒模型
box-sizing:content-box|boder-box
content-box:默认值
3. flex
display:flex
flex:1 弹性系数
flex布局天然就是个border-box

可以配合max-width,min-width
max-width和min-width相等
只用width可能不起效果

4. rem
单位：px、%、em、...
px:绝对
em：相对自身字体
rem：相对根元素字体(html)

根据屏幕尺寸，调整html元素的font-size
方便、性能高

移动端一切的尺寸都用rem

rem：   为了 设备不同长得一样
响应式： 为了 设备不懂长得不一样



设计图比基准尺寸大：
切图：淘宝
header
section
nav

改变html的font-size

基准的宽度(假想宽度,随便想)：480px
基准的字体大小(好算就行)   : 10px
width:480px -> 48rem
height:55px -> 5.5rem

适配手机：通过js完成
真实宽度/真实font-size = 480/10
document.documentElement
window.onresize=function(){}
window.onresize()
text-insert：文字缩进
轮播父级：transform:translateX(0)

mouse事件：mousedown、move、up
touch事件：touchstart、move、end
  多点触摸
gesture：手势
所有的DOM3事件都应该绑定：addEventListener  
oBox.addEventListener('touchstart',function(ev){
    console.log(ev.targetTouches[0].chientX)  //不用touches？不兼容，跟普通的也有区别
    oBox.addEv...fnMove//可以给box加，手指不会移出box
    touchend  removeEventListener('fnMove')
})

获取transform的样式
getComputedStyle？不好用
把值存起来 x = 0, y = 0
在js计算时用px没事，根据环境实时计算的

方向锁定：一旦左右拖拽，上下就失效了  、 一旦上下拖拽，左右就失效了
检测拖动方向：跟按下的位置去比，如果横向移动超过5px，锁定为水平拖动，
阶段一：没有超过5个像素不动，等待方向确定
let dir = '' 方向
if(横向>5)dir = 'x'
else if(纵向>5)dir = 'y'

下拉刷新：
松手回去有动画：
很卡？每次鼠标移动都有动画，touchstart移除动画

超过一半：移动到就近的那一个：通过四舍五入控制

li 的index active  


targetTouches和touches的区别？   
targetTouches：当前物体(点击事件的物体)所有的手指数组
touches: 整个页面中所有的手指数组
一般用：targetTouches

brower-sync:多个设备测试
cnpm i -g brower-sync
