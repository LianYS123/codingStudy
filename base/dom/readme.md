dom:操作HTML和xml(对HTML和XML的编程接口)
如果个html上面套一层标签，那这个标签是document
querySelector(),querySelectorAll() 选出来的是副本,不是实时的(不会实时改变) 不怎么用,改它自己能改

遍历节点树：
一切标签元素都有(属性)：
parentNode  父级节点：document为null
childNodes 子节点们，包括所有节点类型的节点
firstChild、lastChild :第一个和最后一个子节点
nextSibling、previousSibling :兄弟节点

遍历元素节点树：ie9以下只有children能用
parentElement
children 元素子节点
childElementCount === children.length
firstElementChild、last。。。
nextElementSibling previousElementSibling

节点的四个属性
nodeName：节点名 (只读的)
nodeValue:只有文本节点和注释节点，可读可写
* nodeType：该节点类型:最重要的
attributes：属性节点的集合，数组

节点的类型： --接nodeType
元素节点--1
文本节点--3：空格和文本都算文本
属性节点--2: 没啥用
注释节点--8
document--


返回一个所有子元素的数组,不能用children：
let obj = {
    length : 0,
    push : Array.prototype.push,
    splice : Array.prototype.splice //有了这个方法后这个对象就长得和数组一样了
}
return obj


方法hasChildNodes() 有没有子节点

DOM结构树
document:文档对象 他的构造函数是HTMLDocument
Document:构造函数，不能new 

HTMLDocument.prototype = {
    __proto__ : Document.prototype
}

原型链：(--> 继承自)
document --> HTMLDocument..prototype --> Document.prototype 
DOM结构树：一系列继承关系
document.body 指代body

getElementById定义在Document.prototype上 xml也能用,Element不能用
getElementByClassName定义在.prototype上 xml也能用
getElementByTagName 定义在Document.prototype 和Element.protoType上  Node上也能用, getElementByTagName('*')通配符选择器
HTMLDocument.prototype上定义了body、head属性
Document.prototype上定义了documentElement  document.documentElement表示html标签
getElementsByClssName、querySelectorAll、querySelector定义在Document.prototype 和Element.protoType上

创建节点：
docuemnt.createElement('div') 通过TagName创建标签
document.createTextNode('') 创建文本节点
document.createComment('')创建注释节点

插入节点
Element.appendChild 类似数组的push
appendChild是剪切操作：将一个页面上的元素append到另一个元素中
Element.insertBefore(a,b) : 父级元素调用，将a插入到b之前

删除节点
parent.removeChild(element) 父级调用，移除子节点，返回remove的元素
element.remove() 自尽，销毁自身，不返回

替换节点
parent.replaceChild(new,origin) 拿新的替换老的，返回老的 不常用

element.innerHTML
element.innerText  赋值会把所有的东西(包括结构)覆盖掉

element.setAttribute(属性名，属性值)  设置属性
element.getAttribute(属性名)
data-log 属性：自定义属性，用来统计用户点击数  
