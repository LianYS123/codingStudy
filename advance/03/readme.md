发布：
    npm run build 
    下载nginx
    nginx -> config -> nginx.config

    server {
        list 80;
        server_name localhost;

        root [项目打包后的目录]

        location /kcart {
            try_files $uri /kcart/index.html;  # 先找宿主文件，找不到就打开index.html
        }
        location ^~ /api/ {
            proxy_pass http://localhost:3000;   #代理
        }
    }

    启动服务器
    nginx start

后台一般有一个网关：

请求 -> gateway(nginx) -> (node|java|...)


vue原理：

render方法：
h:createElement
render(h){
    return h('table',{attrs:{border:1}})  //元素加属性
}
或者
render(h){
    return <table></table>
}
render返回的是什么？ 虚拟dom树 vnode

编译：
parse:生成AST(抽象语法树)
optimize:优化，标记一些静态节点在diff的时候略过
generate: 将ast转化为render function

class Vue {
    constructor(otpions){
        this.$options = options;

        this.$data = options.data;

        //响应式
        this.observe(this.$data);

        //new Watcher()  //创建Watcher，它会自动将自己加到Dep.target 上
        //this.$data.name  //读取某个属性，读取的时候会
        if(options.created){
            created.call(this);
        }

    }
    observe(value){
        if(!value || typeof value !== 'object'){
            return;
        })
        //遍历对象
        //Object.keys().forEach(key => {
            this.defineReactive(value,key,value[key])
            //代理到vm上
            this.proxyData(key);
        })
    }
    //将数据代理到vm身上
    proxyData(){
        Object.defineProperty(this,key,{
            get(){
                return this.$data[key];
            },
            set(newVal){
                this.$data[key] = newVal
            }
        })
    }
    defineReactive(obj,key,val){
        //每次定义属性都要创建依赖，所以依赖与data中的key (包括data中的对象中的key) 是一一对应的
        let dep = new Dep()  //data中所有的属性都会有一个Dep 依赖收集对象，注意：只在初始化的时候执行
        Object.defineProperty(obj,key,{
            get(){
                //这里类似一个闭包，因为get()函数用到了上面的dep，所以dep不会被销毁，而是与这里的key对应了起来
                Dep.target && dep.addDep(Dep.target)  //将Watcher加到对应的dep中
                return val;
            },
            set(newVal){
                if(newVal ! == val){
                    //更新
                    val = newVal;
                    //通知依赖
                    dep.notify();
                }
            }
        })
    }
}

$data $说明是内部变量，但可以用
$$ 说明不希望用户用

class Dep{
    constructor(){
        this.deps = [];
    }
    addDep(dep){
        this.deps.push(dep);
    }
    notify(){
        this.deps.forEach(dep => dep.update());  //通知所有依赖更新视图
    }
}

class Watcher{
    constructor(vm,key,cb){
        this.vm = vm;
        this.key = key;
        this.cb = cb;

        //依赖收集，在这里将Dep与Watcher关联起来
        //如：username的Dep 可能对应着key=username, cb = nodeUpdate(<div>{{username}}</div>)的Watcher 和其他元素动态变化的watcher
        Dep.target = this;  //每次创建都会把自己加到Dep.target中
        this.vm[this.key];  //读一下vm的key，添加watcher到依赖数组中
        Dep.target = null;
    }
    //接收到属性更新的通知时调用的方法
    update(){
        console.log('属性跟新了')
        //这里回调函数应该传一个事件对象：表示属性更新之后的值
        this.cb.call(this.vm,this.vm[this.key])
    }
}

编译：
compile.js
//new Compile(el,vm);
class Compile{
    constructor(el,vm){
        this.$vm = vm;
        this.$el = document.querySelector(el);

        if(this.$el){
            this.$fragment = this.node2Fragment(this.$el);  //创建一个容器将内容提取出来
            //编译内容、依赖收集
            this.compile(this.$frament);        //进行编译操作
            this.$el.appendChild(this.$fragment)   //将编译完的内容塞回去
        }
    }
    node2Fragment(el){
        const fragment = document.createDocumentFragment();
        let child;
        while(child = el.firstChild){
            fragment.appendChild(child);
        }
        return fragment;
    }
    compile(el){
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            if(node.nodeType === 1){
                // element 节点
                console.log('编译元素节点',node.nodeName)
                this.compileElement(node)
            } else if(this.isInterpolation(node)){
                //是否是插值语句
                console.log('编译差值文本',node.textContent)
                this.compileText(node)
            }
            //递归子节点
            if(node.childNodes && node.childNodes.length > 0){
                this.compile(node);
            }
        })
    }
    isInterpolation(node){
        //是文本且符合{{}}
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
    compileText(node){
        编译文本
        this.update(node,this.$vm,RegExp.$1,'text')
    }
    compileElement(){
        let nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(attr => {
            const attrName = attr.name;  //拿到属性名
            const exp = attr.value;   // 拿到属性值

            //元素属性是事件 @click
            if(this.isEvent(attrName){
                const dir = attrName.substring(1);  得到事件名称
            })
            // 是指令  v-text
            if(this.isDirective(attrName){
                const dir = attrName.substring(2); //得到指令名称
                this[dir] && this[dir](node,ths.$vm,exp);
            })
        })
    }
    isEvent(attr){

    }
    isDirecctive(attr){

    }
    text(node,vm,exp){
        this.update(node,vm,exp,'text')
    }
    //exp:表达式，即{{exp}}或v-dir="exp"中的exp
    //dir: 指令，通过dir+'updator'得到表达式改变后要执行的回调函数
    update(node,vm,exp,dir){
        
        let updatrFn = this[dir + 'Updator'];  //得到exp改变后需要执行的回调函数
        
        //依赖收集
        new Watcher(vm,exp,function(value){  //value为属性更新之后的值
            updateFn && updateFn(node,vm[exp])   //执行回调函数,这里需要更新的节点(依赖)和对应的表达式(如{{username}})绑定了起来   
        })
    }
    textUpdator(node,val){
        //表达式改变后，将node的值赋值为改变后的值
        node.textContent = this.$vm[val];
    }
    eventHandler(node,vm,exp,dir){
        const fn = vm.$options.methods && vm.$optons.methods[exp]   //拿到函数
        if(dir && fn){
            node.addEventListener(dir,fn.bind(vm))
        }
    }
    //v-model双向数据绑定
    model(node,vm,exp){
        //data -> view
        this.update(node,vm,exp,"model");
        //view -> data
        node.addEventListener("input",e => {
            vm[exp] = e.target.value;
        })
    }
    modelUpdater(node,value){
        node.value = value;  //更新
    }
    htmlUpdater(node,value){
        node.innerHtml = value
    }
}

