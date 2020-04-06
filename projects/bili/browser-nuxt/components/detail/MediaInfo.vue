<template>
	<div class="media-info-wrp" v-if="data">
		<div class="bangumi-info-bg-wrp">
			<div class="bangumi-info-blurbg-wrapper">
				<div
					class="bangumi-info-blurbg blur"
					:style="`background-image:url(${baseURL}/imgs/${data.img_name});`"
				></div>
			</div>
			<!---->
		</div>
		<div class="media-info-content">
			<div class="media-info-inner clearfix">
				<div class="media-preview">
					<div class="common-lazy-img">
						<img alt :src="`${baseURL}/imgs/${data.img_name}`" lazy="loaded" />
					</div>
					<!-- <div class="tag-exclusive"></div> -->
				</div>
				<div class="media-info-r">
					<div class="media-info-title">
						<span class="media-info-title-t">{{data.title}}</span>
						<span class="media-tags" v-if="data.styles">
							<span class="media-tag" v-for="item in data.styles.split('|')" :key="item">{{item}}</span>
						</span>
					</div>
					<div class="media-info-datas">
						<div class="media-info-count">
							<span class="media-info-count-item media-info-count-item-play">
								<span class="media-info-label">总播放</span>
								<em>{{data.views|numFilter}}</em>
							</span>
							<span class="media-info-count-item media-info-count-item-review">
								<span class="media-info-label">追剧人数</span>
								<em>{{data.favorites?(data.favorites):(data.series_follow)|numFilter}}</em>
							</span>
						</div>
						<div class="media-info-score-wrp">
							<div class="media-info-score">
								<div class="media-info-score-content">{{data.rating_score}}</div>
								<div class="media-info-star-wrapper" v-if="data.rating_score">
									<span class="review-stars">
										<i v-for="i in starCount" :key="i" class="icon-star icon-star-light">
											<i></i>
										</i>
										<i v-for="i in 5-starCount" :key="i+5" class="icon-star">
											<i></i>
										</i>
									</span>
									<div class="media-info-review-times">{{data.rating_count}}人评</div>
									<div class="to-review-btn">
										<i class="icon-edit"></i>
										我要点评
									</div>
								</div>
								<div class="media-info-score-wrp" v-else>
									<!---->
									<div class="media-info-score-empty">
										<div>暂无评分</div>
										<!---->
										<div class="not-enough">评分人数不足</div>
										<div class="to-review-btn">
											<i class="icon-edit"></i>
											我要点评
										</div>
									</div>
								</div>
							</div>
							<!---->
						</div>
					</div>
					<div class="media-info-time">
						<span>{{data.pub_date|dateFilter}}开播</span>
						<span>{{data.time_length_show}}</span>
					</div>
					<div class="media-info-intro">
						<span class="media-info-intro-text">{{data.evaluate}}</span>
						<!---->
						<!---->
					</div>
					<div class="media-info-btns">
						<!---->
						<div class="bangumi-btn">
							<div class="btn-follow">
								<i></i>追剧
							</div>
							<!---->
						</div>
						<div class="share-module">
							<ul class="share-list clearfix">
								<li share-type="app" class="share-btn btn-wchat"></li>
								<li share-type="weibo" class="share-btn btn-weibo"></li>
								<li share-type="qqzone" class="share-btn btn-qqzone"></li>
								<li share-type="qq" class="share-btn btn-qq"></li>
								<li share-type="baidu" class="share-btn btn-baidu"></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MediaInfo",
		data() {
			return {
				data: null
			};
		},
		props: ["media_id"],
		async mounted() {
			let res = (await this.$axios.get(`api/video/${this.media_id}`)).data;
			if (res.ok) {
				this.data = res.data.mediaInfo;
			}
		},
		filters: {
			numFilter(num) {
				if (typeof num !== "number") return;
				if (num / 1e8 > 1) return (num / 1e8).toFixed(1) + "亿";
				else if (num / 1e4 > 1) return (num / 1e4).toFixed(1) + "万";
				else return num + "";
			},
			dateFilter(dateStr) {
				if (dateStr) {
					let arr = dateStr.split("-");
					return `${arr[0]}年${arr[1]}月${arr[2]}日`;
				} else {
					return "";
				}
			}
		},
		computed: {
			starCount() {
				return this.data ? Math.round(this.data.rating_score / 2) : 0;
			}
		}
	};
</script>

<style>
	.media-info-wrp
		.media-info-content
		.media-info-inner
		.media-info-r
		.media-info-title
		.media-tags {
		opacity: 1;
	}
</style>