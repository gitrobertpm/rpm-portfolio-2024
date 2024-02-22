<template>
  <main class="main main__contact">
    <h1>CONTACT</h1>
    <ASection 
      hero 
      heading 
      text 
      footer
    >
      <template #hero>
        <img src="@/assets/img/logos/rpm-logos/vectors/rpm-logo-stroke-sunset.svg" width="130px" alt="My Logo">
      </template>
      <template #heading>
        <h3>Greetings!</h3>
      </template>
      <template #text>
        <p>I'd love to hear from you.</p>
        <p>Hit me up anytime at <code>grobertpm@gmail.com</code>.</p>
        <p>Or check me out at the <code>GitHub</code> or <code>LinkedIn</code> links below.</p>
        <ul class="contact-list">
          <li class="contact-list__item">
            <a href="https://github.com/gitrobertpm" target="_blank" class="contact-list__item__link">
              <img src="@/assets/img/logos/rasters/gh.png" alt="GitHub" class="contact-list__item__link__logo github">
            </a>
          </li>
          <li class="contact-list__item">
            <a href="https://www.linkedin.com/in/robertpm/"  target="_blank" class="contact-list__item__link">
              <img src="@/assets/img/logos/rasters/li.png" alt="LinkedIn" class="contact-list__item__link__logo linkedin">
            </a>
          </li>
        </ul>
      </template>
      <template #footer>
        <p>Hey, thanks for stopping by.<span class="emoji" role="img" aria-label="Vulcan salute emoji">🖖</span></p>
      </template>
    </ASection>
  </main>
</template>

<script setup>
import ASection from '@/components/reusables/ASection.vue';
</script>

<style lang="scss" scoped>
.contact-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 160px;
  margin-bottom: 0;
  @include lg {
    justify-content: flex-end;
    margin-right: 0;
  }
  &__item {
    display: inline-block;
    @include lg {
      margin-right: 0;
    }
    &__link {
      width: 64px;
      width: 64px;
      padding: 0;
      border-radius: 50%;
      overflow: hidden;
      &__logo {
        padding: 0.6rem;
        background: #000;
      }
    }
  }
}
.emoji {
  font-size: 1.3rem;;
}
</style>
