1. String 不可被继承(final类）
2. 实现了Serializable：可序列化
    实现了Comparable：可以比较大小
3. 内部定义了final char[] value 用于存储字符串数据:不可变性
字面量方式区别于new方式：
方法区里面包含字符串常量池(方法区里面不会存储两个相同的字符串)
new 出来的String在堆内存里，里面的value指向常量池的值
字面量和字面量的连接，没有变量参与，都看作是字面量
只要有变量参与的字符串+，都相当于是new
str.intern()返回常量池中的字符串地址

规范上方法区属于堆，实际上方法区和堆是分开的

str.trim()去除字符串首尾空格
str.concat()字符串连接
substring() [a,b)左闭右开,从哪开始到哪结束 一般都是左闭右开
startsWith();
endsWith();
contains() 是否包含
indexOf() 返回索引，没有返回-1，第二个参数可以是从哪开始
replace() 替换:字符或字符串
replaceAll() 正则替换
matches() 匹配，返回boolean
split() 正则切分

String与基本数据类型的转换
int num = Integer.parseInt();
将基本数据类型/包装类 转化为String
str.valueOf(num);

String 与 char[] 之间的转换：
str.toCharArray();
new String(char[] value)

String与 byte[] 之间的转化：
str.getBytes(); 可以传一个编码类型的参数，如gbk
new String(bytes);

StringBuffer、StringBuilder 可变字符序列，但也是
都是用char型数组存储
常用方法：
setCharAt(); 设置字符串 index,ch  没有返回值
append(); 添加，可以添加各种类型的数据，可以使用方法链调用str.append().append()
delete(start,end);左闭右开
replace(start,end,str);左闭右开， 替换 
insert(offset,str); 插入
reverse() 翻转
substring() 不是切割当前字符串，和string的substring一样

时间的API
System.currentTimeMillis(); 当前时间戳
Date
java.util.Date
    |- java.sql.Date：对应数据库中的类型
//构造器：
new Date() 可以传入一个long型的时间戳
date.getTime()：时间戳
将util.Date转换为sql.Date():使用时间戳构造器

SimpleDateFormat：对Date类的时间格式化
实例化：sdf = new SimpleDateFormat();//默认，不常用
实例化：sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");//指定方式格式化和解析 M:月 m:分钟， 其他都小写
两个操作：
1. 格式化：日期->字符串
String format = sdf.format(date)
2. 解析：字符串->日期
Date date = sdf.parse(str)

Calendar：日历类,是一个抽象类
1. 实例化：
calendar = Calendar.getInstance();
get(): calendar.get(Calendar.DAY_OF_MONTH);
set(): calendar.set(Calendar.DAY_OF_MONTH,22):
add(): calendar.add(Calendar.DAY_OF_MONTH,10) //添加多少天，可以负数
Date date = calendar.getTime();
calendar.setTime(date);
注意：获取月份：1月是0, 获取星期：周日是1

jdk8的日期时间api
//获取当前日期、时间、日期+时间
LocalDate.now();
LocalTime.now();
LocalDateTime.now();
//指定日期时间
LocalDateTime.of(2020,10,6)
getxxx:
withxxx:就是设置，设置作为返回值(不可变性)
plusxxx: 加
minusxxx:减

Instant:瞬时
实例化：
instant = Instant.now(); //本初子午线时间
instant.atOffset(ZoneOffset.ofHours(8));
instant.toEpochMilli() 获取毫秒数

DateTimeFormatter():日期时间格式化
1. 预定义：
DateTimeFormatter.ISO_LOCAL_DATE_TIME
2. 自定义：
formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
formatter.format(LocalDateTime.now())

排序：
自然排序：实现comparable
定制排序：java.util.Comparator
Arrays.sort(arr,new Comparator(){...})

其他常用类：BigInteger、BigDecimal、Math、System











