package demos.threadprint;

class S implements Runnable {
    private Lock lock;

    public S(Lock lock) {
        this.lock = lock;
    }

    @Override
    public void run() {
        for(int i = 'A'; i <= 'Z'; i ++){
            synchronized (lock){
                while(lock.x == 1){
                    try {
                        lock.notifyAll();
                        lock.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.println((char)i);
                lock.x = 1;
            }
        }
    }
}