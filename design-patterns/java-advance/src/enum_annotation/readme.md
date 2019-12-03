枚举类：
如果枚举类中只有一个对象，那么可以看作是单例模式的实现
属性赋值：显示赋值，代码块赋值，构造器赋值
使用enum关键字创建枚举类：
创建每个对象必须在第一步，多个对象用逗号隔开
Enum类的方法：
values():返回枚举类的所有对象
valueOf():根据名字找对象 如根据"SPRING"找到对象名为SPRING的对象
枚举类也可以实现接口：可以使每个枚举对象分别实现接口中的方法 SPRING("春天","春暖花开"){...实现接口方法}

注解：
自定义注解：声明为@interface 跟接口没关系，是注解的声明
内部定义成员，通常使用value,如果没有成员，表示一个标识作用
可以指定成员的默认值，使用default关键字
4中元注解:对现有的注解进行解释说明的注解
Retention(指定所修饰的注解的声明周期)：
    SOURCE(编译时就不会加入)、
    CLASS(默认行为，运行时不会加入)、
    RUNTIME(会加载到内存中,可以通过反射获取)
    
Target：可以用来修饰什么？没有指定的话什么结构都可以用
ElementType:
TYPE/FIELD/METHOD/
Documented：默认javadoc不包含注解，声明了@Documented之后，注解可以在javadoc是保留
Inherited：被@Inherited修饰的注解将具有继承性
自定义注解一般都会指明Retention、Target
jdk8中注解的新特性：
可重复注解:@Repeatable(MyAnnotations.class),也是一个元注解
                                   可以修饰类型的注解：@Target({TYPE_USE})
                                   可以修饰泛型的注解：@Target({TYPE_PARAMETER})


