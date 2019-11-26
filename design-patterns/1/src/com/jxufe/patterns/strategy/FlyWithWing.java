package com.jxufe.patterns.strategy;
//用翅膀飞
public class FlyWithWing implements FlyBehavior {

    @Override
    public void fly() {
        System.out.println("用翅膀飞");
    }
}
