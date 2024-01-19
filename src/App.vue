<template>
  <div class="wrapper-primary">
    <TheHeader />
    <RouterView />
  </div>
  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<style lang="scss" scoped>
</style>
