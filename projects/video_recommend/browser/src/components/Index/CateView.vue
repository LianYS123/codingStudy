<template>
  <div>
    <ECharts :options="option" @click="fnClick" autoresize />
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/tree";
import "echarts/lib/component/polar";
import {mapActions} from 'vuex';
import {categroy,cateValues} from '@/config';
import qs from 'querystring'
const initCates = {};
cateValues.forEach(cate=>initCates[cate]='');
export default {
  components: {
    ECharts,
  },
  methods: {
    ...mapActions(['loadMenu']),
    async fnClick(params) {
      let {cate, value} = params.data;
      if(cate){
        let cates = {...initCates,[cate]:value};
        await this.loadMenu({cates});
        this.$router.push(`/home/1?${qs.stringify(cates)}`);
      }
    }
  },
  data() {
    /*
    1	番剧 2电影 3纪录片 4国创 5电视剧

    地区 全部 中国大陆 中国港台 美国 日本 韩国 其他国家
    状态 全部 完结 连载
    剧情 喜剧 爱情 动作 恐怖 科幻 犯罪 惊悚 悬疑 奇幻 战争 动画传记家庭歌舞历史冒险纪实灾难漫画改小说改
    */
    let data = [
      {
        name: "",
        children: categroy
      }
    ];

    return {
      option: {
        series: [
          {
            type: "tree",
            data,

            itemStyle: {
              //设置属性
              normal: {
                color: "#333333" || "#333333",
                borderWidth: 0
              }
            },
            label: {
              //内容位置等属性
              normal: {
                verticalAlign: "middle",
                align: "center",
                fontSize: 14,
                color: "#ffffff"
              }
            },
            lineStyle: {
              //连线颜色
              normal: {
                color: "#333333" || "rgba(0,0,0,0.25)",
                width: 0.5,
                curveness: 0.75
              }
            },
            leaves: {
              label: {
                show: true
              }
            },
            top: "-15%",
            left: "2%",
            bottom: 100,
            right: "2%",
            symbolSize: 40,
            animationDuration: 0,
            animationDurationUpdate: 0,
            orient: "vertical",
            symbol: "circle",
            expandAndCollapse: true,
            initialTreeDepth: 2
          }
        ]
      }
    };
  }
};
</script>

<style>
.echarts {
  width: 100% !important;
  height: 600px !important;
}
</style>