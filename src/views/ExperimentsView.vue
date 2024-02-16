<template>
  <main class="main main__experiments">
    <h1>Experiments</h1>
    <ADrawer theme="lt">
      <template #heading>
        <h2>Light Drawer</h2>
      </template>
      <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </template>
    </ADrawer>

    <ADrawer theme="dk">
      <template #heading>
        <h2>Dark Drawer</h2>
      </template>
      <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </template>
    </ADrawer>

    <ADrawer>
      <template #heading>
        <h2>Clear Drawer</h2>
      </template>
      <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </template>
    </ADrawer>
  </main>
</template>

<script setup>
import ADrawer from '@/components/reusables/ADrawer.vue';
</script>

<style lang="scss" scoped></style>
