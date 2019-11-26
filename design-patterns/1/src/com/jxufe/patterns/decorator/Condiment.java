package com.jxufe.patterns.decorator;

//调料
//装饰着类 传入饮料 -> 得到装饰后的饮料  ：类型不变
public abstract class Condiment extends Beverage { //为什么要继承饮料？ 装饰完之后还是饮料
    protected Beverage beverage; //用一个东西装饰

    public Condiment(Beverage beverage) {  //把用来装饰的东西传进来
        super("调料");      //装饰完之后的饮料
        this.beverage = beverage;
    }

    @Override
    public abstract double cost(); //对调料价格进行调整
}
