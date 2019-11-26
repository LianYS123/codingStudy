package com.jxufe.patterns.strategy;

public class RedHeadDuck extends Duck {

    public RedHeadDuck() {
        this.fb = new FlyWithRocket(); //坐火箭飞
        this.qb = new Squeak(); //吱吱叫
    }

    @Override
    public void display() {
        System.out.println("红头鸭");
    }
}
