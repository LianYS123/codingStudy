<template>
  <div class="pagelistbox clearfix" v-if="totalPages>1">
    <a href="javascript:;" v-if="page!=1" class="p prev-page" @click="change(page-1)">上一页</a>
    <a href="javascript:;" @click="change(1)" v-if="page > 3" class="p">1</a>

    <strong v-if="page > 4">...</strong>
    <a
      href="javascript:;"
      v-for="i in 5"
      v-show="page - 3 + i>0 && page - 3 + i < totalPages"
      :key="i"
      :class="i==3 ? 'p active' : 'p'"
      @click="change(page - 3 + i)"
    >{{page - 3 + i}}</a>
    <strong v-if="page < totalPages - 3">...</strong>
    <a
      href="javascript:;"
      @click="change(totalPages)"
      :class="page==totalPages ? 'p active' : 'p'"
    >{{totalPages}}</a>
    <a
      href="javascript:;"
      @click="change(parseInt(page)+1)"
      v-if="page!=totalPages"
      class="p next-page"
    >下一页</a>
    <div class="custom-right">
      <span class="result custom-right-inner">共 {{totalPages}} 页 / {{total}}个，跳至</span>
      <input
        v-model="skip"
        type="text"
        maxlength="4"
        class="custompage custom-right-inner"
        @keydown.enter="change(skip)"
      />
      <span class="custom-right-inner">页</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paging",
  data() {
    return {
      skip: "",
    };
  },
  methods:{
    change(page){
      this.$emit('change',page); //发布事件
    }
  },
  props:["total","page","totalPages"]
};
</script>

<style>
.bangumi-list .bangumi-item{
  border-bottom:none
}
.pagelistbox .p:hover{
    color: #fff !important;
}
</style>