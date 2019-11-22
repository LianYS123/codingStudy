package com.jxufe.dependenceinversion;

public class App {
    public static void main(String[] args) {
        Person person = new Person();
        person.feed(new Dog());
        person.feed(new Cat());
    }
}
