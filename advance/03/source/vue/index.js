
class Vue {
    constructor(options){
        this.$options = options;
        this.$data = options.data;
        this.observe(this.$data);
        this.proxyData();
        if(typeof options.create === 'function'){
            options.create.call(this);
        }
    }
    //将对象value中的所有属性(包括嵌套属性)创建代理和依赖
    observe(value){
        if(value && typeof value === 'object'){
            Object.keys(value).forEach(key => {
                this.defineReactive(value, key, value[key]);
            })
        }
    }
    //将data中的数据代理到vm上
    proxyData(){
        Object.keys(this.$data).forEach(key => {
            Object.defineProperty(this, key, {
                get(){
                    return this.$data[key];
                },
                set(newVal){
                    this.$data[key] = newVal;
                    
                }
            })
        })
    }
    defineReactive(obj,key,value){
        //创建监听：依赖收集
        new Dep();
        Object.defineProperty(obj, key,{
            get(){
                console.log('获取数据:',key);
                Dep.target && dep.addDep(Dep.target)
                return obj[key];
            },
            set(newVal){
                console.log('设置数据',key,value,' -> ',newVal)
                value = newVal;
                dep.notify();  //通知，实现响应式的关键
            }
        })
        this.observe(obj[key]);  //递归
    }
}

export default Vue;