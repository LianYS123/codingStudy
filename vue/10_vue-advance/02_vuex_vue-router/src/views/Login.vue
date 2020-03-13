<template>
  <div>
      <p>登录页</p>
      username: <input type="text"> <br>
      password: <input type="text"> <br>
      <button @click="handlerLogin">登录</button>
  </div>
</template>

<script>
export default {
    methods:{
        handlerLogin(){
            const redirect = this.$route.query.redirect || '/';
            this.$store.dispatch('requestLogin').then(() => {
                this.$router.push(redirect);
            })
        }
    }
}
</script>

<style>

</style>