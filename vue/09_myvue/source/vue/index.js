
import {initState} from './Observe/Observe'
function Vue(options){
    this.$options = options;
    this._init(options);
}
Vue.prototype._init = function(){
    const vm = this;
    initState(vm);
}


export default Vue;