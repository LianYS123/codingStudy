<template>
  <div class="bili-search">
    <div class="contain">
      <Head :keyword="keyword"></Head>
      <Body :page="page" :keyword="keyword"></Body>
      <Paging :totalPages="totalPages" :page="page" :total="total" @change="handlerPage"></Paging>
    </div>
  </div>
</template>

<script>
import Head from "./Head";
import Body from "./Body";
import Paging from "@/components/common/Paging"
import {mapState,mapGetters,mapActions} from "vuex"
export default {
  components: { Head, Body, Paging },
  props:['keyword','page'],
  methods:{
    ...mapActions(["loadResult"]),
    
    async handlerPage(page) {
      page = parseInt(page);
      let keyword = this.keyword;
      if (page <= this.totalPages && page > 0 && page != this.page) {
        this.$router.push(`/home/result/${page}/${keyword.trim()}`);
        await this.loadResult({page,keyword});
      }
    }
  },
  computed:{
    ...mapGetters({
      totalPages:  "result_pages",
      total: "result_total"
    }),
  }
};
</script>

<style>
</style>