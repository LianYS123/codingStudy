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