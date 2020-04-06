<template>
  <MediaInfo :media_id="media_id"></MediaInfo>
</template>

<script>
import MediaInfo from './MediaInfo'

export default {
    props:["media_id"],
    components:{
        MediaInfo
    }
}
</script>

<style>

</style>