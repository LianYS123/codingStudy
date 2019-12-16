package java8.optional;

import org.junit.Test;

import java.util.Optional;

public class OptionalTest {
    @Test
    public void test(){
        String girlName = getGirlName(new Boy(new Girl("汤唯")));
        System.out.println(girlName);
    }
    public String getGirlName(Boy boy){
        Boy boy2 = Optional.ofNullable(boy).orElse(new Boy(new Girl("没有该男孩")));
        Girl girl = Optional.ofNullable(boy2.getGirl()).orElse(new Girl("该男孩没有女朋友"));
        return girl.getName();
    }
}
