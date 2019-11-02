x-my-
x开头的都是自定义的头

拖拽：
事件:
ondragenter   拖着东西进入：
ondragleave   拖着东西离开
ondragover    悬停  只有鼠标没松手，没离开，会一直发生   //如果不阻止默认事件，ondrop不会出来
ondrop        松手   //这里也要阻止默认事件，防止文件在浏览器打开  事件：ev.dataTransfer.files:文件在这里

document也到阻止默认drop事件

timer
document.addEventListener('dragover',()=>{
    clearTimeout(timer)
    
})



绑定的事件(addEventListener)阻止默认事件：ev.preventDefault();
oAjax XMLHttpRequest...

这个得放到前面：upload不能往后放  至少放在send之前
文件上传 aAjax.upload.onprogress = function(ev) {
    ev.loaded    完成
    ev.total   总共
    ev.loaded/ev.total    =>上传进度
}
onprogress官方推荐用addEventListener()

加了upload之后：会拆分成两个请求，一个post请求，一个options请求

<meter>  value min max width  就是一个进度条 默认0-100   

ajax其实有两个progress：
oAjax.onprogress        下载进度
oAjax.upload.onprogress 上传进度

事件版本：
DOM1、DOM2
HTML5 --- DOM3
官方要求，所有dom3事件都要绑定


断点续传---普通HTML做不到，需要通过客户端  content-range头

读取文件：
HTML5有个新的东西:FileReader
reader.onload = function(ev) {
    reader.result   //结果
}
读取文件必须工作在服务器环境下

readAsText
readAsDataURL       :     base64  特别适合图片
readAsBinaryString   以字符串存储的二进制数据
readAsArrayBuffer    以二进制形式数据  ArrayBuffer对象，类似后台Buffer


关于base64
传输数据：
1.直接传二进制
2.base64

base64：可以将二进制转成字符串
只要能出现地址的地方，都能用base64
只需要请求一次服务器

页面里的小图标，直接放个base64
缺点：
1.维护起来麻烦
2.会把文件体积变大  16进制的，更废地


真的上传：
将file存在li标签里面 li.file = 
上传文件：ID filename originalname path
数据库里面存的事件戳都是秒，不是毫秒：Math.floor(Date.now()/1000)

insert into table () values(),(),()

前台判断图片类型：
file.type.startsWith('image/')

数据库性能与数据库体积相关，体积越大，性能越低，文件一般不存数据库

为了防止read瞬间读完，onload放在前面
onload
readAsXXX


拿文件：
1.拖拽    ev.
2.input   input.files


注意：
element.attr这种获取属性的方式，对于自定义属性无效
使用拼接innerHTML设置的属性，无法用element.attr获取
js中使用element.attr=xxx设置的属性，可以用element.attr方法获取



