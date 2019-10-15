<template>
    <div>
        这是新闻。。。
        <router-link to="/news/news1">to news1</router-link>
        <router-link :to="{name:'news2'}">to news2</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
import News1 from '@/News1'
import News2 from '@/News2'
export default {
    
}
export const router = [
    {
        path:'news1',
        name:'news1',
        components:{
            default:News1
        }
    },
    {
        path:'news2',
        name:'news2',
        components:{
            default:News2
        }
    }
]
</script>

<style>

</style>