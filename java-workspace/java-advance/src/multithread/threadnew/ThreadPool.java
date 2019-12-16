package multithread.threadnew;

import java.util.concurrent.AbstractExecutorService;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;

public class ThreadPool {
    public static void main(String[] args) {
        ExecutorService service = Executors.newFixedThreadPool(10);//创建一个线程数为10的池子
        //设置属性：
        ThreadPoolExecutor service1 = (ThreadPoolExecutor) service;
        service1.setCorePoolSize(15);
        System.out.println(service.getClass());
        service.execute(()->{
            for (int i = 0; i < 100; i++) {
                if(i % 2 == 0) System.out.println(Thread.currentThread().getName() + ":" + i);
            }
        });
        service.shutdown();//关闭线程池
    }
}
