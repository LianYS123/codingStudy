package collection;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
/*
向Collection接口的实现类的对象添加数据obj时，要求obj要重写equals方法
contains():判断里面有没有，调用equals方法判断
containsAll(Collection coll):判断coll中的所有元素是否都在当前集合中
remove(obj);移除操作，返回是否移除成功
removeAll(coll) 从当前集合中移除coll中的元素(差集)
retainAll() 求交集，将结果给当前集合
toArray() 转换为数组
Arrays.asList(new String[]{}) 数组->集合 返回List类型的集合
    注意Arrays.asList(new int[]{123,456}) 会被认为将一个数组装入集合，要想装入两个整数，使用new Integer[]{123,456}
iterator() 返回迭代器(Iterator接口的实例)，用来遍历集合
 */

public class App {
    @Test
    public void test1(){
        Collection list = new ArrayList();
        list.add(100);
        list.add("test");
        list.add(true);
        System.out.println(list.contains(true));
        list.remove(true);
        System.out.println(list);
        Collection list1 = new ArrayList();
        list1.add("test");
        list1.add(100);
        System.out.println(list.containsAll(list1));
        list.retainAll(list1);
        System.out.println(list);
        System.out.println(Arrays.toString(list.toArray()));
        Iterator iterator = list.iterator();
        while (iterator.hasNext()){
            System.out.println(iterator.next());
        }
    }
}
