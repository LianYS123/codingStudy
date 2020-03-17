<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  created(){
    this.$axios.get('api/detail').then(res => {
      console.log(res.data);
      this.msg = res.data
    })
  },
  data(){
    return {
      msg:'',
    }
  }
}
</script>
