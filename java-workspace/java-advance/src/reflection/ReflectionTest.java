package reflection;

import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class ReflectionTest {
    //操作运行时类指定的属性
    @Test
    public void test1() throws Exception {
        Class<Person> clazz = Person.class;
        Person person = clazz.newInstance();
//        Field age = clazz.getField("age"); 获取共有属性
        Field age = clazz.getDeclaredField("age");
        Field name = clazz.getDeclaredField("name");
        age.setAccessible(true); //设置访问权限
        name.setAccessible(true);
        System.out.println(age);
        name.set(person,"lian");
        age.set(person,18);
        System.out.println(person);
    }
    //调用指定类的方法
    @Test
    public void test2() throws Exception {
        Class<Person> clazz = Person.class;
        Person person = clazz.newInstance();
        Method showNation = clazz.getDeclaredMethod("showNation", String.class);
        System.out.println(showNation);
        Object nation = showNation.invoke(person, "china");
        System.out.println(nation);

        System.out.println("*************");
        //调用静态方法
        Method staticMethod = clazz.getDeclaredMethod("staticMethod", String.class);
        Object returnVal = staticMethod.invoke(null, "arg"); //没有返回值，invoke返回null
        System.out.println(returnVal);
    }
    //调用指定构造器
    @Test
    public void test3() throws Exception {
        Class<Person> clazz = Person.class;
        Constructor<Person> constructor = clazz.getDeclaredConstructor(String.class, int.class);
        constructor.setAccessible(true);
        Person person = constructor.newInstance("lian", 18);
        System.out.println(person);
    }
}
