package com.jxufe.patterns.observer;

public class App {
    public static void main(String[] args) {
        Child child = new Child();
        child.add(e -> {
            System.out.println("hit");  //添加监听
        });
        child.add(e -> {
            System.out.println("hug");  //添加监听
        });
        child.wakeup();
    }
}
