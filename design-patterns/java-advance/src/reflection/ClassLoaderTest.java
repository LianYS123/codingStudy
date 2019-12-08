package reflection;

import org.junit.Test;

public class ClassLoaderTest {
    @Test
    public void test1() throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        ClassLoader loader1 = ClassLoaderTest.class.getClassLoader();
        System.out.println(loader1);
        ClassLoader loader2 = loader1.getParent();
        System.out.println(loader2);
        System.out.println("扩展类加载器的上一层：" + loader2.getParent()); //null 无法获取引导类加载器
        System.out.println("String的类加载器："+String.class.getClassLoader());//null String的核心类库的加载器是引导类加载器
        Class clazz = loader1.loadClass("reflection.Person");
        Person person = (Person) clazz.newInstance();
        person.age = 18;
        System.out.println(person);
    }
}
