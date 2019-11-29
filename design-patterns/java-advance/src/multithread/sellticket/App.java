package multithread.sellticket;

class Window extends Thread {
    private int ticket = 100;
    @Override
    public void run() {
        while(ticket > 0) {
            System.out.println("卖出票："+ticket);
            ticket --;
        }
    }
}
public class App {
    public static void main(String[] args) {
        //卖出三百张票
//        new Window().start();
//        new Window().start();
//        new Window().start();
        //run方法同样的写法,卖出一百张票
        Runnable r = new Runnable() {
            private int ticket = 100;
            @Override
            public void run() {
                while(ticket > 0) {
                    System.out.println("卖出票："+ticket);
                    ticket --;
                }
            }
        };
        new Thread(r).start();
        new Thread(r).start();
        new Thread(r).start();
    }
}
