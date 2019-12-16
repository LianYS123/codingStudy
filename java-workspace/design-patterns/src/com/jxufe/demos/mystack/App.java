package com.jxufe.demos.mystack;

import java.util.LinkedList;

class MyStack<T> {
    private LinkedList<T> list = new LinkedList<>();
    public boolean push(T t){
        return list.add(t);
    }
    public T pop() {
        return list.removeLast();
    }

    @Override
    public String toString() {
        return list.toString();
    }
}

public class App {
    public static void main(String[] args) {
        MyStack<String> stack = new MyStack<>();
        stack.push("hello");
        stack.push("world");
        stack.push("stack");
        stack.pop();

        System.out.println(stack);
    }
}
