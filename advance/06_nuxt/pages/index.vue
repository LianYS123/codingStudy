<template>
  <div>
    <p>index</p>
    <nav>
      <nuxt-link to="home">home</nuxt-link>
      <nuxt-link to="detail/1" no-prefetch>detail:1</nuxt-link>
      <nuxt-link to="detail" exact>detail</nuxt-link>
    </nav>
  </div>
</template>

<script>


export default {
  
}
</script>

<style>

</style>
