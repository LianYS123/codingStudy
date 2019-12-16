package com.jxufe.patterns.simplefactory;

interface Food {
    void eat(); // 被吃
}
class Noodle implements Food{

    @Override
    public void eat() {
        System.out.println("吃面");
    }
}

class Rice implements Food {

    @Override
    public void eat() {
        System.out.println("吃饭");
    }
}

//简单工厂模式：扩展性不好，用户想要实现一个自己的食物类不方便
class FoodFactory {
    public static Food getFood(int n) {
        Food food = null;
        switch (n) {
            case 1:
                food = new Noodle();
                break;
            case 2:
                food = new Rice();
                break;
        }
        return food;
    }
}

public class App {
    public static void main(String[] args) {
        Food food = FoodFactory.getFood(2);
        food.eat();
    }
}
