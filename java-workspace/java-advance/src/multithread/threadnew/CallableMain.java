package multithread.threadnew;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

class ThreadNew implements Callable {
    @Override
    public Object call() throws Exception {
        int sum = 0;
        for (int i = 0; i < 100; i++) {
            if(i % 2 == 0) sum += i;
        }
        return sum;
    }
}

public class CallableMain {
    public static void main(String[] args) {
        ThreadNew t = new ThreadNew();
        FutureTask task = new FutureTask(t);
        new Thread(task).start();
        try {
            Object sum = task.get();
            System.out.println("结果是"+sum);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}
