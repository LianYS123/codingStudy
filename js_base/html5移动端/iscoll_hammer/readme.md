let scroll = new IScroll('父级选择器',{})  //默认给第一个子元素添加拖拽


options:
bounce:是否允许拖过了
bounceTime:拖过了到回去的时间
scollX、scollY:横向拖或纵向拖，默认横向scollX为false,默认有方向锁定
freScoll:true 自由的拖scollX和scollY要为true
directionLockThreshold   方向锁定阈值，默认为5（就是5px后才起作用)
disableMouse  鼠标是否能拖
mouseWheelSpeed:鼠标滚轮速度
inverseWhellDirection:反转鼠标滚轮
momentum:物理引擎,如果为true，可以提高效果，性能降低。false：极大地提升性能  默认一般为true
bindToWrapper 默认为false，是否将事件绑定到点击的物体上
Pointer = Mouse + Touch


probeType:探测优先级：1,2,3三种级别,必须用iscroll-probe.js版本
1 低  定时探测
2 中  实时检测用户拖拽
3 高  实时检测用户拖拽+实时检测运动本身   自动禁用transition，影响性能

scroll.on('scoll',function(){
    log(scroll.y)
})

其他事件
beforeScrollStart 手指按下去了
scrollStart       第一次移动
scroll            滚动中,要用的话必须加probeType这个选项
scrollEnd         手指抬起来了?整个走完：走回去了才算end
scrollCancel      手指按下没动就抬起来了

小例子：下拉刷新，松手刷新，加载更多，松手加载


hammer.js:一个事件相关的库
let hammer = new Hammer(oBox);

hammer.on('tap',ev=>{
    log(ev.center.x,ev.center.y)  //点击的中心点
})
事件：
为什么用tap？click有延迟

tap: 轻点，快——250ms以内，按下加抬起， 最常用
press：长点——超过250ms才触发
swipe: 快速滑动——速度超过300px/s，滑完触发
swipeleft/swiperight/swipeup/swipedown
swipestart/swipemove/swipeend...
pan:滑动 快慢都会出来，滑的时候触发
panleft/panright/panup/pandown
panstart/panmove/panend/pancancel

其他需要配置获取的
let config = hammer.get('rotate')
config.set({enable:true})
hammer.on('rotatestart',ev=>{
    old_deg = ev.rotation
})
hammer.on('rotatemove',ev=>{
    ev.rotation//旋转角度
    deg = old_deg + ev.rotation
    oBox.style.transform = `rotate(${deg}`
})
hammer.on('rotateend',ev=>{})

hammer.get('pinch').set({enable:true})
hammer.on('pinchstart',ev=>{})
hammer.on('pinchmove',ev=>{
    ev.scale
})
hammer.on('pinchend',ev=>{})

小例子：滑动删除短信

hammer一般用pan，一般用panstart，panend等自己封


事件：element.addEventListener('transitioned',function(){}) //过渡结束执行，另一个animationend