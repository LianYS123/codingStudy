package com.jxufe.principle.dependenceinversion;

public class Person {
    public void feed(Animal a){
        System.out.println("开始喂食");
        a.eat();
    }
}
