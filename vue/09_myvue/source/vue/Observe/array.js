
import {observe} from './Observe'
let methods = ['push','pop','shift','unshift','splice','reverse','sort'];

let oldArrayProto = Array.prototype;
let ArrayProto = Object.create(oldArrayProto);
methods.forEach(method => {
    ArrayProto[method] = function(...args){
        let res = oldArrayProto[method].apply(this,args);
        switch(method){
            case 'push':
            case 'unshift':
                ObserveArray(args);
                break;
            case 'splice':
                ObserveArray(args.slice(2))
                break;
        }
        return res;
    }
})
function ObserveArray(arr){
    arr.forEach(item => {
        observe(item);
    })
}
export default ArrayProto;