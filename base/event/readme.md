事件对象：
给document加click：给整个页面加

点击坐标：event.clientX、event.clientY 相对可视区域
function(e)
兼容： let e = event || ev

事件冒泡：最典型的事件流。
取消冒泡：e.cancelBubble = true

onmousemove 鼠标移动

scrollTop：document.documentElement.scrollTop || document.body.scrollTop 滚动距离
scrollLeft
scrollTop + clientY 相对页面坐标
简单的小例子：
for(let i = div.length -1; i>0;i--) {
    div[i].style.left = div[i-1].offsetLeft + "px"
    。。。
}
第一个跟着鼠标走
---------------
keyCode：onkeydown/onkeyup
key: 'a'、'Ctrl'、'Alt' 等
小例子：
1. 键盘控制div
2. ctrl + enter 提交留言
onkeydown 加给输入框
e.ctrlKey : ctrl有没有按下去
shiftKey，altKey


默认行为：
浏览器自带的
oncontextmenu:右键菜单
document.oncontextmenu(){
    return false   阻止默认事件
}
context:环境

小例子：
1. 自定义右键菜单

2. 只能输入数字的文本框
onkeydown return false
0 -48
9 -57
小键盘也有自己的keyCode
左右键，退格键

拖拽：
事件：鼠标按下，onmousedown、onmouseup、onmousemove

offsetX、offsetY :
 事件对象event身上的属性 相对于带有定位的父盒子的x，y坐标
 如果是鼠标事件，就是点击处相对盒子的x，y
onmouseup：onmousemove = null
onmouseup = null 不留垃圾

脱离div
mouseup、mousemove加在document上
火狐bug、可以onmousedown returnfalse

限制div位置
if(l<0) l = 0

offsetHeight 高(div占的位置高)

事件绑定：attachEvent(事件名,函数) 在IE下起作用
oDiv.attachEvent('onclick',function(){

})
火狐，chrome
addEventListener('不带on的事件名',函数,false)

处理兼容：if(oBtn.attachEvent)//运行在IE

解除绑定：
IE:detachEvent()
火狐、chrome：removeEventListener

拖拽磁性吸附：
if(l<50) l = 0;

带虚框的拖拽


自定义滚动条：
比例 1/最大：控制其他物体 scale


