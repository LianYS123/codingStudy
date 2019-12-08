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
