package com.jxufe.demos.threadprint1;

class T implements Runnable {
    private Lock lock;

    public T(Lock lock) {
        this.lock = lock;
    }

    @Override
    public void run() {
        for(int i = 0; i < 52; i ++){
            synchronized (lock){
                while(lock.x == 2){
                    try {
                        lock.notifyAll();
                        lock.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.println(i+1);
                if(i % 2 == 1){
                    lock.x = 2;
                    lock.notifyAll();
                }
            }
        }
    }
}