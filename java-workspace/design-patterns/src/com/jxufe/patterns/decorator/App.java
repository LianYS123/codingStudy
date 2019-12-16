package com.jxufe.patterns.decorator;

public class App {
    public static void main(String[] args) {
        Beverage b = new DarkRoast();
        Beverage b1 = new Bubble(b);
        Beverage b2 = new Soy(b1);
//        Beverage b3 = new Bubble(b2);
        System.out.println(b2.getDescription() + ":" + b2.cost());
    }
}
