<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: ["rules","model"],
		provide() {
			return {
				form: this
			};
		},
		data() {
			return {};
		},
		methods: {
			validate() {
                let tasks = this.$children.filter(child => child.prop).map(child => child.validate());
                // console.log('tasks:',tasks);
                // return new Primose((resolve,reject) => {
                //     Promise.all(tasks).then(results => resolve(results.every(item => item)))
                // })
                return Promise.all(tasks).then(results => results.every(item => item))
            }
		}
	};
</script>
