package com.jxufe.patterns.strategy;

public class FlyNoway implements FlyBehavior {
    @Override
    public void fly() {
        System.out.println("不会飞");
    }
}
