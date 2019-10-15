<template>
  <div>
    <p>
     a: {{a}} <button @click="addA()">+1</button> <br>
     b: {{b}} <button @click="addB()">+1</button> <br>
    </p>
    <hr>
    <p>
      <Comp1/>
    </p>
    <hr>
    <p>
      <Comp2/>
    </p>
  </div>
</template>

<script>
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
export default {
  methods:{
    addA(){
      this.$store.dispatch('setA',this.a+1);
    },
    addB(){
      this.$store.commit('setB',this.b+1);
    },
  },
  computed:{
    a(){
      return this.$store.state.a
    },
    b(){
      return this.$store.state.b
    }
  },
  components:{
    Comp1,
    Comp2
  },
}
</script>

<style>

</style>
