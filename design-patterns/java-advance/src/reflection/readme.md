java：静态语言,准动态语言(反射)
java.lang.Class：类，反射的源头
java.lang.reflect.Method: 代表类的方法
java.lang.reflect.Filed: 代表成员变量
java.lang.reflect.Constructor: 代表构造器

通过反射可以调用私有的属性等
反射的特征：动态性

Person.class文件通过java.exe命令加载到内存中，内存中的这个类称作运行时类，就是Class的实例(Class可以加泛型Class<Person>)
加载到内存中的运行时类，会缓存一定时间，在此时间内，可以通过不同的方式获取此运行时类
如何获取Class实例
1. Class clazz = Person.class; 调用运行时类的属性
2. p1.getClass(); 通过运行时类的对象获取
3. Class.forName(String classPath); 指明类的全路径(全类名)
4. Test.class.getClassLoader(); 通过当前类获取类加载器
classLoader.loadClass(classPath);通过类加载器

那些类型可以作为Class的实例
class：类
interface：接口
[]：数组
enum：枚举
annotation：注解
primitive type: 基本数据类型
void

只要数组的元素类型和维度一样，就是同一个Class
new int[10].class == new int[20].class;  true

对于自定义类，都是使用系统类加载器加载的：
classLoader = Test.class.getClassLoader(); 获取系统类加载器
classLoader.getParent(); 获取扩展类加载器
无法获取引导类加载器，负责加载java核心类库(String等)

使用类加载器获取文件流
InputStream is = classLoader.getResourceAsStream("jdbc.properties); 文件默认位置在module的src下

通过反射创建对应的运行时类对象
clazz.newInstance(); 内部调用的是空参构造器，如果没有空参构造器或构造器私有就会报错

动态性例子：
String classPath = new Random().nextInt(2) == 0 ? "java.lang.Object" : "java.util.Date"

属性：权限修饰符 数据类型 变量名
clazz.getFields() 获取当前类及其父类所有的public权限的属性
clazz.getDeclaredFields() 获取当前类任何权限的属性（不包含父类中的属性）
field.getModifiers(); 获取权限修饰符，返回int: 默认0，private 1, public 2 使用Modifier.toString(int i)返回private等
Class type = field.getType(); 获取类型 type.getName()
String name = f.getName(); 具体变量名 
方法：权限修饰符 返回值类型 方法名(参数类型1 形参1,...) throws XxxException{}
clazz.getMethods() 获取当前类及其父类所有的public权限的方法
clazz.getDeclaredMethods() 获取当前类任何权限的方法（不包含父类中的属性）
method.getAnnotations() 获取注解
method.getModifiers() 获取修饰符
method.getReturnType() 获取返回值类型
method.getName() 获取方法名
method.getParameterTypes(); 
method.getExceptionTypes()

框架：注解+反射+设计模式

获取构造器：
clazz.getConstructors() 获取当前运行时类声明为public的构造器
clazz.getDeclaredConstructors() 获取当前运行时类中声明的所有构造器
获取运行时类的父类：
clazz.getSuperClass() 获取父类
clazz.getGenericSuperClass() 获取带泛型的父类
获取运行时类的父类的泛型：
paramType = (ParameterizedType)clazz.getGenericSuperClass()
paramType.getActualTypeArguments() 获取运行时类的父类的泛型
获取运行时类实现的接口：
clazz.getInterfaces() 
获取运行时类所在的包：
clazz.getPackage()
获取运行时类声明的注解：
clazz.getAnnotations()

调用运行时类中指定的结构
操作运行时类指定的属性
field = clazz.getField(fieldName) 获取指定public权限的属性：通常不采用此方法
field = clazz.getDeclaredField(fieldName) 获取指定任意权限的属性
field.setAccessible(true) 保证当前属性是可访问的
field.set(obj,value) 给指定对象的这个属性赋值
field.get(obj) 获取指定对象的这个属性
调用运行时类指定的方法
method = clazz.getDeclaredMethod(name,type)：参数1:方法名称，参数2:方法形参列表
method.setAccessible(true)
obj = method.invoke(obj,args) 参数1：调用者，参数2：实参列表, 返回值：类中方法的返回值
obj = method.invoke(clazz/null) 调用静态方法,如果没有返回值，invoke()返回null
调用运行时类中的构造器
constructor = clazz.getDeclaredConstructor(type.class)  指明形参列表
constructor.setAccessible(true)
constructor.newInstance(args) args:实参

