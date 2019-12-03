package enum_annotation;

import java.lang.annotation.*;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Inherited
@Documented
public @interface AnnotationTest {
    String value() default "hello"; //不是方法，是属性
}
