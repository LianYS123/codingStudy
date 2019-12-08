package reflection;

import java.io.Serializable;

@MyAnnotation("hi")
public class Person extends Creatrue<String> implements Serializable, MyInterface {
    @MyAnnotation
    private String name;
    public int age;

    public Person() {}

    private Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    @MyAnnotation("hei")
    public void show() throws NullPointerException, ClassCastException{
        System.out.println("我是" + name + "，我今年" + age + "岁了。");
    }
    public String showNation(String nation){
        System.out.println("我来自" + nation);
        return nation;
    }
    public static void staticMethod(String string){
        System.out.println("我是一个静态方法,我的参数是" + string + ",我没有返回值" );
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
