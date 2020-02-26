<template>
	<div class="bangumi-index-wrapper">
		<div class="bangumi-index-body clearfix">
			<div class="filter-body">
				<List></List>
				<Paging :totalPages="totalPages" :page="page" :total="total" @change="handlerPage"></Paging>
			</div>
			<SideBar @change="handlerChange" :cates="cates"></SideBar>
		</div>
	</div>
</template>

<script>
	import List from "./List.vue";
	import SideBar from "./SideBar.vue";
	import Paging from "@/components/common/Paging.vue";

	import { mapState, mapActions, mapGetters } from "vuex";
	import qs from "querystring";
	import { cateValues } from "@/config";
	export default {
		name: "ListPage",
		components: { List, SideBar, Paging },
		async mounted() {
			let cates = {};
			cateValues.forEach(key => (cates[key] = this.$route.query[key]));
			let { sort, desc } = this.$route.query,
				page = this.$route.params.page;
			await this.loadMenu({ page, cates, sort, desc });
		},
		methods: {
			...mapActions(["loadMenu"]),
			async handlerPage(page) {
				page = parseInt(page);
				if (page <= this.totalPages && page > 0 && page != this.page) {
					this.$router.push(`/home/${page}?${qs.stringify(this.$route.query)}`);
					await this.loadMenu({
						page,
						cates: {},
						sort: this.sort,
						desc: this.desc
					});
				}
			},
			handlerChange(opt) {
				this.loadMenu({ cates: opt, sort: this.sort, desc: this.desc });
				this.$router.push(`/home/1?${qs.stringify(this.cates)}`);
			}
		},
		computed: {
			...mapGetters(["totalPages", "total"]),
			...mapState({
				sort: state => state.menu_store.sort,
				desc: state => state.menu_store.desc,
				page: state => state.menu_store.page,
				cates: state => state.menu_store.cates
			})
		}
	};
</script>

<style>
	ol,
	ul {
		padding-left: 0;
	}
</style>