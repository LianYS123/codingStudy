<template>
	<div>
		<label for>{{label}}</label>
		<slot></slot>
		<p>{{errorMessage}}</p>
	</div>
</template>

<script>
	import Validator from "async-validator";
	export default {
		props: ["label", "prop"],
		inject: ["form"],
		data() {
			return {
				errorMessage: ""
			};
		},
		created() {
			this.$on("validate", this.validate);
		},
		methods: {
			validate() {
				const prop = this.prop;
				const rules = this.form.rules;
				const model = this.form.model;
				const descriptor = {
					[prop]: rules[prop] //username: {required:true,...}
				};
                const validator = new Validator(descriptor);
                console.log('校验数据:',{ [prop]: model[prop] })
				return new Promise((resolve, reject) => {
					validator.validate({ [prop]: model[prop] }, err => {
						if (err) {
							this.errorMessage = err[0].message;
							resolve(false);
						} else {
                            this.errorMessage = '';
							resolve(true);
						}
					});
				});
			}
		}
	};
</script>

<style scoped>
	p {
		color: red;
	}
</style>