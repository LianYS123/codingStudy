<template>
  <div>
      <p>comp3</p>
      <p>state中的元素可以重名，各自有各自的作用域</p>
      store_a.str:{{store_a.str}} <br>
      store_b.str:{{store_b.str}} <br>
      <button @click="printStr()">printStr</button> <!-- 两个模块的打印方法都会被执行:执行两次 -->
      <button @click="printStrAction()">printStrAction</button> <!-- 执行四次 -->
      
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    methods:{
        printStr(){
            this.$store.commit('printStr')
        },
        ...mapActions(['printStrAction'])
    },
    computed:{
        ...mapState(['store_a','store_b'])
    }
}
</script>

<style>

</style>