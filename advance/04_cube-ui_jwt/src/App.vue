<template>
  <div id="app">
    <i class="cubeic-back" v-if="$history.canBack()" @click="$router.goBack()"></i>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <cube-button @click="handlerLogout">注销</cube-button>
    <cube-button @click="showMessage">click me</cube-button>
    <router-view/>
  </div>
</template>
<script>
import TestComp from '@/components/TestComp';
export default {
  methods:{
    handlerLogout(){
      this.$store.dispatch('logout');
      
      this.$router.push('/login'); //
    },
    showMessage(){
      let comp = this.$create(TestComp,{message:'hello'});
      setTimeout(() => {
        comp.remove();
      }, 1000);
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
