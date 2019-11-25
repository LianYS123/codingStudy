package com.jxufe.principle.dependenceinversion;

public class Cat implements Animal {
    @Override
    public void eat() {
        System.out.println("猫吃鱼");
    }
}
