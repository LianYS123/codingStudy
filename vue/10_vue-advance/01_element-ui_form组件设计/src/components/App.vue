<template>
	<div>
		<!-- <cart></cart> -->
		<LForm :rules="rules" :model="model" ref="form">
			<!-- prop属性用于数据校验，组件中会从model和rules中取得对应的字段和规则进行判断 -->
			<LFormItem label="username" prop="username">
				<!-- <LInput v-model="model.username"></LInput> -->
				<LInput :value="model.username" @input="model.username=$event"></LInput>
			</LFormItem>
			<LFormItem label="password" prop="password">
				<LInput v-model="model.password"></LInput>
			</LFormItem>
			<LFormItem>
				<button @click="handlerSubmit">submit</button>
			</LFormItem>
		</LForm>
		{{model.username}}
	</div>
</template>

<script>
	import Cart from "./Cart";
	import LFormItem from "./LFormItem";
	import LInput from "./LInput";
	import LForm from "./LForm";
	export default {
		data() {
			return {
				rules: {
					//rules中选择model中要校验的字段声明校验规则
					username: [
						{
							required: true,
							message: "请输入用户名"
						}
					],
					password: [
						{
							required: true,
							message: "请输入密码"
						}
					]
				},
				model: {
					username: "lian"
				}
			};
		},
		methods: {
			handlerSubmit() {
                this.$refs.form.validate().then(res => {
                    if(res){
                        alert('登陆成功');
                    } else{
						alert('数据校验失败');
                    }
                });
            }
		},
		components: {
			Cart,
			LFormItem,
			LInput,
			LForm
		}
	};
</script>

<style>
</style>