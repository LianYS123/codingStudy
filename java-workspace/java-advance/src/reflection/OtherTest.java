package reflection;

import org.junit.Test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

public class OtherTest {
    //获取构造器：
    @Test
    public void test1() {
        Class<Person> clazz = Person.class;
        Constructor[] constructors = clazz.getConstructors(); //获取public 构造器
        for (Constructor constructor : constructors) {
            System.out.println(constructor);
        }
        System.out.println();
        Constructor[] constructors1 = clazz.getDeclaredConstructors(); //获取所有权限构造器
        for (Constructor constructor : constructors1) {
            System.out.println(constructor);
        }
    }

    //获取父类
    @Test
    public void test2(){
        Class<Person> clazz = Person.class;
        Class<? super Person> superclass = clazz.getSuperclass();//获取父类
        System.out.println(superclass.getName());
        Type genericSuperclass = clazz.getGenericSuperclass();//获取带泛型的父类
        System.out.println(genericSuperclass);
    }
    //获取运行时类的泛型
    @Test
    public void test3(){
        Class<Person> clazz = Person.class;
        ParameterizedType genericSuperclass = (ParameterizedType)clazz.getGenericSuperclass();//获取带泛型的父类
        Type[] arguments = genericSuperclass.getActualTypeArguments();
        System.out.println(arguments[0].getTypeName());
    }
    //获取运行时类实现的接口
    @Test
    public void test4(){
        Class<Person> clazz = Person.class;
        Class<?>[] interfaces = clazz.getInterfaces();
        for (Class<?> anInterface : interfaces) {
            System.out.println(anInterface.getName());
        }
    }
    //获取运行时类所在的包
    @Test
    public void test5(){
        Class<Person> clazz = Person.class;
        Package pack = clazz.getPackage();
        System.out.println(pack);
    }
    //获取运行时类声明的注解
    @Test
    public void test6(){
        Class<Person> clazz = Person.class;
        for (Annotation annotation : clazz.getAnnotations()) {
            System.out.println(annotation);
        }
    }
}
