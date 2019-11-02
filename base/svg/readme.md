svg虽然是标签，但是不是html标签，是另一套标准


<svg width='800' height='600'>
<line x1="100" y1="200" x2="300" y2="400" stroke="black" onmouseover='this.style.stroke=blue'></line>
</svg>

x1,y1 起点
x2,y2 终点
stroke-width  线宽

也可以用style
<line style=""></line>
只能做属性：决定图形的形状：比如起点终点
可以放样式：视觉效果
    *可以放样式的最好放样式：属性的样式优先级非常低：比标签选择器的优先级还低
在svg里面标准的写法数值不给单位：stroke-width:20:   矢量图理论上没有单位   加单位不会出错
任何给html元素加时间的方法都可以用给svg
添加事件、修改样式和html元素一样、属性操作  .setAttribute/.getAttribute  不能之间 .属性
为什么：SVG和html——兄弟关系：共同的祖先：XML，xml通过.setAttribute/.getAttribute获取属性
边线默认没有，填充默认有
图形：
line
rect x,y,width,height、rx、ry
circle cx,cy,r
elipse 椭圆：cx,cy,rx:横半径,ry:纵半径

path:万能的svg图形  d:描述
d="M 100 100 L 300 300" M:moveto  L:lineto
line可以合并
d="M 100 100 L 300 300 400 400"
M : moveto  x,y
L : lineto  (x,y)+
A : arc    rx横半径 ry纵半径 旋转 大弧标志 镜像标志 终点x 终点y ：
通过两个点可以确定两个椭圆、四条弧  大弧标志：1长的那条 镜像标志：左右
Z : 闭合

样式
stroke   边线的颜色
fill 填充   fill:'none'填充为空？不填充，点击不到， 如何让他有事件？ fill:rgba(0,0,0,0) 用透明填充


用css样式行不行？有的行，有的不行
boder-radius不行 圆角用rx、ry

CSS3的样式SVG不认
动画？

SVG适应不同的大小
1. 推荐：所有位置重新计算
2. 不推荐：scale：怪、加重性能的负担

js创建svg元素：
document.createElement()  用来创建html元素的，插入页面不会有效果  是一个简写
document.createElementNS('line','http://www.w3.org/2000/svg') //创建指定命名空间的标签 svg标签

随机颜色？
rgb()的random
let color = Math.floor(Math.random()*16777216).toString(16)
while(color.length<16)color = '0' + color

动画：
requestAmimationFrame()

小例子：饼图移入变大

raphael  人

VML  IE7以及以下
给html加一个属性：xmlns
xmlns: xml的命名空间：“urn...
v\:*{  //这居然是一个行内元素
    behavior:url(#default#VML)
}
所有的自定义元素都是行内元素
绝对定位本身就会变成块

<v:line from = "100,100" to="400,300">
<v:shape path="" style="width:1000px;height:1000px">
宽高是逻辑宽高，不会对页面产生影响

raphael.js 非常好用
var paper = Raphael("container", 500, 300);
let r1 = page.rect(0,0,400,300)
r1.attr('fill','yellow')
t1.attr('stroke','blue')
链式操作、动画：
page.rect(0,0,400,300).attr('fill','yellow').attr('stroke','blue').click(function(){
    this.animate({
        width,fill,strokewidth
    },2000,'动画形式')
})
let path = page.path('M 150 L 200 300').attr('fill','yellow')
path.click(function(){
    path.animate({},1000,'bounce')
})

raphael  初级
echarts  简单、现成、自定义困难
d3       复杂、强大、自己动手


