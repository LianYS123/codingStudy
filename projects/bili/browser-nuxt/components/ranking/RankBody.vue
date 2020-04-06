<template>
	<div class="rank-body">
		<div class="rank-list-head">
			<div class="rank_tips">
				<i class="b-icon-tip"></i>
				<span class="tip-txt">『连载动画』投稿在 2020年02月08日 - 2020年02月11日 的数据综合得分，每日更新一次</span>
			</div>
		</div>
		<div class="rank-list-wrap">
			<ul class="rank-list pgc-list" v-if="rankItems">
				<li
					class="rank-item"
					@click="toDetial(item.media_id)"
					v-for="(item,index) in rankItems"
					:key="item.media_id"
				>
					<div class="num">{{index+1}}</div>
					<div class="content">
						<div class="img">
							<a href="javascript:">
								<div class="lazy-img cover">
									<img :alt="item.title" :src="`${baseURL}/imgs/${item.img_name}`" />
								</div>
							</a>
							<!---->
						</div>
						<div class="info">
							<a href="javascript:" class="title">{{item.title}}</a>
							<div class="pgc-info">{{item.time_length_show}}</div>
							<div class="detail">
								<span class="data-box">
									<i class="b-icon play"></i>
									{{item.views|numFilter}}
								</span>
								<span class="data-box">
									<i class="fav"></i>
									{{item.favorites|numFilter}}
								</span>
							</div>
							<div class="pts">
								<div>{{getScore(item)}}</div>综合得分
							</div>
						</div>
						<!---->
					</div>
				</li>
			</ul>
			<div class="no-data loading" v-else>加载中...</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				rankItems: null
			};
		},
		async created() {
			let type = this.$route.query.type || '';
			let res = (
				await this.$axios.get(`api/video/1/50?type=${type}&sort=ranking&desc=desc`)
			).data;
			if (res.ok) {
				this.rankItems = res.data.list.sort(
					(a, b) => this.getScore(b) - this.getScore(a)
				);
			}
		},
		filters: {
			numFilter(num) {
				if (typeof num !== "number") return "";
				if (num / 100000000 > 1) return (num / 100000000).toFixed(1) + "亿";
				else if (num / 10000 > 1) return (num / 10000).toFixed(1) + "万";
				else return num + "";
			}
		},
		methods: {
			toDetial(media_id) {
				this.$router.push(`/single/media/${media_id}`);
			},
			getScore(item) {
				let rate = (item.rating_score / 5) ** 5 || 0.8;
				let score = parseInt((Math.sqrt(item.favorites * item.views) * rate)/100);
				return score;
			}
		}
	};
</script>

<style>
</style>