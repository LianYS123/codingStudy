package com.jxufe.patterns.strategy;


class RubberDuck extends Duck {  //新型鸭子：橡皮鸭

    public RubberDuck() {
        this.fb = new FlyWithKick();
        this.qb = new Mute(); //不会叫
    }

    @Override
    public void display() {
        System.out.println("橡皮鸭");
    }
}
class FlyWithKick implements FlyBehavior { //新型飞的方式：一脚踹飞

    @Override
    public void fly() {
        System.out.println("一脚踹飞");
    }
}

public class App {
    public static void main(String[] args) {
        Duck duck = new RedHeadDuck();
        duck.swim();
        duck.performFly();
        duck.performQuack();

        Duck duck2 = new MallarDuck();
        duck2.performFly();
        duck2.performQuack();

        //新加的鸭子
        Duck duck3 = new RubberDuck();
        duck3.performFly();
        duck3.performQuack();

    }
}
