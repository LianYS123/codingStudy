- 自动化工具
git/svn
gulp
webpack

- 版本控制
U盘 -> 付费(CVS) -> 开源(SVN) -> 分布式(git)

方便
追溯
合并冲突
安全性

SVN: 集中式,唯一的最新版
Git: 分布式,每个客户端都是服务器，很多个最新版

gitignore node

管理 => svn开开来

1. checkout
2. commit
3. update
4. 冲突

git clone 地址 目录
git add .
git commit
git push
git pull
git mergetool 合并工具

linux
yum 包管理器
yum install xxx
vi/vim

svn和git服务器
1. svn的服务端 subversion
yum install subversion
2. 创建目录
创建目录：mkdir /svn/
cd /svn
3.
svnadmin create /svn/test1 在svn下面创建仓库

4.
vim conf/passwd
vim conf/svnserve.conf
anon-access = none
auth-access = write
password-db = passwd
authz-db = authz 关了
svnserve -d -r /svn/test1/   参数-d守护模式，自动重启  -r指定根目录

5. 关了防火墙
iptables -F 清除防火墙  
iptables -L 查看



1. yum install git -y
mkdir /git
cd /git
2. git init --bare test.git
3. useradd lian 添加一个系统用户
passwd lian 添加密码
4. chown -R lian:lian 递归 第一人名，第二个组名 修改所有者

5. git clone 用户名@服务器:/目录/仓库.git [到哪]
git clone lian@192.168.....:/git/test.git test2

gulp: 合并、编译、压缩等
简单
webpack: 合并、编译、压缩等
强大


安装gulp
>npm i -g gulp 启动器
>npm i gulp    核心库
cnpm i gulp-uglify 压缩
```javascript
gulp.task('js', () => {
    return gulp.src(['./src/js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'))
})
gulp.task('default',['js'])
```
