<template>
  <div class="body-contain">
    <div class="flow-loader">
      <div>
        <div class="total-wrap">
          <p class="total-text">共{{total}}条数据</p>
        </div>
      </div>
      <ul v-if="total">
        <li
          class="bangumi-item"
          v-for="item in result.list"
          :key="item.media_id"
          @click="toDetail(item.media_id)"
        >
          <div class="bangumi-item-wrap">
            <router-link :to="`/single/media/${item.media_id}`" :title="item.title" class="left-img">
              <div class="lazy-img">
                <img alt :src="`${baseURL}/imgs/${item.img_name}`" />
              </div>
            </router-link>
            <div class="right-info">
              <div class="headline">
                <!---->
                <span class="bangumi-label" v-html="getSub(item.type_name)"></span>
                <router-link 
                  :to="`/single/media/${item.media_id}`"
                  title="item.title"
                  class="title"
                  v-html="getSub(item.title)"
                ></router-link>
              </div>
              <div class="intros">
                <div class="line clearfix">
                  <div class="left-block">
                    <span class="label">风格：</span>
                    <span class="value" v-html="getSub(item.styles)"></span>
                  </div>
                  <div class="right-block">
                    <span class="label">地区：</span>
                    <span class="value">{{item.areas}}</span>
                  </div>
                </div>
                <div class="line clearfix">
                  <div class="left-block">
                    <span class="label">开播时间：</span>
                    <span class="value">{{item.pub_date}}</span>
                  </div>
                  <div class="right-block">
                    <span class="label">演员：</span>
                    <span :title="item.actors " class="value">{{item.actors}}</span>
                  </div>
                </div>
                <div class="desc">{{item.evaluate}}</div>
              </div>
              <!-- <div id="pgc-navigate-wrap" class="grid">
                <ul class="ep-box clearfix grid">
                  <li class="ep-sub">
                    <a
                      href="https://www.bilibili.com/bangumi/play/ep277178?from=search&amp;seid=2346099658512305909"
                      target="_blank"
                    >
                      <div title="1 次元的黑暗面" class="ep-item">1</div>
                    </a>
                  </li>
                </ul>
              </div>-->
              <div class="score" v-if="item.rating_score">
                <div class="score-num">
                  {{item.rating_score}}
                  <span class="fen">分</span>
                </div>
                <div class="user-count">{{item.rating_count}}人点评</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="flow-loader-state-nothing" v-else>
        <div class="error-wrap error-0">
          <p class="text">没有相关数据</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  async mounted() {
    console.log(this.page,this.keyword);
    await this.loadResult({ keyword: this.keyword, page: this.page });
  },
  props:['keyword','page'],
  methods: {
    toDetail(media_id) {
      this.$router.push(`/single/media/${media_id}`);
    },
    ...mapActions(["loadResult"]),
    getSub(str) {
      let keyword = this.keyword;
      if (keyword) {
        let arr = str.split(keyword);
        return arr.length > 1? `${arr[0]||''}<em class="keyword">${keyword||''}</em>${arr[1]||''}` : str;
      } else {
        return "";
      }
    }
  },
  computed: {
    ...mapState({
      result: state => state.search_store.result
    }),
    ...mapGetters({
      total: "result_total"
    })
  }
};
</script>

<style>
.flow-loader .bangumi-item {
  width: 100%;
}
.error-wrap p.text {
  line-height: 440px !important;
}
</style>