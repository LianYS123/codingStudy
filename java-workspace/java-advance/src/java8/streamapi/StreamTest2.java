package java8.streamapi;

import org.junit.Test;

import java.util.Arrays;
import java.util.List;

public class StreamTest2 {
    @Test
    public void test1(){
        List<Employee> employees = Employee.getEmployees();
//        filter(Predicate p).forEach();
        employees.stream().filter(e -> e.getSalary() > 6000).forEach(System.out :: println); //打印工资高于6000的员工
        System.out.println();
//        limit() 截断流,使其元素不超过指定数量
        employees.stream().limit(3).forEach(e -> System.out.println(e)); //打印前三个员工
        System.out.println();
//        skip() 跳过元素,跳过指定个数元素
        employees.stream().skip(3).forEach(System.out::println); //打印除了前三个员工之外的员工
        System.out.println();
//        distinct() 筛选,去除重复元素，根据equals()和hashCode()
        Employee emp = new Employee("雷军", 30, 3888);
        employees.add(emp);
        employees.add(emp);
        employees.stream().distinct().forEach(System.out :: println); //去重
    }
    //映射：
    @Test
    public void test2(){
        List<Employee> employees = Employee.getEmployees();
        employees.stream().map(e -> e.getName() + ":" + e.getSalary()).forEach(System.out :: println); //打印所有员工的工资
    }
    //排序：
    @Test
    public void test3(){
        List<Employee> employees = Employee.getEmployees();
        employees.stream().sorted().forEach(System.out :: println); //排序并打印
        System.out.println();
        employees.stream().sorted((e1,e2) -> e1.getAge() - e2.getAge()).forEach(System.out :: println);//按年龄排序
    }

}
