package com.jxufe.principle.openclose;

public class App {
    public static void main(String[] args) {
        System.out.println(new Car("c1",10000));
        System.out.println(new DiscountCar("c2",10000));
    }
}
