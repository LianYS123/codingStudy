package com.jxufe.patterns.factory;

public class RiceFactory implements FoodFactory {
    @Override
    public Food getFood() {
        return new Rice();
    }
}
