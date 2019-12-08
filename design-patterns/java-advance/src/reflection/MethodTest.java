package reflection;

import org.junit.Test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

public class MethodTest {
    @Test
    public void test1(){
        Class clazz = Person.class;
        for(Method m : clazz.getMethods()) {
            System.out.println(m);
        }
        System.out.println("*****************");
        for(Method m : clazz.getDeclaredMethods()) {
            System.out.println(m);
        }
    }
    public String join(Object[] arr, String str){
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < arr.length; i++) {
            if(i == arr.length - 1) {
                builder.append(arr[i].toString());
            } else {
                builder.append(arr[i].toString() + str);
            }
        }
        return builder.toString();
    }
    @Test
    public void test2(){
        Class clazz = Person.class;
        for(Method m : clazz.getDeclaredMethods()) {
            Annotation[] annotations = m.getDeclaredAnnotations();
            System.out.println(join(annotations," "));

            int modifiers = m.getModifiers();
            System.out.print(Modifier.toString(modifiers) + " ");
            Class type = m.getReturnType();
            System.out.print(type.getName() + " ");
            String name = m.getName();
            System.out.print(name);
            System.out.print("(");
            Class[] parameterTypes = m.getParameterTypes();
            System.out.print(join(parameterTypes,"arg, "));
            System.out.print(")");
            Class[] exceptionTypes = m.getExceptionTypes();
            System.out.print(join(exceptionTypes,","));
            System.out.println();

        }
    }
}
