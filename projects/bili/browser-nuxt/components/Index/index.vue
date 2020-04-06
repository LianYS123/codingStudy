<template>
  <div>
    <SearchBig></SearchBig>
    <nuxt/>
    <CateView></CateView>
  </div>
</template>

<script>
import SearchBig from "./SearchBig";
import CateView from "./CateView";
export default {
  components: { CateView, SearchBig }
};
</script>

<style>
</style>