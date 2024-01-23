<template>
  <div class="wrapper">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import TheHeader from './TheHeader.vue';
  import TheFooter from './TheFooter.vue';
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 3.45rem;
}
</style>
