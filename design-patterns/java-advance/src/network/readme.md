OSI参考模型(七层)：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层
TCP/IP参考模型(四层)：应用层、传输层、网络层、物理+数据链路层

使用InetAddress类来代表IP
InetAddress.getByName("")，传入地址或域名 
两个常用方法：
getHostName() / getHostAddress()

Socket:网络套接字(端口号和IP共同构成)
TCP:三次握手，可靠地，效率低
UDP:不可靠，效率高，无需释放资源
socket = new Socket(InetAddress ip,port);端口号最大65535
os = socket.getOutputStream()
os.write()


ss = new ServerSocket(8899);
ss.accept();
is = socket.getInputStream();
baos = new ByteArrayOutputStream()
baos.write(buffer,0,len);
baos.toString()

socket.shutdownOutput() 关闭数据输出

UDP:
发送：
DatagramSocket socket
DatagramPacket packet = new DatagramPacket(data,0,data.length，inet,port) 数据
socket.send(packet);
socket.close();

接收：
socket = new DatagramSocket(port)
packet = new DatagramPacket(buffer,0,buffer.length);

socket.receive(packet);
sout(new String(packet.getData(),0,packet,getLength()))


URL：同意资源定位符，对应网上某一个资源的地址
格式：协议+主机名+端口号+资源地址+参数列表
URL url = new URL(String spec)
url.getProtocol() 获取协议名
...
conn = url.openConnection()获取连接  可以强转成(HttpURLConnection)
conn.getInputStream() 获取流
conn.disConnect() 断开连接

main方法路径对应项目(Module)下，和Test方法不一样











