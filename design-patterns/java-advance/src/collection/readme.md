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
HashSet: Set接口的主要实现类，线程不安全，可以存储null     HashSet底层调用HashMap
    ->LinkedHashSet:HashSet的子类，可以按照添加的顺序遍历，
        在添加数据的同时，还维护了两个引用，记录了次数据前一个数据和后一个数据
        对于频繁的遍历操作效率更高
TreeSet: 放入TreeSet的对象必须是同一个类new的：可以按照添加对象的指定属性进行排序
TreeSet中，比较两个对象是否相同的标准为:compareTo()返回不为0
TreeSet创建时可以传入一个比较器

一致性：相等的对象要有相等的哈希值：同时重写hashCode()和equals()方法

Map：内部使用Entry存储数据,Entry里面有key和value
存储在Map中的key要重写equals()和hashCode(),value要重写equals()方法
HashMap:作为Map的主要实现类，线程不安全，效率高；可以存储null的key或value
底层：数组+链表(jdk7) 数组+链表+红黑树(jdk8) 加载因子：数组填满多少个开始扩容
当put的数据key相同时，会将原来的value替换成新value
    --LinkedHashMap：可以按照添加顺序来遍历(添加了一对指针用于记录前一个和后一个)，对于频繁的遍历操作用LinkedHashMap
TreeMap:保证按照添加的key-value进行排序，实现排序遍历，根据key进行排序--->底层属于红黑树
    TreeMap的key必须是同一个类生成的对象，因为要进行排序(自然排序或定制排序)
Hashtable:线程安全：效率低，不可以存储null的key或value，即使用到线程安全问题也不用它，用Collections类将HashMap变成相乘安全的
    |----properties:常用来处理配置文件，key和value都是String类型(注意)
    props.load(file);
    props.getProperty(key); 返回value

Map里的常用方法
put()
putAll(map)
remove(obj) 返回value
clear() 清空
get(key) 根据key取value
containsKey(key) 是否包含指定的key
containsValue(value) 是否包含指定的value
isEmpty() 是否为空
遍历方法：(没有迭代器)
keySet() 返回所有的key构成的Set
values() 返回所有的value构成的Collection
entrySet() 所有的Entry(key-value)构成的Set

Collections:工具类(用于操作Set,List,Map等集合)
reverse(list) 反转List
shuffle(list) 随机排列
sort(list,comparator) 排序，第二个参数可选
swap(list,1,2) 交换，集合中两个元素位置交换
copy(dest,src) 如果目标dest的size比src小，会报错，先将dest初始化一下Arrays.asList(new Object[src.size()])
frequency(list,obj) 返回obj在集合中出现的次数
synchronizedList(list)/synchronizedMap(map) 将一个集合/Map变成线程安全的

泛型必须是类，不能是基本数据类型
如果实例化时没有用泛型，默认为Object类型
子类继承泛型父类：
    继承时指明泛型为Integer：A extends B<Integer>,那么子类不是一个泛型类
    继承时保留泛型：ArrayList<T> extends AbstractList<T>，则子类也是一个泛型类
泛型类可以有多个参数，中间用逗号隔开 A<E1,E2,E3>
泛型不同的引用不能相互赋值:ArrayList<Integer> list1;  ArrayList<String> list2;
静态方法中不能用泛型
异常类不能是泛型类
造泛型数组 new T[] 编译不通过，  使用这种方法 (T[])new Object[] 编译通过
通配符：
泛型的通配符：List<?> list = null; ?就是通配符，相当于List<String> 和List<Integer>等的公共父类
对于List<?>不能向里面添加数据，除了null，允许读取数据，读取的类型是Object
有限制条件的通配符 
    ? extends Person, 类似 <= Person  可以被List<Person> List<Student> 的对象赋值
    ? super Person,   类似 >= Person  同理

泛型方法：泛型参数与类的泛型参数不同(泛型方法所属的类可以不是泛型类)
声明：public <E> List<E> toList(E[] arr){}
泛型方法可以是静态方法

泛型的用处
DAO:database access object









