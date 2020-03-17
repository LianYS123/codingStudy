<template>
    <div class="comp">
        {{message}}
    </div>
</template>
<script>
export default {
    props:['message']
}
</script>

<style scoped>
    .comp{
        width: 100px;
        height: 100px;
        border: 1px solid #000;
        /* background-color: #ccc; */
    }
</style>