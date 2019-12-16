package java8.streamapi;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Employee implements Comparable<Employee> {
    private String name;
    private int age;
    private double salary;

    public Employee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public Employee() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Double.compare(employee.salary, salary) == 0 &&
                Objects.equals(name, employee.name) &&
                Objects.equals(age, employee.age);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age, salary);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", age='" + age + '\'' +
                ", salary=" + salary +
                '}';
    }
    public static List<Employee> getEmployees(){
        ArrayList<Employee> employees = new ArrayList<>();
        employees.add(new Employee("马云",88,8000));
        employees.add(new Employee("巴菲特",68,6000));
        employees.add(new Employee("任正非",38,9988));
        employees.add(new Employee("刘强东",43,3366));
        employees.add(new Employee("扎特博格",55,5544));
        employees.add(new Employee("马化腾",33,7788));
        return employees;
    }

    @Override
    public int compareTo(Employee o) {
        return Double.compare(salary,o.getSalary());
    }
}
