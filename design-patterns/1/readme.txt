1. 单一职责原则 （SRP：Single responsibility principle）
它规定一个类应该只有一个发生变化的原因。一个类只干一件事

2.开闭原则：
对扩展开放，对修改关闭
不改变源代码的情况下增加功能

Car
    getPrice()

DiscountCar()
    getPrice(){
        super.getPrice() * 0.8
    }

a. 开发代码的程序员分为两种
作者(服务器程序员)
用户(客户端程序员)

3. 接口隔离原则：
使用多个专门的接口要比使用一个总接口好

interface Animal
 eat();
 fly();
 swim();
 ---->
interface Eatable.java
interface Flyable.java
interface Swimable.java

4. 依赖倒置：
dependencyreverse
上层不应该依赖下层，他们都应该依赖抽象
违反依赖倒置：每当下层变动是，上层也跟着变
什么是上层？什么是下层？ 调用别的方法的就是上层，被调用的就是下层

class Persion {
    public void feed(Animal an){
        ...
        an.eat();
    }
}
interface Animal {
    void eat();
}
class Dog extend Animal {
    void eat();
}

Persion p = new Persion();
p.feed(Dog);

//下层直接依赖上层是违反依赖倒置的
原来依赖的箭头往下指，现在箭头往上指：依赖倒置


类和类之间的关系有三种：依赖、继承、关联
继承：实线加空心三角 (虚线是接口)
依赖：虚线加箭头,B的方法里面用A,就是B依赖A
关联：菱形+线+箭头，(B里面实例化一个A)，两种
    组合：关系强，                          实心菱形
    聚合：关系落，聚在一起，可以分开再回来    空心菱形



