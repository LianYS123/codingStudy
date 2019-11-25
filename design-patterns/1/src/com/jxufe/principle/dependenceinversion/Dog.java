package com.jxufe.principle.dependenceinversion;

public class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("狗啃骨头");
    }
}
