<template>
  <main class="main main__contact">
    <h1>CONTACT</h1>

    <ASection 
      light 
      hero 
      heading 
      subheading 
      text 
      footer
    >
      <template #hero>
        <img src="@/assets/img/logos/rpm-logos/rasters/rpm-logo-offset.png" alt="My Logo">
      </template>

      <template #heading>
        <h2>Greetings!</h2>
      </template>

      <template #subheading>
        <h3>Love to hear from you.</h3>
      </template>

      <template #text>
        <ul>
          <li>grobertpm@gmail.com</li>
        </ul>
      </template>

      <template #footer>
        <p><b>Section footer:</b> for <a href="Links">Links</a>, <button style="border: 1px solid rgba(0, 0, 0, 0.1)">Buttons</button>, notes, or whatever.</p>
      </template>

    </ASection>

  </main>
</template>

<script setup>
import ASection from '@/components/reusables/ASection.vue';
</script>

<style lang="scss" scoped>

</style>