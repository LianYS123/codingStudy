package com.jxufe.patterns.strategy;
//吱吱叫
public class Squeak implements QuackBehavior {

    @Override
    public void quack() {
        System.out.println("吱吱叫");
    }
}
