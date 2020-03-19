<template>
  <div>这个是管理员页面，需要登录才能看见:{{msg}}</div>
</template>

<script>
export default {
    middleware:'auth',
    async asyncData({$axios}) {
        let res = await $axios.$get('admin');
        return {
            msg:res
        }
    },
}
</script>

<style>

</style>