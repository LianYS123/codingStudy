<template>
  <router-view></router-view>
</template>

<script>
import MediaInfo from '@/components/detail'
export default {

}
export const router = [
    {
      path: 'media/:media_id',
      name: 'media',
      component: MediaInfo,
      props:true
    }
]
</script>

<style>

</style>