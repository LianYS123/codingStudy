//dependency  依赖
export class Dep{
    deps = [];
    constructor(){

    }
    addDep(dep){
        this.deps.push(dep);
    }
    notify(){
        this.deps.forEach(dep => dep.update())
    }
}

//
export class Watcher{
    constructor(vm,key,cb){
        this.vm = vm;
        this.key = key; 
        this.cb = cb;  //回调函数
        Dep.target = this;
        vm[key];
        Dep.target = null;
    }
    update(){
        console.log('视图更新')
    }
}