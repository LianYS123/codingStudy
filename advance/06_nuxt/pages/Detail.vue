<template>
    <div>
        <div class="test">detail</div>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    head(){
        return {
            link:[{href:'/test.css',rel:'stylesheet'}]   //是一个数组，从根目录开始要加上/ 否则实际路径为/detail/test.css
        }
    }
}
</script>