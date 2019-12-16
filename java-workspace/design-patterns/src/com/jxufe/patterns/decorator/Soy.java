package com.jxufe.patterns.decorator;

//大豆：调料
public class Soy extends Condiment {
    public Soy(Beverage beverage) {
        super(beverage);
        this.description = "大豆";
        this.description = beverage.description + " " + this.description;
    }

    @Override
    public double cost() {
        return beverage.cost() + 0.5; // 大豆五毛钱
    }
}
