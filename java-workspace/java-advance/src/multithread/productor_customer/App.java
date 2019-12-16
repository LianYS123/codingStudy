package multithread.productor_customer;

class Clerk {
    int count;
}
class Productor implements Runnable {

    private Clerk clerk;

    public Productor(Clerk clerk) {
        this.clerk = clerk;
    }

    @Override
    public void run() {
        while(true) {
            synchronized (clerk) {
                if(clerk.count >= 100) {
                    try {
                        clerk.notify();
                        clerk.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.println("生产第"+(clerk.count + 1)+"个产品");
                clerk.count ++;
            }

        }
    }
}
class Customer implements Runnable {

    private Clerk clerk;

    public Customer(Clerk clerk) {
        this.clerk = clerk;
    }

    @Override
    public void run() {
        while(true) {
            synchronized(clerk) {
                if(clerk.count <= 0) {
                    try {
                        clerk.notify();
                        clerk.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.println("消费第"+clerk.count+"个产品");
                clerk.count --;
            }
        }
    }
}
public class App {
    public static void main(String[] args) {
        Clerk clerk = new Clerk();
        new Thread(new Productor(clerk)).start();
        new Thread(new Customer(clerk)).start();

    }
}
