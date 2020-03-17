<template>
	<div>
		<cube-form
		:model="model"
		:schema="schema"
		:immediate-validate="false"
		@validate="validateHandler"
		@submit.prevent="submitHandler"
	></cube-form>
	<cube-loading v-if="loading"></cube-loading>
	</div>
    <!-- 这里submit一定要阻止默认事件 -->
</template>

<script>
	export default {
		data() {
			return {
				loading:false,
				model: {
					username: "",
					password: ""
				},
				schema: {
					fields: [
						{
							type: "input",
							modelKey: "username",
							label: "用户名",
							props: { placeholder: "请输入用户名", type: "text" },
							rules: {
								required: true
							},
							trigger: "blur"
						},
						{
							type: "input",
							modelKey: "password",
							label: "密码",
							props: {
								placeholder: "请输入密码",
								type: "password",
								eyes: { open: true }
							}, //input属性
							rules: {
								required: true
							},
							trigger: "blur"
						},
						{
							type: "submit",
							label: "Submit"
						}
					]
				}
			};
		},
		methods: {
			validateHandler() {
				//校验
				// console.log(ret);
			},
			submitHandler() {
				this.loading = true;
				this.$store.dispatch("login", this.model).then(success => {
					if (success) {
						console.log("登录成功");
                        //重定向
						let path = this.$route.query.redirect || "/";
						this.$router.push(path);
					}
					this.loading = false;
                }).catch(err=>{
                    console.log(err);
                    console.log("登录失败");
                    this.$createToast({
                        time: 2000,
                        txt: "登录失败",
                        type: "error"
					}).show();
					this.loading = false;
                });
			}
		}
	};
</script>

<style>
</style>