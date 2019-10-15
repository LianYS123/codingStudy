<template>
  <div>
      <table class="table">
        <thead>
            <tr>
                <th scope="col" v-for="field in this.parent.fields" :key="field.name">
                    {{field.text}}
                </th>
                
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in this.parent.datas" :key="data.id">
                <td scope="row" v-for="value in data" :key="value">{{value}}</td>
                <td><button class="btn btn-danger" @click="del(data.id)">删除</button></td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<script>
export default {
    props:['parent'],
    created(){
        // console.log('父组件数据：',this.parent.fields);
        
    },
    methods:{
        del(id){
            console.log('child del');
            
          this.parent.del(id);  
        }
    }
}
</script>

<style scoped>
.table{
    text-align: center;
}
</style>