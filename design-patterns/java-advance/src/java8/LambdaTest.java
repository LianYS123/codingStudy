package java8;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class LambdaTest {
    @Test
    public void test(){
        List<String> list = Arrays.asList("天津", "东京", "南京", "北京", "普京", "西京");
        List<String> filter = filter(list, s -> s.contains("京"));
        System.out.println(filter);
    }
    public List<String> filter(List<String> list, Predicate<String> pre) {
        List<String> filterList = new ArrayList<>();
        for (String s : list) {
            if(pre.test(s)){
                filterList.add(s);
            }
        }
        return filterList;
    }
}
