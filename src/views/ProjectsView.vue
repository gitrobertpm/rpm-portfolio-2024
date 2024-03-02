<template>
  <main class="main main__projects">
    <h1>PROJECTS</h1>
    <ASection  
      borderless  
      hero 
      heading 
      text 
      footer
    >
      <template #hero>
        <img src="@/assets/img/logos/rpm-logos/vectors/rpm-logo-stroke-sunset.svg" width="130px" alt="My Logo">
      </template>
      <template #heading>
        <h3 class="heading"><span class="emoji" role="img" aria-label="Saw emoji">🪚</span>Under Construction<span class="emoji" role="img" aria-label="Screwdriver emoji">🪛</span></h3>
      </template>
      <template #text>
        <p>This portfolio is far enough along to share while the new Projects section is being developed.</p>
        <p>In the meantime, you can checkout the projects page of my previous portfolio <a href="https://robertpm.netlify.app/projects/my-portfolio" target="_blank">here</a>.</p>
        <p v-if="!isMobile()">Also, the mouse position is at: <code>{{ x }}</code>, <code>{{ y }}</code>.</p>
      </template>
      <template #footer>
        <p>Thanks for stopping by.<span class="emoji" role="img" aria-label="Vulcan salute emoji">🖖</span></p>
      </template>
    </ASection>
  </main>
</template>

<script setup>
import ASection from '@/components/reusables/ASection.vue';
import { useMouse } from '@/composables/useMouse.js';
import useWindowResize from '@/composables/useWindowResize.js';
import { BREAKPOINTS } from '@/util/constants.js';

const { x, y } = useMouse();
const { globalState } = useWindowResize();
const { lg } = BREAKPOINTS;

const isMobile = () => globalState.width < lg;
</script>

<style lang="scss" scoped>
.heading {
  font-size: 1.1rem;
  @include sm {
    font-size: 1.5rem;    
  }
  @include md {
    font-size: 1.75rem;    
  }
  @include lg {
    font-size: 2rem;    
  }
}
</style>
