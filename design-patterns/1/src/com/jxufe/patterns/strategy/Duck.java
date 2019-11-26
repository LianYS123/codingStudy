package com.jxufe.patterns.strategy;

public abstract class Duck {
    protected FlyBehavior fb;  //怎么飞策略
    protected QuackBehavior qb;//怎么叫策略
    public void swim() {
        System.out.println("鸭子游泳");
    }
    public void performFly() {
        fb.fly();
    }
    public void performQuack() {
        qb.quack();
    }

    public abstract void display();
}
