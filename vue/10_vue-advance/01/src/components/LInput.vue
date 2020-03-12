<template>
  <input type="text" :value="value" @input="handlerInput" @blur="handlerblur">
</template>

<script>
export default {
    props:['value'],
    methods:{
        handlerInput(e){
            this.$emit("input",e.target.value)
        },
        handlerblur(){
            this.$parent.$emit('validate');
        }
    }
}
</script>

<style>

</style>