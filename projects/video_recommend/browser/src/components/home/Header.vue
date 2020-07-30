<template>
	<div id="header">
		<div id="header_inner">
			<div class="pure-menu pure-menu-horizontal pure-menu-open">
				<ul>
					<li
						:class="`pure-dropdown hide-xs hide-sm hide-md ${exploreShow?'pure-menu-open':''}`"
						@mouseleave="exploreShow=false"
						@mouseover="exploreShow=true"
					>
						<a href="javascript:">
							Explore
							<i class="dropdown_arrow hide-xs"></i>
						</a>
						<ul class="pure-menu-children" style="top: 70px; left: 0px;">
							<li class="mm_inc">
								<a href="javascript:">热门电影</a>
							</li>
							<li class="mm_inc">
								<a href="javascript:">热门文章</a>
							</li>
							<li class="mm_inc">
								<a href="javascript:">热门搜索</a>
							</li>
							<li class="mm_inc mm_sep">
								<a href="javascript:">历史记录</a>
							</li>
						</ul>
					</li>
					<li class="hide-xs hide-sm hide-md hide-lg mum_inc">
						<a href="javascript:" @click="toLogin">登录</a>
					</li>
					<li class="hide-xs hide-sm hide-md mum_inc">
						<a href="javascript:" class="hide-lg hide-xl" @click="toLogin">登录</a>
						<a href="javascript:" class="hide-xs hide-sm hide-md pure-button" @click="toRegister">注册</a>
					</li>
					<li
						:class="loginListShow ? 'pure-dropdown hide-lg hide-xl pure-menu-open' : 'pure-dropdown hide-lg hide-xl'"
						@mouseover="loginListShow=true"
						@mouseleave="loginListShow=false"
					>
						<a>
							<i class="icon icon_menu_user"></i>
						</a>
						<ul id="mobile_user_menu" class="pure-menu-children" style="top: 65px; left: 0px;">
							<li class="hide-lg mum_inc">
								<a href="javascript:" @click="toLogin">登录</a>
							</li>
							<li class="mum_inc">
								<a href="javascript:" class="hide-lg hide-xl" @click="toRegister">注册</a>
							</li>
						</ul>
					</li>
					<li
						:class="menuShow?'pure-dropdown hide-lg hide-xl pure-menu-open':'pure-dropdown hide-lg hide-xl'"
						@mouseover="menuShow = true"
						@mouseleave="menuShow = false"
					>
						<a>
							<i class="icon icon_menu_bars"></i>
						</a>
						<ul id="mobile_menu" class="pure-menu-children" style="top: 65px;">
							<li class="mm_inc hide-lg hide-xl">
								<a href="javascript:" @click.prevent="toHome()">首页</a>
							</li>
							<li class="mm_inc hide-lg hide-xl">
								<a href="javascript:" @click.prevent="toMenu">索引</a>
							</li>
							<li class="mm_inc hide-lg hide-xl">
								<a href="javascript:">文章</a>
							</li>
							<li class="mm_inc mm_sep hide-lg hide-xl">
								<a href="javascript:" @click.prevent="toRanking">榜单</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<a id="logo" style="background-image: none;width:auto;height:auto;">
				<img src="@/assets/web_img/movie_logo.svg" alt style="width:40px;" />
			</a>
			<div id="media_type_menu" class="hide-xs hide-sm hide-md">
				<a href="javascript:" @click.prevent="toHome()">首页</a>
				<a href="javascript:" @click.prevent="toMenu">索引</a>
				<a href="javascript:">文章</a>
				<a href="javascript:" @click.prevent="toRanking">榜单</a>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		data() {
			return {
				menuShow: false,
				loginListShow: false,
				exploreShow: false
			};
		},
		methods: {
			...mapActions(["loadMenu"]),
			toHome() {
				this.$router.push("/home");
			},
			async toMenu() {
				await this.loadMenu({});
				this.$router.push(`/home/1`);
			},
			toRanking() {
				this.$router.push("/home/ranking");
			},
			toLogin() {
				this.$router.push("/user/login");
			},
			toRegister() {
				this.$router.push("/user/register");
			}
		}
	};
</script>

<style>
	#media_type_menu {
		display: block;
	}
	#media_type_menu a {
		color: black;
	}
	#media_type_menu a:hover {
		text-decoration: underline;
	}
	#logo {
		margin-left: 40px;
		z-index: 99;
	}
	#logo:hover {
		margin-left: 40px;
		cursor: pointer;
	}
	#header {
		font-size: 16px;
	}
	.icon_menu_bars {
		background-image: url(../../assets/sprites.svg), none;
	}
</style>