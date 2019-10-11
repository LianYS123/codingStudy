
- 1.assert 断言：
- 2.path
  路径
  path.dirname();
  path.extname();
  path.basename();
  path.reslove(); 解析路径

  __dirname 魔术变量，当前路径文件夹路径

- 3.url
 url.parse(); 解析url网址

- 4.querystirng
  (用法跟JSON.parse()和stringify()类似)
 .parse()          query 转 json
 .stringify()      json 转 query

- 5.net --网络通信


    OSI七层参考模型：
    物理层 -> 链路层- > 网络层（ip）-> 传输层 (TCP) -> 会话层 -> 表现层 -> 应用层(http)
    
    5层模型
    物理层 -> 链路层 -> 网络层（ip）-> 传输层 (TCP) -> 应用层(http)

net是对传输层的一个实现
