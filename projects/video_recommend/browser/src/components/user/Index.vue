<template>
	<!-- <div v-if="type" class="user-login">
		<header>
			<ul class="nav">
				<li :class="type==='login'?'login active':'login'" @click="toLogin">登录</li>
				<li :class="type==='register'?'login active':'login'" @click="toRegister">注册</li>
			</ul>
		</header>
		<main>
			<Login @submit="login" v-if="type==='login'"></Login>
			
			<Register @submit="register" v-if="type==='register'"></Register>
		</main>
	</div> -->
	<Login2 />
</template>

<script>
	import Login from "./Login";
	import Register from "./Register";
	import Login2 from "./Login2";
	export default {
		data() {
			return {
				type: ""
			};
		},
		created() {
			let { type } = this.$route.params;
			this.type = type;
		},
		components: {
			Login2,
			Register
		},
		methods: {
			async login(user) {
				let res = (await this.$axios.post('user/login',user)).data;
				if(res.ok){
					alert('登录成功');
					let res = (await this.$axios.get('space/test',user)).data;
					if(res.ok){
						alert('token 校验成功');
					} else {
						alert('token 校验失败:'+res.msg);
					}
				} else {
					alert('登录失败:'+res.msg);
				}

			},
			async register(user) {
				let res = (await this.$axios.post('user/reg',user)).data;
				if(res.ok){
					// console.log('注册成功')
					alert('注册成功');
				} else {
					alert('注册失败:'+res.msg)
				}
				
            },
            toLogin() {
                if(this.type === 'login') return;
                this.type = 'login';
				this.$router.push("/user/login");
			},
			toRegister() {
                if(this.type === 'register') return;
                this.type = 'register';
				this.$router.push("/user/register");
			}
		}
	};
</script>

<style scoped>
    /* .user-login{
        min-height: 100%;
    }
    .nav{
        padding: 20px;
        display: flex;
        margin: auto;
        width: 500px;
        justify-content: center;
        align-content: center;
    }
	.active {
		color: aquamarine;
		text-decoration: underline;
        font-weight: 800px;
	}
    .login,.register{
        cursor: pointer;
        width: 80px;
        height: 40px;
        font-size: 18px;
        line-height: 40px;
        text-align: center;
    }
    main{
        margin: auto;
        display: flex;
        justify-content: center;   
        align-items: center;
        min-height: 500px;
    } */
</style>