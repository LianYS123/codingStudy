
File类：代表一个对象或目录
构造器(不需要硬盘中有对象，仅相当于内存层面的对象)：
new File(filename); filename:相对路径,相对于当前工程下(当前module下)
    filename:
    \有转义的意思，用\\
    window或dos中用\,unix或url中用/
File(String pathParent,String child)
File(File parent,String child)

方法：
getAbsolutePath()获取绝对路径
getPath() 获取路径:路径+名称
getName() 获取名称
getParent() 获取上层文件目录，根据构造器传入的文件名获取
length()  返回字节数
lastModified() 最近修改时间，返回时间戳

适用于文件目录的两个方法：
list() 返回当前目录下文件或目录的string数组
listFiles() 返回当前目录下文件或目录的File数组

source.renameTo(File dest)  把文件重命名到指定的路径，返回是否成功
    要保证返回true，要保证source存在，dest不存在
isDirectory() 是否是目录
isFile() 是否是文件
exists() 是否存在
canRead() 是否可读
canWrite() 是否可写
isHidden() 是否隐藏

创建相关的方法：
createNewFile():创建文件，如果存在，创建失败，返回false
mkdir()：创建目录，如果存在，就不创建，返回是否创建成功
mkdirs()：创建目录，如果上级目录不存在，一并创建，返回是否创建成功

File类中的方法，未涉及到文件读取和写入内容的方法

抽象基类：InputStream,OutputStream,Reader,Writer
节点流(文件流)：FileInputStream,FileOutputStream,FileReader,FileWriter
处理流(外面包的一层)
缓冲流(处理流的一种)：BufferedInputStream,BufferedOutputStream,BufferedReader,BufferedWriter

FileReader:
new FileReader(file/filename)
方法：
read() 读取一个字符，文件一定要存在，不然会报FileNotFoundException
read(char[] chars) 返回每次读入到chars数组的字符个数，如果读到文件末尾，返回-1
    注意：遍历时，不要用chars.length, 用read()方法返回的个数
close() 关闭流 ：物理上的连接，如io流等要手动关闭连接

FileWriter：
new FileWriter(file,true) ：第二个参数为是否append，默认为false
write() 可以写char数组，字符串
    注意：文件不需要存在(会自动创建)，写入时会覆盖原有文件
    不能用字符流来处理图片文件
    
InputStream、OutputStream用法与文本流类似，也有read和write方法
处理文本文件用Reader、Writer，处理视频等二进制文件用InputStream、OutputStream

BufferedInputStream/BufferedOutputStream 缓冲流，常用
new BufferedInputStream(new InputStream(file))
具体用法和之前相同，也是用read方法传入一个byte数组
缓冲流内部提供了一个缓冲区，默认大小为8192(8k),可以提高速度
提供了一个flush()方法，将缓冲区的数据写入文件，一般不用主动调用

BufferedReader、BufferedWriter：文本流的缓冲流
多了一个方法：readLine()读取一行(不包含换行符)，读取到结尾返回null
newLine() 这个方法相当于加了一个换行符

转换流(也是一种处理流)：提供了字节流和字符流的转换
这两个流属于字符流
InputStreamReader 将一个字节的输入流转换为字符的输入流 (解码)  字节、字节数组 ---->  字符数组、字符串
OutputStreamWriter 讲一个字符的输出流转换为字节的输出流(编码)  字符数组、字符串 ----> 字节、字节数组
new InputStreamReader()  //不带参数会使用系统默认的字符集

常见的字符集：
ASCII: 美国标准信息交换码
ISO8859-1:拉丁码表，欧洲码表
GB2312:中国的中文编码表，最多两个字节编码所有字符（也有可能是一个字符）（兼容ASCII码）
    一个字符八位，首尾是0，表示一个字节表示的字符。首尾是1，表示
GBK:中国的编码升级，融合了更多中文文字符号，最多两个字节编码
Unicode：融合了世界上目前人类使用的所有字符（不完美）
UTF-8:1-4个字节表示一个字符
ANSI:平台默认编码：英文操作系统是ISO8859-1，中文操作系统是GBK

标准输入输出流
System.in:标准输入流，默认从键盘输入
System.out:标准输出流，默认从控制台输出
可以通过System.setIn(InputStream is)和System.setOut(PrintStream ps)从新设置输入和输出流

打印流：PrintStream、PrintWriter
提供了一系列重载的print()和println()方法

数据流：DataInputStream和DataOutputStream
用于读取写出基本数据类型的变量或字符串
writeUTF()/WriteInt()/writeBoolean() 将字符串、基本数据类型等写入到文件里
flush()将内存中的文件写入文件
readUTF()... 读取数据，注意：读取的顺序要与写入的顺序相同

对象流：
ObjectInputStream:序列化
ObjectOutputStream:反序列化
序列化过程：将内存中的java对象保存到磁盘中，通过网络传输出去
oos.writeObject(obj)
oos.flush()
要求：
1. 要是一个对象可序列化，要实现Serializable接口
2. 需要提供一个全局静态常量...versionID, 为了识别到底哪个类，
    不加的话，系统会自动生成一个id，在类被修改时还原文件中的对象可能会出问题
3. 当前类内部的所有属性都必须是可序列化的(基本数据类型默认都是可序列化的)
补充：序列化和反序列化不能操作transient和static修饰的变量

随机存取文件流
RandomAccessFile
直接继承于Object，实现了DataInput和DataOutput
既可以作为输入流，也可以作为输出流
new RandomAccessFile(filename,mode) 直接传一个文件名或File对象,mode:"r"：只读,"rw"：读写,  "rwd","rws"
如果文件已存在，会对原有文件部分内容覆盖（不是对整个文件覆盖，也不是追加），默认从头开始覆盖
write("abc".getBytes())
seek(long pos) 调整指针位置，从哪个字符开始覆盖

ByteArrayOutputStream

NIO:基于缓冲区，更高效的文件操作
实际开发中用的包：commons-io.jar:第三方包























