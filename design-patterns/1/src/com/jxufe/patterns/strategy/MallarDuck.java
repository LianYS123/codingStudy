package com.jxufe.patterns.strategy;
//野鸭
public class MallarDuck extends Duck {

    public MallarDuck() {
        this.fb = new FlyWithWing();//用翅膀飞
        this.qb = new Quack();//嘎嘎叫
    }

    @Override
    public void display() {
        System.out.println("野鸭");
    }
}
