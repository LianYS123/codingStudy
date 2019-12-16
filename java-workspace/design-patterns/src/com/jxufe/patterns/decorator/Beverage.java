package com.jxufe.patterns.decorator;

public abstract class Beverage { //饮料
    protected String description;

    public Beverage(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public abstract double cost();

}
