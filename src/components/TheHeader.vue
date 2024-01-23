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
  text-align: center;
  width: 100%;
  margin-bottom: 30px;

  @include md {
    margin-bottom: 40px;
  }

  @include lg {
    margin-bottom: 50px;
  }
}

.header-box {
  max-width: $max-width-primary;
  margin: auto;
}
</style>
