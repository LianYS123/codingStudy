package com.jxufe.patterns.factory;

//客户端自己制造的产品
class Hamburger implements Food {

    @Override
    public void eat() {
        System.out.println("eat my hamburger");
    }
}
//客户端自己制造的工厂
class HamburgerFactory implements FoodFactory {
    @Override
    public Food getFood() {
        return new Hamburger();
    }
}

public class App {
    public static void main(String[] args) {
        NoodleFactory nf = new NoodleFactory();
        nf.getFood().eat();
        Business.taste(nf);

        System.out.println("==============================");
        HamburgerFactory hf = new HamburgerFactory();
        hf.getFood().eat();
        Business.taste(hf);

    }
}
