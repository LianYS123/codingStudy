package java8.streamapi;

import org.junit.Test;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class StreamTest3 {
    //终止操作
    //匹配
    @Test
    public void test1(){
        List<Employee> employees = Employee.getEmployees();
        boolean b = employees.stream().allMatch(e -> e.getSalary() > 3000); //是否所有员工的工资都大于3000
        System.out.println(b);
        boolean b1 = employees.stream().anyMatch(e -> e.getSalary() > 10000);//是否有员工工资大于1000
        System.out.println(b1);
        boolean b2 = employees.stream().noneMatch(e -> e.getAge() < 18); //是否没有小于18岁的员工
        System.out.println(b2);

    }
    //匹配
    @Test
    public void test2(){
        List<Employee> employees = Employee.getEmployees();
        System.out.println();
        Optional<Employee> first = employees.stream().findFirst(); //返回第一个元素
        System.out.println(first);
        Optional<Employee> any = employees.parallelStream().findAny(); //返回任意一个元素
        System.out.println(any);
        Optional<Employee> max = employees.stream().max((e1, e2) -> (int) (e1.getSalary() - e2.getSalary())); //返回工资最高的
        System.out.println(max);
        Optional<Employee> min = employees.stream().min((e1, e2) -> (int) (e1.getSalary() - e2.getSalary())); //返回工资最低的
        System.out.println(min);
    }
    //归约
    @Test
    public void test3(){
        List<Employee> employees = Employee.getEmployees();
        Double sum = employees.stream().map(e -> e.getSalary()).reduce(0.0, (s1, s2) -> s1 + s2);//求总工资
        System.out.println(sum);
    }
    //收集
    @Test
    public void test4(){
        List<Employee> employees = Employee.getEmployees();
        List<String> names = employees.stream().map(e -> e.getName()).collect(Collectors.toList());
        System.out.println(names);
    }
}
