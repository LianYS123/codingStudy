package multithread.singleton;

class Bank {
    private static Bank bank = null;

    private Bank() {}
    public static Bank newInstance(){
        if(bank == null) {
            synchronized(Bank.class) {  //静态方法中使用Bank类对象作为锁
                if(bank == null) bank = new Bank();
            }
        }
        return bank;
    }
}

public class App {
    public static void main(String[] args) {
        Bank bank = Bank.newInstance();
    }
}
