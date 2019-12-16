package reflection;

import org.junit.Test;

import java.util.Random;

public class NewInstanceTest {

    //反射的动态性
    @Test
    public void test1() throws Exception {
        for (int i = 0; i < 10; i++) {
            String classPath = new Random().nextBoolean() ? "java.lang.Object" : "java.util.Date";
            ClassLoader classLoader = NewInstanceTest.class.getClassLoader();
            Class clazz = classLoader.loadClass(classPath);
            Object obj = clazz.newInstance();
            System.out.println(obj);
        }
    }
    @Test
    public void test2() throws ClassNotFoundException {
        //获取类的Class实例的四种方式
        //1.
        Class clazz1 = Person.class;
        //2.
        Class clazz2 = new Person().getClass();
        //3
        Class clazz3 = Class.forName("reflection.Person");
        //4
        ClassLoader loader = NewInstanceTest.class.getClassLoader();
        Class clazz4 = loader.loadClass("reflection.Person");
        //
        System.out.println(clazz1 == clazz2);
        System.out.println(clazz3 ==clazz4);
    }
}
