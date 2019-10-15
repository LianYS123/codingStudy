<template>
    <div>
        <router-link to='/news'>新闻</router-link>
        <router-link to='/sports'>体育</router-link>
        这是主组件。。。
        <hr>
        <router-view></router-view><!-- name是组件名,可以指明这个view放哪个组件，类似一个版块（多视图） -->
        <router-view name='SportSection1'></router-view>
        <router-view name='SportSection2'></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>