<template>
  <div>
        <Child :parent='this'/>
  </div>
</template>

<script>
import Child from './Child'
export default {
    data(){
        return {
            fields:[
                {name:'id',text:'ID'},
                {name:'name',text:'姓名'},
                {name:'age',text:'年龄'},
            ],
            datas:[
                {id:1,name:'lian',age:18},
                {id:2,name:'张三',age:20},
                {id:3,name:'李四',age:28},
            ]
        }
    },
    methods:{
        del(id){
            console.log('parent del');
            
            this.datas = this.datas.filter(data => data.id != id)
        }
    },
    components:{
        Child
    }
}
</script>

<style>

</style>