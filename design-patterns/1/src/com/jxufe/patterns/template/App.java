package com.jxufe.patterns.template;

import java.util.ArrayList;
import java.util.LinkedList;

abstract class Template {
    public void template() {
        System.out.println("start");
        long start = System.currentTimeMillis();
        code();
        long end = System.currentTimeMillis();
        System.out.println("end");
        System.out.println("代码运行时间为" + (end - start));
    }
    protected abstract void code();
}

class ArrayListRuntime extends Template {

    @Override
    protected void code() {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < 100000; i++) {
            list.add(0,1);
        }
    }
}
class LinkedListRuntime extends Template {

    @Override
    protected void code() {
        LinkedList<Integer> list = new LinkedList<>();
        for(int i = 0; i < 100000; i ++) {
            list.add(0, 1);
        }
    }
}

public class App {
    public static void main(String[] args) {
        new ArrayListRuntime().template();
        new LinkedListRuntime().template();
    }
}
