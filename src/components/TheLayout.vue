<template>
  <div class="wrapper">
    <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <TheFooter />
  </div>
</template>

<script setup>
  import TheHeader from './TheHeader.vue';
  import TheFooter from './TheFooter.vue';
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
