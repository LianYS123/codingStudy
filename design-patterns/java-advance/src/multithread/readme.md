
- 程序：静态的代码
- 进程：正在运行的程序
- 线程：几个程序内部的一条执行路径

方法区和堆：一个进程共享
栈和程序计数器：每个线程独立拥有

java运行至少执行三个线程：主线程，gc()垃圾回收线程，异常处理线程
并行：多个CPU同时执行多个任务
并发：一个CPU同时执行多个线程

线程start方法只能执行一次
给主线程设置名字：Thread.currentThread().setName
线程优先级：
thread.getPriority();
thread.setPriority();
无效的源发行版：setting->Project->设置jdk版本
同步监视器：锁
非同步方法中的锁是this
静态的同步方法，同步监视器是当前类本身(.class)

ReentrantLock 锁
Lock lock = new R..
lock.lock();
代码
lock.unlock();
和synchronized的不同：
synchronized 机制自动释放同步监视器
lock 需要手动启动同步、结束同步
wait会释放锁
wait、notify、notifyAll都必须在同步代码块中调用，调用者必须是同步监视器
sleep和wait的异同点：
- 相同点：都可以使线程进入阻塞队列
- 不同点：
    1)声明位置不同：Thread中声明sleep(),Object声明wait()
    2)调用要求不同：sleep() 可以在任何场景调用，wait()必须在同步代码块中
    3）sleep()不会释放锁，wait()会        