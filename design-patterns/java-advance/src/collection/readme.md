Collection接口：单列接口，存储一个一个的对象
子接口：
List：有序的，可以重复的集合：动态数组
Set：无序的，不可重复的集合：类似高中讲的“集合”
Map接口:双列集合，用来存储一对(key - value) 一对数据：键值对

Collection的方法：
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
    while(iterator.hasNext()){
        iterator.next()
        //iterator.remove()移除当前元素
    }
 
List：
ArrayList:线程不安全的，效率高，底层用Object[]数组存储
    调用空参构造器默认容量是10，
    扩容：将原来的数据添加到新的数组中，扩容大小是原来的1.5倍
    方法:
        add(index,obj)在指定索引插入
        indexOf(obj) 返回obj在集合首次出现的位置,找不到返回-1
        lastIndexOf(obj)
        remove(index)根据索引删元素，返回删除的元素
        set(index,obj)更改(设置)指定索引的元素
        subList(int fromIndex,int toIndex)返回从fromIndex到toIndex的子集合
    
LinkList:底层使用双向链表：对于频繁的插入和删除操作，使用此类效率高
Vector:古老的实现类，不怎么用：线程安全的，效率低，底层用Object[]数组存储

Set:
1.无序性：不等于随机性
存储的数据在底层数组中并非按照数组的索引添加，而是根据哈希值添加
2.不可重复性：保证添加的元素不可重复
添加的元素用equals()判断是不能为true
3.添加元素的过程：
    通过hashcode()方法计算hash值，
    通过hash值计算存放位置，
    判断此位置是否已经有元素，
        如果没有元素，则添加成功，以数组方式存放
        如果此位置有其他元素，首先比较hash值，如果不相同，添加成功，如果相同，比较equals方法，如果false，添加成功
            以链表方式放入新元素
Set里面没有添加新的方法了，就用Collection的方法就够了
HashSet: Set接口的主要实现类，线程不安全，可以存储null
    ->LinkedHashSet:HashSet的子类，可以按照添加的顺序遍历，
        在添加数据的同时，还维护了两个引用，记录了次数据前一个数据和后一个数据
        对于频繁的遍历操作效率更高
TreeSet: 放入TreeSet的对象必须是同一个类new的：可以按照添加对象的指定属性进行排序

一致性：相等的对象要有相等的哈希值：同时重写hashCode()和equals()方法






