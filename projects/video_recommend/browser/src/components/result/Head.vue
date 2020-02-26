<template>
  <div class="head-contain">
    <div class="search-wrap">
      <div class>
        <div class="logo-input clearfix">
          <div class="search-block">
            <div class="input-wrap">
              <input
                type="text"
                maxlength="100"
                autocomplete="off"
                v-model="keyword"
                ref="search_box"
                @keydown.enter="search"
              />
            </div>
            <div class="search-button" @click="search">
              <i class="icon-search-white"></i>
              <span class="search-text">搜索</span>
            </div>
            <div class="search-loupe">
              <i class="icon-loupe"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props:['keyword'],
  mounted(){
    this.$refs.search_box.value = this.keyword;
  },
  methods: {
     async search(ev) {
       let keyword = ev.target.value.trim();
      if (keyword) {
        await this.loadResult({page:1,keyword});
        this.$router.push(`/home/result/1/${keyword}`);
      }
    },
    ...mapActions(["loadResult"])
  }
};
</script>

<style>
.search-wrap .search-block {
  margin-left: 100px;
}
</style>