import {observe} from './Observe';
import ArrayProto from './array';
export default class {
    constructor(data){
        //如果是数组TODO
        if(Array.isArray(data)){
            Object.setPrototypeOf(data,ArrayProto);
        }
        this.walk(data);
    }
    walk(data){
        //这里的data一定是object
        Object.keys(data).forEach(key => {
            defineReactive(data,key,data[key]);
        })
    }
}
function defineReactive(data, key, value){
    observe(value); //递归监听
    Object.defineProperty(data,key,{
        get(){
            console.log('获取数据',key,value)
            return value;
        },
        set(newValue){
            console.log('改变数据',key,newValue);
            //做一个判断，防止无限递归
            if(newValue !== value){
                // data[key] = newValue; //这个会导致无限递归
                //更改的话递归监听新值
                value = newValue;
                observe(newValue);
            }
        }
    })
}