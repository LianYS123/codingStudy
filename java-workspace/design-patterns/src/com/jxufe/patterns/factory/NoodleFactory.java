package com.jxufe.patterns.factory;

public class NoodleFactory implements FoodFactory {
    @Override
    public Food getFood() {
        return new Noodle();
    }
}
