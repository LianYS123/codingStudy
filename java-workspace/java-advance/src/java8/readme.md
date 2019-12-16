javascript程序可以在jvm上运行 : jjs 1.js

Lambda表达式：
-> Lambda操作符 或 箭头操作符
()  Lambda形参列表(接口中抽象方法的形参列表)
右边 方法体
Lambda表达式的本质：作为接口的实现
函数是接口：只有一个方法的接口
四大核心函数型接口：
消费型：Consumer<T>     void accept(T t)
供给型：Supplier<T>     T get()
函数型：Function<T,R>   R apply(T t)
断定型：Predicate<T>    boolean test(T t)

方法引用::
方法引用使用要求：接口的丑行方法和形参列表和返回值类型与方法引用的参数列表和返回值类型一致
类/对象 :: 方法名
构造器引用：
类 :: new
数组引用：
把数组看成一个特殊的类，就和构造器引用一致

强大的Stream API
主要面向CPU做计算
不会更改原对象，会返回一个新Stream(不可变性)
操作是延时的，一旦执行终止操作，就会执行中间的操作链
一旦执行终止操作，当前Stream就不能再被使用

创建方式：
方式一：
list.stream()
list.parallelStream()
方式二：
Arrays.stream(arr)
方式三：
Stream.of(args...)
方式四：创建无限流，可以帮助造数据
Stream.iterate(0,t->t+2) 第一个参数seed:就是初始值

中间操作：
筛选与切片：
filter(Predicate p).forEach();
limit() 截断流,使其元素不超过指定数量
skip() 跳过元素,跳过指定个数元素
distinct() 筛选,去除重复元素，根据equals()和hashCode()
映射：
map()
flatMap() 将内部展开
排序：
sorted() 自然排序
sorted(Comparator) 定制排序

终止操作：
匹配：
allMatch() 检查是否匹配所有元素,返回boolean
anyMatch() 是否至少一个匹配
noneMatch() 检查是否没有匹配的元素
findFirst() 返回第一个元素
findAny() 找任意一个
max(Comparator)
min(Comparator)
forEach()
归约：
reduce(identity,fun) identity:初始值
收集：
collect(Collector)
Collector.toList()
Collector.toSet()
Collector.toCollection()

Optional<T>：为了避免空指针异常而出现的
创建方式：
Optional.of(T t) t必须非空
Optional.ofNullable(T t) t可以为空
opt.orElse(obj) 如果当前封装的T非空，返回t, 如果为空，则返回obj
opt.get() 如果opt里面为空，会抛异常
