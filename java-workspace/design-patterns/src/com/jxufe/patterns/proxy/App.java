package com.jxufe.patterns.proxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.Arrays;

interface ICalc {
    int add(int a, int b);
    int sub(int a, int b);
    int mul(int a, int b);
    int div(int a, int b);
}

class CalcImpl implements ICalc {

    @Override
    public int add(int a, int b) {
        return a + b;
    }

    @Override
    public int sub(int a, int b) {
        return a - b;
    }

    @Override
    public int mul(int a, int b) {
        return a * b;
    }

    @Override
    public int div(int a, int b) {
        return a / b;
    }
}

class MyHandler implements InvocationHandler {

    private ICalc calc; //具体通过哪个子类来实现

    public MyHandler(ICalc calc) {
        this.calc = calc;
    }

    //三个参数分别对应：代理对象，调用的方法，方法传入的参数
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        //在代理中添加日志
        System.out.println(method.getName() + " method start, arguments is " + Arrays.toString(args));
        Object res = method.invoke(calc, args);//用哪个类实例来执行，传入哪些参数
        System.out.println("result is " + res.toString());
        return res;
    }
}

public class App {
    public static void main(String[] args) {
        CalcImpl calc = new CalcImpl();
        //通过代理对象创建指定对象(ICalc对象)
        ICalc c = (ICalc) Proxy.newProxyInstance(
                App.class.getClassLoader(), new Class[]{ICalc.class}, new MyHandler(calc));

        c.add(1,3); //会执行代理对象的invoke方法，并将放发和参数传入
    }
}
