<template>
  <div class="intro-section-wrapper">
    <ASection 
      hero
      subheading
      text 
    >
      <template #hero>
        <img src="@/assets/img/logos/rpm-logos/rasters/rpm-logo-fill-sunset.png" alt="My Logo">
      </template>

      <template #subheading>
        <h4>Portfolio - 2024</h4>
      </template>

      <template #text>
        <div class="home-copy-wrapper">
          <p>I've worked on a number of production applications with some amazing, diverse and remote teams in <code>Agile</code>-like, <code>CI/CD</code> environments. Some of those projects live on web apps for <code>XBOX</code>, <code>Hydro Flask</code> and <code>Leatherman</code>, among others.</p>

          <p>Most of my experience is building things with <code>JavaScript</code> FE libraries, <code>React</code> and <code>Vue</code>, and styling them with <code>CSS</code>/<code>Ssas</code>. But I have worked with Backend and database technologies as well. My contributions have included new features, bug fixes, style refactors, accessibility updates, dependency and version updates, unit tests, internationalization, and documentation.</p> 

          <p>But perhaps the most valuable asset I bring is an optimistic and encouraging attitude. What fuels this positive temperament? I'm a bit of a people-pleaser. I dislike conflict and when others feel bad. And a friendly smile and good cheer tend to get <code>better results</code> than the alternative.</p>

          <p>So, whether your team is building something new, maintaining or updating something old, or just tackling tech debt, reach out. I'm happy to help. Best wishes!</p>
        </div>
      </template>
    </ASection>
  </div>
</template>

<script setup>
import ASection from '@/components/reusables/ASection.vue';
</script>

<style lang="scss">
.intro-section-wrapper {
  .section {
  border-top: none;
  box-shadow: none;

  @include md {
    border: 1px solid $color-bg-dk-glass-thinner;
    box-shadow: 0 1px 3px $color-bg-lt-glass-thinner, 0 -1px 3px $color-bg-lt-glass-thinner;
  }

  &__main {
    @include md {
      flex-flow: column nowrap;
    }
    @include lg {
      // flex-flow: row nowrap;
      // flex-direction: row-reverse;
    }
    &__body {
      @include md {
        width: 95% !important;
      }
      
      // .cutout--dk {
      //   background: #000 !important;
      // }
    }
    
  }
  

  .home-copy-wrapper {
    p {

    }
  }
}
}

</style>
