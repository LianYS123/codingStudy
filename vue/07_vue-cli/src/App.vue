<template>
<div>
  {{$store.state.a}} <button class="btn btn-primary" @click="add()">+1</button>
  <hr>
  <parent/>
</div>
</template>

<script>
import Parent from './components/Parent'
export default {
  name: 'App',
  components:{
    Parent
  },
  methods:{
    add(){
      this.$store.dispatch('add')
    }
  }
}
</script>

<style>

</style>
