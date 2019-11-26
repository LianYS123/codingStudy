package com.jxufe.patterns.adapter.calc;

class Calc {
    //两个数相加的方法
    public int add(int a, int b) {
        return a + b;
    }
}
//适配器
//添加三个数相加的功能
class CalcAdapter {
    private Calc calc = new Calc();  //组合优于继承
    public int add(int a, int b, int c) {
        return calc.add(calc.add( a,b), c);
    }
}

public class App {
    public static void main(String[] args) {
        System.out.println(new Calc().add(1,2));
        System.out.println(new CalcAdapter().add(1,2,3));
    }
}
