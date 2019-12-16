package com.jxufe.patterns.decorator;

public class DarkRoast extends Beverage { //焦炒咖啡：饮料

    public DarkRoast() {
        super("焦炒咖啡");
    }
    @Override
    public double cost() {
        return 10;
    }
}
