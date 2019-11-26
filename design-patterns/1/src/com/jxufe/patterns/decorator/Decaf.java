package com.jxufe.patterns.decorator;

//无咖啡因咖啡：饮料
public class Decaf extends Beverage {

    public Decaf() {
        super("无咖啡因咖啡");
    }

    @Override
    public double cost() {
        return 5;
    }
}
