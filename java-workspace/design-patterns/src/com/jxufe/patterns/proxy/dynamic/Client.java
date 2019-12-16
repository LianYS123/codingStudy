package com.jxufe.patterns.proxy.dynamic;

public class Client {
    public static void main(String[] args) {
        //创建代理
        TeacherDao teacherDao = new TeacherDao();  //创建要代理的对象
        ProxyFactory proxyFactory = new ProxyFactory(teacherDao); //通过要代理的对象创建代理工厂
        ITeacherDao proxyInstance = (ITeacherDao) proxyFactory.getProxyInstance(); //通过代理工厂创建代理

        //使用代理
        proxyInstance.teach();
    }
}
