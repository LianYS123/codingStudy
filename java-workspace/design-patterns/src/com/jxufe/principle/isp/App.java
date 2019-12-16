package com.jxufe.principle.isp;

//使用多个专门的接口要比使用一个总接口好
class Dog implements  EatAble,SwimAble {

    @Override
    public void eat() {
        System.out.println("狗啃骨头");
    }

    @Override
    public void swim() {
        System.out.println("狗刨");
    }
}
class Bird implements FlyAble,EatAble {

    @Override
    public void fly() {
        System.out.println("飞啦~~~~");
    }

    @Override
    public void eat() {
        System.out.println("吃虫子");
    }
}
public class App {
    public static void main(String[] args) {
        Dog dog = new Dog();
        Bird bird = new Bird();
        dog.eat();
        bird.eat();
        dog.swim();
        bird.fly();
    }
}
