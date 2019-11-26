package com.jxufe.patterns.strategy;
//用火箭飞
public class FlyWithRocket implements FlyBehavior {
    @Override
    public void fly() {
        System.out.println("用火箭飞");
    }
}
