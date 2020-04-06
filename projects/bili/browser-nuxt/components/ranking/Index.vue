<template>
  <div class="rank-container">
    <RankHead :cur='cur' @change='typeChange' :key="cur"></RankHead>
    <RankBody :key='cur+"aaa"'></RankBody>
  </div>
</template>

<script>
import RankBody from "./RankBody";
import RankHead from "./RankHead";
export default {
  components: { RankBody, RankHead },
  created(){
    
    this.cur = this.$route.query.type || ''
  },
  data(){
    return {
      cur: ''
    }
  },
  methods:{
    typeChange(type){
      if(type != this.cur){
        this.cur = type;
        this.$router.push(`/home/ranking?type=${type}`)
      }
    }
  }
};
</script>

<style>
.rank-container {
  margin-top: 20px;
}
</style>