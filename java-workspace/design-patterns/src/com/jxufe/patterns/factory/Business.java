package com.jxufe.patterns.factory;

public class Business {
    public static void taste(FoodFactory factory){
        Food food1 = factory.getFood(); //不同的food
        System.out.println("评委1品尝");
        food1.eat();

        Food food2 = factory.getFood(); //不同的food
        System.out.println("评委2品尝");
        food2.eat();

        Food food3 = factory.getFood(); //不同的food
        System.out.println("评委3品尝");
        food3.eat();
    }
}
