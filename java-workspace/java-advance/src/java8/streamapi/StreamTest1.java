package java8.streamapi;

import org.junit.Test;

import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class StreamTest1 {
    //创建方式
    //list.stream()
    @Test
    public void test1(){
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
        Stream<Integer> stream = list.stream();
        stream.forEach(i -> System.out.println(i));
    }
    //Arrays.stream()
    @Test
    public void test2(){
        IntStream stream = Arrays.stream(new int[]{1, 2, 3, 4, 5});
        stream.forEach(System.out :: println);
    }
    //Stream.of()
    @Test
    public void test3(){
        Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5, 6);
        stream.forEach(System.out :: println);
    }
    //Stream.iterator()
    @Test
    public void test4(){
        Stream<Integer> iterate = Stream.iterate(0, t -> t + 2);
        Stream<Integer> limit = iterate.limit(100);
        limit.forEach(System.out::println);
    }
}
