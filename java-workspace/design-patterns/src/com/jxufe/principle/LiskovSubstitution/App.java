package com.jxufe.principle.LiskovSubstitution;

public class App {
    //里氏替换原则的反例: 正方形无法继承长方形
    public static void main(String[] args) {
        Rectangle rec =  new Rectangle(100,100); //此处无法替换，因为业务逻辑不同，换成长方形后死循环
        Util.transform(rec);
    }
}
