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
