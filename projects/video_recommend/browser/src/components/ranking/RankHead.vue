<template>
	<div class="rank-head">
		<ul class="rank-menu">
			<li
				:class="cur === item.type ? 'active' : ''"
				@click="handlerClick(item.type)"
				v-for="(item,index) in typeItems"
				:key="index"
			>
				<span :class="`rank-icon ${item.icon}`"></span>
				<span class="text">{{item.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				typeItems: [
					{ type: "", title: "全站榜", icon: "all" },
					{ type: "2", title: "影视榜", icon: "cinema" },
					{ type: "1", title: "动漫榜", icon: "bangumi" },
					{ type: "5", title: "电视榜", icon: "rookie" },
					{ type: "3", title: "纪录片榜", icon: "origin" },
				]
			};
		},
		props: ["cur"],
		methods: {
			handlerClick(rankType) {
				this.$emit("change", rankType);
			}
		},
	};
</script>

<style>
</style>