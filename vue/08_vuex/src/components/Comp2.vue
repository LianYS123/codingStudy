<template>
    <div>
        <p>
            comp2
        </p>
        <p>
            
            <table class="table" v-if="users&&users!={}"><!-- v-if:防止数据未加载就渲染页面报错 -->
                 <thead>
                    <tr>
                        <th scope="col" v-for="(value,key) in this.users[0]" :key="key"> <!-- 加个括号 -->
                        {{key}}
                        </th>
                        
                        <th>操作</th>
                    </tr>
                </thead>
                 
                <transition-group name="slideLeft" tag="tbody">
                    <tr v-for="user in this.users" :key="user.username">
                        <td scope="row" v-for="(value,key) in user" :key="key">{{value}}</td>
                        <td><button class="btn btn-danger" @click="delUser(user.id)">删除</button></td>
                    </tr>
                </transition-group>
                
            </table>
        </p>

    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
   async created(){
       await this.readUsers();
   },
   methods:{
       ...mapActions(['readUsers','delUser'])
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
/* .list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */
.slideLeft-move{
    transition: 1s;
}
/* .slideLeft-leave-active {
  display: inline-block
} */
</style>