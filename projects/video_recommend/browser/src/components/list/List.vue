<template>
	<div class="filter-body">
		<ul class="sort-banner clearfix">
			<li
				:class="sort==key?'sort-item on':'sort-item'"
				v-for="(title, key) in sortItems"
				:key="title"
				@click="fnSort(key)"
			>
				<i :class="desc==''?'up active':'up'"></i>
				<span>{{title}}</span>
				<i :class="desc==''?'down':'down active'"></i>
			</li>
		</ul>
		<ul class="bangumi-list clearfix" v-if="menu && menu.list.length > 0">
			<li class="bangumi-item" v-for="(item) in menu.list" :key="item.media_id">
				<a href="#" @click.prevent="toDetial(item.media_id)" target="_blank" class="cover-wrapper">
					<div class="common-lazy-img">
						<img alt :src="`${baseURL}/imgs/${item.img_name}`" lazy="loaded" />
					</div>
					<div class="shadow">{{item.views|numFilter}}次播放</div>
				</a>
				<a href="#" @click.prevent="toDetial(item.media_id)" class="bangumi-title">{{item.title}}</a>
			</li>
		</ul>
		<ul class="bangumi-list clearfix no-data" v-else-if="menu">
			<div class="load-state">
				<span class="empty">没有数据(-_-#)</span>
			</div>
			<li class="no-data-wrapper">
				<span>找不到相关视频～</span>
				<div class="reset-btn" @click="reset()">重置筛选</div>
			</li>
		</ul>
		<ul class="bangumi-list clearfix" v-else>
			<div class="load-state">
				<span class="loading">正在加载...</span>
				<!---->
				<!---->
			</div>
			<!---->
		</ul>
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	import qs from "querystring";
	export default {
		name: "List",
		data() {
			return {
				sortItems: {
					favorites: "追剧人数",
					rating_score: "最高评分",
					views: "播放数量"
				}
			};
		},
		methods: {
			...mapActions(["loadMenu"]),
			toDetial(media_id) {
				this.$router.push(`/single/media/${media_id}`);
			},
			reset() {
				this.loadMenu({});
			},
			async fnSort(sort) {
				let desc = this.sort == sort && this.desc == "desc" ? "" : "desc";
				await this.loadMenu({ page: 1, cates: {}, sort, desc });
				this.$router.push(
					`/home/1?${qs.stringify({ ...this.$route.query, sort, desc })}`
				);
			}
		},
		computed: {
			...mapState({
				sort: state => state.menu_store.sort,
				menu: state => state.menu_store.menu,
				desc: state => state.menu_store.desc
			})
		},
		filters: {
			numFilter(num) {
				if (typeof num !== "number") return;
				if (num / 100000000 > 1) return (num / 100000000).toFixed(1) + "亿";
				else if (num / 10000 > 1) return (num / 10000).toFixed(1) + "万";
				else return num + "";
			}
		}
	};
</script>

<style>
	.bangumi-index-wrapper
		.bangumi-index-body
		.filter-body
		.bangumi-list
		.no-data-wrapper {
		background-image: url(/web_img/sorry2.jpg);
	}
	.bangumi-index-wrapper .bangumi-index-body .filter-body .bangumi-list {
		height: 100%;
	}
</style>