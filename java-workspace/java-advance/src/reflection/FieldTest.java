package reflection;

import org.junit.Test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.Arrays;

public class FieldTest {
    @Test
    public void test1(){
        Class clazz = Person.class;
        Field[] fields = clazz.getFields();//获取当前类极其父类的所有public修饰的方法
        for(Field f : fields) {
            System.out.println(f);
        }
        System.out.println("*******************");
        Field[] fields1 = clazz.getDeclaredFields();//获取当前类的所有权限的所有方法(不包括父类）
        for(Field f : fields1) {
            System.out.println(f);
        }
    }
    @Test
    public void test2(){
        Class clazz = Person.class;
        Field[] fields = clazz.getDeclaredFields();
        for(Field field : fields){
            Annotation[] annos = field.getDeclaredAnnotations();
            if(annos.length > 0){
                System.out.println(Arrays.toString(annos));
            }
            int modifiers = field.getModifiers();
            System.out.print(Modifier.toString(modifiers)+"\t");
            Class type = field.getType();
            System.out.print(type.getName()+"\t");
            String name = field.getName();
            System.out.print(name);
            System.out.println();
        }

    }
}
