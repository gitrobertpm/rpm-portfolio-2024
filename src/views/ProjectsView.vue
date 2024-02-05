<template>
  <main class="main main__projects">
    <h1>PROJECTS</h1>
    <ASection  
      hero 
      heading 
      text 
      footer
    >
      <template #hero>
        <img src="@/assets/img/logos/rpm-logos/rasters/rpm-logo-stroke-sunset.png" alt="My Logo">
      </template>
      <template #heading>
        <h3>Page Under Construction</h3>
      </template>
      <template #text>
        <p>I think my new portfolio is far enough along to share while I finish building the new Projects section and put on the finishing touches.</p>
        <p>In the meantime, you can checkout the projects page of my previous portfolio <a href="https://robertpm.netlify.app/projects/my-portfolio" target="_blank">here</a>.</p>
      </template>
      <template #footer>
        <p>Thanks for stopping by.<span class="emoji" role="img" aria-label="Vulcan salute emoji">🖖</span></p>
      </template>
    </ASection>
  </main>
</template>

<script setup>
import ASection from '@/components/reusables/ASection.vue';
</script>

<style lang="scss" scoped>

</style>
