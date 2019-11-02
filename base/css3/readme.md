箭头函数：函数内外this不变
给document绑定dragenter和dragleave不好

圆角 border-radius: 10px/20px  横向10px，纵向20px
两个参数      : 10px 20px   斜对角，第一个10，第二个20
文本阴影：横向偏移 纵向偏移 模糊 颜色
块阴影多两个参数：inset(内阴影) 扩展范围 在颜色之前

渐变：-webkit-linear-gradient(left top,red,green)  从左往右，从红到绿  -webkit带和不带是两种样式
渐变是一种图片：background-image

rgba rgb+alpha

transform：只要用transform一定要给个初始值                            
1. rotate    旋转
2. scale     缩放
3. translate 平移 
4. skew      倾斜

css3动画
1. transition  简单、方便
translate 1s width ease,2s height ease      时间、样式、形式
2. animation   强大、麻烦
定义，调用
@keyframes 名字 {

}
只要是数字都可以：颜色也可以

这三个是必须的
animation-name：动画名称
animation-duration：周期
animation-timing-function: ease

animation-fill-mode:填充模式，就是停在什么时候
animation-delay:延时
animation-iteration-count：重复多少次，infinate：无穷
animation-direction：alternative  来回走
animation-paly-state：pause  暂停



transform应用
1. 多个变换一起用，顺序是“反的”
transform：rotate(45deg) scale(1,2)   先横向拉伸两倍，在旋转45deg
*看似是反的，其实是正的：矩阵乘法
2. 3D变换 perspective:3d的感觉：视觉效果
transform：perspective(600)
perspective默认情况下是无限大
perspective越小效果越明显

transform 3d：
3d盒子

X/Y/Z坐标轴：
理解：冲着坐标轴看，顺时针看是正的

给父集去掉限制(使子级可以往z轴走)
transform-style：perserve-3d

perspective——对自己起作用  一个视觉效果  只给最外层加一次
perserve-3d——子元素 子元素可以脱离父集  每个需要子级出来的地方都需要

翻书  scaleX(-1) 正面反回来
transform-origin: left  旋转中心，默认沿着中心转



性能：
CSS3样式不改变盒模型(不改变页面布局)
盒模型：物体所占的空间
DOM操作 最消耗性能：空间变了
1. 重排
2. 重绘
CSS3的样式不会引起重排和重绘，所以性能高

实现柔软：
css4 光栅