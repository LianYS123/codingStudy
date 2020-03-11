function Vue(){
    //初始化选项
    this._init(options);
}
//初始化函数
Vue.prototype._init = function(options){
    vm.$options = options;

    //初始化状态
    initState(vm);
    //初始化渲染页面
    if(vm.$options.el){
        vm.$mount();
    }
}
Vue.prototype.$mount = function (){
    vm.$el = document.querySelector(el)
    new Watcher();
}

//Observe.js
initstate(vm){
    //不同的初始化
    vm.$options
    if(opts.data){
        initData();
    },
    if(opts.compted){
        initComputed();
    }
    ...
}
function proxy(vm,source,key){
    Object.defineProperty(vm,key,{
        get(){
            return vm[source][key];
        },
        set(newValue){
            return vm[source] = newValue;
        }
    })
}
initData(vm){
    //初始化数据
    data = vm._data = typeof data == function ? data.call(vm) : {};
    //将data加到vm上，并代理
    Object.keys(data).forEach(key => {
        proxy(vm,'_data',key)
    })
    //监听数据
    observe(data);
}
observe(data){
    //判断是否是数据
    typeof...
    //观察数据的业务逻辑
    return new Observe(data);
}

//observe/index.js
class Observe{
    constructor(data){
        if(Array.isArray(data)){
            //相当于在数组查找原型中间加了一层原型，用于监听获取数据
            Object.setPrototypeOf(data,arrayMethods)
            //每一项实现监听
            observerArray(data);
        }
        this.walk(data);
    }
    walk(data){
        //监听？代理？
        //获取所有的key、value
        Object.keys(data).forEach(key => {
            value = data[key];
            defineReactive(data,key,value)
        })
    }
}
export funtion defineReactive(data,key,value){
    //如果是一个对象，递归监听
    observe(value);
    Object.defineProperty(data,key,{
        get(){

        },
        set(newValue){
            observe(newValue);
        }
    })
}

array.js
重写数组的7个方法
arrayMethods = Object.create(Array.prototype)
methods = push、shift、unshift、pop、reverse、sort、splice
methods.forEach(method => {
    arrayMethods[method] = function(...args){
        let res = Array.prototype[method].apply(this,args)
        //中间实现监听
        //拿到监听的属性
        let inserted;
        //监听所有新增的属性
        switch(method){
            case 'push':
            case 'unshift':
                inserted = args
            case 'splice':
                inserted = args.slice(2)
        } 
        return res;
    }
})
function observerArray(inserted){
    //监听所有数组增属性
    inserted.forEach(arg => {obsert(arg)})
}



