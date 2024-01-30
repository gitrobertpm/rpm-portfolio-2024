<template>
  <header class="header">
    <NavMobile v-if="globalState.width < lg" />
    <NavDesktop v-if="globalState.width >= lg" />
  </header>
</template>

<script setup>
import NavMobile from './NavMobile.vue';
import NavDesktop from './NavDesktop.vue';
import useWindowResize from '@/composables/useWindowResize.js';
import { BREAKPOINTS } from '@/util/constants.js';

const { globalState } = useWindowResize();
const { lg } = BREAKPOINTS;
</script>

<style lang="scss" scoped>
header {
  position: relative;
}
</style>
