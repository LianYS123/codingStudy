package com.jxufe.demos.threadprint1;
public class App {
    public static void main(String[] args) {
        Lock lock = new Lock();
        new Thread(new T(lock)).start();
        new Thread(new S(lock)).start();
    }
}
