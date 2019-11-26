package com.jxufe.patterns.strategy;

public class Mute implements QuackBehavior {
    @Override
    public void quack() {
        System.out.println("不会叫");
    }
}
