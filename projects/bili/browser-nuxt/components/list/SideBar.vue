<template>
  <div class="filter-wrapper" v-if="cates">
    <div class="filter-title">筛选</div>
    <div class="filter-list">
      <div class="filter-block" v-for="(cate) in categroy" :key="cate.value">
        <div class="filter-name">{{cate.name}}</div>
        <ul class="filter-item-wrapper free">
          <li
            :title="item.name"
            :class="getValue(cates[cate.value]) == item.value ? 'filter-item on':'filter-item'"
            v-for="(item,index) in cate.children"
            :key="index"
            @click="change({[cate.value]:item.value})"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { categroy } from "@/config";
export default {
  data() {
    return {
      categroy
    };
  },
  methods: {
    change(opt) {
      this.$emit('change',opt);
    },
    getValue(value){
      return typeof value === 'undefined' ? '' : value
    }
  },
  props:["cates"]
};
</script>

<style>
</style>