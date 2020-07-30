<template>
	<div>
		<p>Register:</p>
		<form
			@submit.prevent="handlerSubmit"
			action="/user/register"
			method="post"
			ref="form"
		>
			<ul class="form-wrapper">
				<li class="field">
					<div class="text">
						<input type="text" v-model="username" name="username" autocomplete="off" placeholder="username" />
					</div>
				</li>
				<li class="field">
					<div class="text">
						<input type="password" v-model="password" name="password" autocomplete="off" placeholder="password" />
					</div>
				</li>
				<li class="field">
					<div class="text">
						<input type="password" v-model="confirm" name="confirm" autocomplete="off" placeholder="confirm password" />
					</div>
				</li>
				<li class="field">
					<input class="submit" type="submit" value="submit" />
				</li>
			</ul>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: "",
				confirm: ""
			};
		},
		methods: {
			handlerSubmit() {
				if (this.password === this.confirm)
					this.$emit("submit", {
						username: this.username,
						password: this.password
					});
			}
		}
	};
</script>

<style scoped>
	.form-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.text {
		width: 200px;
		height: 30px;
		margin: 10px;
		font-size: 15px;
		border: 1px solid #000;
		text-align: center;
		line-height: 30px;
		background-color: #fff;
	}
	.text input {
		border: none;
		outline: none;
		width: 180px;
	}
	.submit {
		width: 80px;
		height: 30px;
		font-size: 16px;
		outline: none;
		border: 1px solid #ccc;
	}
</style>