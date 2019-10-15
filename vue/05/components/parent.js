import Vue from 'vue'
import Child from '../components/child'

export default Vue.component('Parent',{
    data(){
        return {
            num:0
        }
    },
    methods:{
        childAdd(){
            this.$refs.c1.num++;
        },
        childAdd5(){
            this.$refs.c1.$emit('add',5);
        }
    },
    components:{
        Child
    },
    template:`
        <div>
         父组件{{num}}<input type='button' @click='childAdd()' value='+1' /><input type='button' @click='childAdd5()' value='+5' />
            <Child ref='c1' :parent='this'/>
        </div>
    `
})