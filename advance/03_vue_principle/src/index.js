
import Vue from 'vue';

const vm = new Vue({
    el: '#root',
    data(){
        return {
            arr:[]
        }
    }
})
//
let arr = vm.arr;
console.log('start test');
arr.push('hello');
arr[1] = 'test';