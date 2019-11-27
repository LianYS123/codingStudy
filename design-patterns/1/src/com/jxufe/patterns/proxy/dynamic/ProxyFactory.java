package com.jxufe.patterns.proxy.dynamic;

import java.lang.reflect.Proxy;

public class ProxyFactory {
    private ITeacherDao target;

    public ProxyFactory(ITeacherDao target) {
        this.target = target;
    }

    public Object getProxyInstance() {
        //事件处理对象，由这个对象的invoke真正执行要执行的内容
        return Proxy.newProxyInstance(  //使用这个方法获取代理对象
                target.getClass().getClassLoader(),   //需要类加载器
                target.getClass().getInterfaces(),       //需要知道要获取谁的代理对象，传入接口的字节码数组
                (proxy, method, args) -> {
                    System.out.println("开始代理");
                    Object result = method.invoke(target, args);//执行方法：java方法无法独立存在，给他指定对象
                    System.out.println("代理结束");
                    return result;  //将代理的结果返回
                });
    }
}
