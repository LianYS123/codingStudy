<template>
    <div>
        <p>
            comp2
        </p>
        <p>
            <table class="table">
                 <thead>
                    <tr>
                        <th scope="col" v-for="(value,key) in this.users[0]" :key="key"> <!-- 加个括号 -->
                        {{key}}
                        </th>
                        
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in this.users" :key="user.username">
                        <td scope="row" v-for="(value,key) in user" :key="key">{{value}}</td>
                        <td><button class="btn btn-danger" @click="del()">删除</button></td>
                    </tr>
                </tbody>
            </table>
        </p>

    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
   async created(){
       await this.readUsers();
       console.log(this.users);
   },
   methods:{
       ...mapActions(['readUsers'])
   },
   computed:{
       ...mapState(['users'])
   }
}
</script>

<style>
.table{
    text-align: center;
}
</style>