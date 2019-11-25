package com.jxufe.principle.CompositeAggregateReuse;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
//组合优于继承：如果父类作者和子类作者不是一个人，就别继承(别随便继承别人的类)
//需求，制作一个集合，统计该集合曾经加过多少个元素。
class MySet { //不要因为需要Set的一些方法而使用继承，因为继承可能会引发一系列问题
    private Set set = new HashSet(); //这里使用关联(组合或聚合)
    private int count = 0;
    public boolean add(Object obj){
        this.count ++;
        return set.add(obj);
    }
    public boolean addAll(Collection c){
        this.count += c.size();
        return set.addAll(c);
    }

    public int getCount() {
        return count;
    }
}
public class App {
    public static void main(String[] args) {
        MySet set = new MySet();
        set.add("hello");
        set.add("world");

        Set set2 = new HashSet();
        set2.add("1");
        set2.add("2");
        set2.add("3");

        set.addAll(set2);

        System.out.println(set.getCount());
    }
}
