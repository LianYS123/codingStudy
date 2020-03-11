import Observer from '.';
export function initState(vm){
    let opts = vm.$options;
    if(opts.data){
        initData(vm);
    }
    if(opts.computed){
        initComputed(vm);
    }
}
export function observe(data){
    //不是数据就返回,也是递归监听的终止条件
    if(typeof data !== 'object' || data === null) return;
    return new Observer(data);
}
function proxy(vm,key){
    Object.defineProperty(vm,key,{
        get(){
            return vm._data[key];
        },
        set(newVal){
            return vm._data[key] = newVal;
        }
    })
}
function initData(vm){
    let data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? data.apply(vm) : {};
    Object.keys(data).forEach(key => proxy(vm,key))
    observe(data);
}
function initComputed(){

}