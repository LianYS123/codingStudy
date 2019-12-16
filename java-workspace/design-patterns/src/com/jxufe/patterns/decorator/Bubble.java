package com.jxufe.patterns.decorator;
//泡沫：调料
public class Bubble extends Condiment {

    public Bubble(Beverage beverage) {
        super(beverage);
        this.description = "泡沫";
        this.description = beverage.description + " " + this.description;
    }

    @Override
    public double cost() {
        return this.beverage.cost() + 0.2;  //泡沫两毛钱
    }

}
