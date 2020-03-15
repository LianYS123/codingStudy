<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{data}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      data: null
    }
  },
  created(){
    this.$axios.get('/goods').then(res => {this.data = res.data});
  }
}
</script>
