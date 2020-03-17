import Vue from 'vue'
//可以管理是否后退的History api
const Histroy = {
    _history : [],
    push(path){
        this._history.push(path);
    },
    pop(){
        return this._history.pop();
    },
    canBack(){
        return this._history.length > 0;
    },
    install(){
        Vue.prototype.$history = this;
    }
}
export default Histroy;
