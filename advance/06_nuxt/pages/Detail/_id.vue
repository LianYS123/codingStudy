<template>
  <div>
      <p>商品详情</p>
      <ul>
          <li v-for="(good, index) in goods" :key="good.id">
              name:{{good.name}} <br/>
              price:{{good.price}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    async asyncData(ctx) {
        // console.log(ctx);
        let {$axios,params} = ctx;
        let id = params.id || 0;
        let data = await $axios.$get('api/goods/'+id);
        if(data.ok){
            return {
                goods: data.goods
            }
        } else {
            console.log('error')
        }
    },
    data(){
        return {
            goods:[
                {id:0,name:'temp',price:0}
            ]
        }
    }
}
</script>

<style>

</style>