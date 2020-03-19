<template>
  <div>
      <p>
          <input type="text" v-model="username"/>
      </p>
      <p>
          <input type="password" v-model="password"/>
      </p>
      <p>
          <input type="button" value="提交" @click.prevent="handlerSubmit">
      </p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
        }
    },
    methods:{
        handlerSubmit(){
            this.$store.dispatch('login').then(success => {
                if(success){
                    alert('登录成功');
                } else {
                    alert('登录失败');
                }
            }).catch(err => {
                console.log(err);
                alert('网络错误');
            })
        }
    }
}
</script>

<style>

</style>