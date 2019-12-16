package com.jxufe.demos.threadprint2;

class T implements Runnable {
    private int count = 0;
    @Override
    public void run() {
        while(count <= 50) {
            synchronized (this) {
                for(int i = 1; i <= 10; i ++) {
                    System.out.println(Thread.currentThread().getName() + ":" + i);
                }
                try {
                    this.notifyAll();
                    this.wait();
                    count ++;
                    if(count > 50) this.notifyAll(); //防止线程不仅循环，没人唤醒主线程
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public int getCount() {
        return count;
    }
}

public class App {
    public static void main(String[] args){
        T t = new T();
        new Thread(t).start();

        while (t.getCount() <= 50) {
            synchronized (t) {
                for(int i = 1; i <= 100; i ++) {
                    System.out.println(Thread.currentThread().getName() + ":" + i);
                }
                try {
                    t.notifyAll();
                    t.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
