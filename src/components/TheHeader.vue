<template>
  <header class="header">
    <div class="header-box">
      <!-- <img alt="RPM logo" class="logo" src="@/assets/img/logos/rpm-logo-blue.svg" width="125" height="125" /> -->
      <TheNav />
    </div>
  </header>
</template>

<script setup>
import TheNav from './TheNav.vue';
</script>

<style lang="scss" scoped>
header {
  background: $color-bg-dk;
  background: linear-gradient(to bottom, $color-bg-dk-glass, $color-bg-dk);
  backdrop-filter: blur(5px);
}

.header-box {
  max-width: $max-width-primary;
  margin: auto;
}
</style>
