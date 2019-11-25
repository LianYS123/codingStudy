package com.jxufe.principle.openclose;

public class DiscountCar extends Car {
    public DiscountCar(String name, double price) {
        super(name, price);
    }
    //重写父类方法，不改变源码实现打折功能
    @Override
    public double getPrice(){
        return super.getPrice() * 0.8;
    }

}
