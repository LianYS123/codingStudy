<template>
  <div class="hello">
    {{msg}}
    <br>
    {{features}}
    <button @click="handler">click me</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop,Emit,Watch} from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue{
  @Prop() private msg!:string;
  private aaa = 'hello world';
  private features = ['a','b','c'];
  private created() {
    console.log('hello world')
  }
  // private handler(){
  //   this.features.push('hello')
  // }

  @Emit('change')
  private handler(){  //当这个函数被执行的时候会派发事件
    this.features.push('hello');
    return this.features;
  }
  @Watch('features',{deep:true})
  onFeaturesChange(newVal:string[]){
    console.log('features changed to ' + newVal)
  }


}
</script>

