## js中常见的数据类型
- 基本数据类型
    + 数字Number
    + 字符串string
    + 布尔boolean
    + 空对象指针 null
    + 未定义 undefined
- 引用数据类型
    + 对象数据类型
        + {} 普通对象
        + [] 数组对象
        + /^$/ 正则对象
        + Math数学函数对象
        + 日期对象
    + 函数数据类型 function
## Number类型
- 常规数字和NaN(NaN和任何值都不相等，包括自己NaN != NaN)
- 检测一个值是否为非有效数字，isNaN([val])：isNaN()这个函数如果检测的值不是数字，会把检测的值基于Number()方法转化为数字，再进行检测
### 将其他数据类型转化为数字
- Number([val])方法：
    + 字符串转数字：
    只要字符串中包含任意一个非有效数字（第一个点除外）结果都是NaN，空字符串会变成数字0
    + boolean转数字
    true：1, false: 0
    + undefined和null
    undefined:NaN
    null:0
    + 对象转数字
    把引用数据类型转换为数字，先把他基于toString方法转化为字符串，再转换为数字
    {}.toString() -> [object Object]
    [].toString() -> ''
    [10].toString() -> '10'
    [10,20].toString() -> '10,20'
- parseInt()/parseFloat([val],[进制])
从左到右依次查找有效数字字符，知道遇到非有效数字停止查找，返回找到的数字
和Number()机制不一样，会把参数先变成字符串再转换，parseFloat(true): NaN
- ==比较的时候：先进行类型转换，再比较
## String字符串类型
> 所有用'',"",``包起来的都是字符串
### 把其他类型转换为字符串
- toString()
(1).toString() -> '1'
(NaN).toString() -> 'NaN'
普通对象.toString() -> "[object Object]" : Object.prototype.toString方法不是转换用来字符串的，而是用来检测数据类型的
null和undefine禁止使用toString()方法，会报错
- 字符串拼接
四则运算中，+可能存在字符串拼接(一旦遇到字符串，是字符串凭借)
'10' + 10   ->   '1010'
'10' - 10   ->   0
'10px' - 10 ->   NaN ：先用Number转换为数字，再运算
## boolean
> true/false
### 把其他类型值转boolean
> 只有0、NaN、''、null、undefined五个值转换为false，其他都为true，没有特殊情况
- Boolean([val])
- !/!!
!1 -> false：先转为boolean,再取反
!!1 -> true: 相当于Boolean()
- 条件判断
if(1){} 如果条件只是一个值，会先转换为boolean,然后验证真假 

## null/undefined
> 都代表没有
- null：意料之中（一般手动设置为null，后期给与赋值）,不在栈内存中占空间
- undefined：意料之外（创建变量没赋值，默认就是undefined）
## object对象
> 键值对(属性名：属性值)
属性名只能是数字或者字符串，字符串只能用中括号调用
删除：
假删除：person.name = null
真删除：delete person.name
> 数组是特殊的对象
在中括号中写的是属性值，属性名是默认生成的数字，从0开始递增
天生默认一个属性名length，存储数组长度

## 栈内存：
变量存储空间、值存储空间
值存储区存储基本数据类型或引用地址
连等赋值：让等式左边的依次和等式最右边的关联

## 数据类型检测
> 四种方法
- typeof [val]：用来检测数据类型的运算符
    基于typeof检测出来的：
        1. 首先是一个字符串
        2. 字符串包含对应的类型
        typeof function(){} -> "function"
    局限性：
        1. typeof null -> "object"  但null并不是对象
        2. 基于typeof无法细分出不同对象还是数组对象，都返回"object"
- instanceof [val]:用来检测是否隶属于某个类
- constructor : 基于构造函数检测（基于类的方式）
- Object.prototype.toString.call() :检测数据类型最好的办法

## js中的操作语句：判断、循环
### 判断
- if/else
- 三个运算符
a > 2 ? console.log('aaa') : console.log('bbb')
如果处理的事情比较多，可以用括号包起来，每件事情用逗号分隔
如果不需要处理事情，可以使用null/undefined占位
a > 0 ? (a++,console.log(a)) : null
相当于
if(a > 0) {
    a ++;
    console.log(a);
}
- switch case
当一个变量不同的几种值的时候要做相同的事
switch(a){
    case 1:
    case 2:
        a += 2;
    default:
        a--;
}
当a == 1和 a == 2 时都会执行a += 2;
注意：case比较用的是===:绝对相等，所以当a = '1'时会走default
== :先转换为相同类型，再比较
=== :类型不相同时直接false
项目中推荐使用 ===
### 循环
- for
- for in (优先遍历数字属性名，从小到大 ):
    for(let key in obj){}
- for of(es6新增)
- while 
- do while

### 函数
- 形参默认值是undefined
- 默认返回值为undefined
- 定义的事件绑定函数没有立即执行
- 创建函数，开辟的堆内存中存储的函数体中的代码，是按照字符串存储的
- 每次函数执行都会形成全新的私有栈内存 
- arguments ：函数内置的实参类数组集合
- arguments.callee: 存储的是当前函数本身（一般不用，JS严格模式禁止使用）

### 小知识
- console.dir() 查看对象详细信息
- 如果没有把样式写在行内，那么通过Element.style.xxx不能获取样式
- 颜色行内使用16进制，element.style.backgroundColor获取到的是rgb值
- 修改的是堆内存中的值，浏览器会基于DOM映射机制把页面中的元素重新渲染
- js中集合和数组看起来很相似，也是以数字作为索引，有一个length属性，属于类数组
- 判断是否为undefined
    + typeof val === 'undefined'
    + val === undefined
- 自定义属性思想
- 常用浏览器内核：
    + webkit 
    + gecko
    + presto
    + trident
- js中的保留字(声明变量避免使用)
    + boolean
    + float
    + int
    + double
    + char
    + debugger
    + ...
- 常用的输出方式
    + console.xxx()
        - console.log()
        - console.dir() ：输出dom对象详细信息
        - console.table()：把一个多维JSON数组，按表格的形式呈现
    + 浏览器窗口弹窗(都会经过toString转换为字符串,都会阻断js代码的执行)
        - alert()
        - confirm(): 确认和取消：选择性弹框
        - prompt()： 比confirm多了个输入框
    + document.write(在页面中写入，不常用)
- a ++ 和 a += 1的区别: a++是纯粹的数学运算
当a = '10'时，a++ 后a=11, a+=1后a=101