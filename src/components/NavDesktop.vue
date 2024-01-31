<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list__item">
        <RouterLink 
          to="/"
          class="nav__list__item__link"
        >
          <IconHome class="nav__list__item__link__icon" />
          <span class="nav__list__item__link__text">Home</span>
        </RouterLink>
      </li>

      <li class="nav__list__item">
        <RouterLink  
          to="/projects"
          class="nav__list__item__link"
        >
          <IconProjects class="nav__list__item__link__icon" />
          <span class="nav__list__item__link__text">Projects</span>
        </RouterLink>
      </li>

      <li class="nav__list__item">
        <RouterLink 
          to="/about"
          class="nav__list__item__link" 
        >
          <IconAbout class="nav__list__item__link__icon" />
          <span class="nav__list__item__link__text">About</span>
        </RouterLink>
      </li>

      <li class="nav__list__item">
        <RouterLink  
          to="/contact"
          class="nav__list__item__link"
        >
          <IconContact class="nav__list__item__link__icon" />
          <span class="nav__list__item__link__text">Contact</span>
        </RouterLink>
      </li>

      <li class="nav__list__item">
        <RouterLink 
          to="/style-guide"
          class="nav__list__item__link"
        >
          <IconStyleguide class="nav__list__item__link__icon" />
          <span class="nav__list__item__link__text">Style<br/>Guide</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import IconHome from './icons/IconHome.vue';
import IconProjects from './icons/IconProjects.vue';
import IconAbout from './icons/IconAbout.vue';
import IconContact from './icons/IconContact.vue';
import IconStyleguide from './icons/IconStyleguide.vue';
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 111px;
  height: 100vh;
  background: $color-text-dk;
  background: $gradient-radial-nav;
  backdrop-filter: blur(5px);
  z-index: 9;

  &__list {
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;

    &__item {
      text-align: center;
      width: 100px;
      height: 120px;

      &__link {
        display: flex;
        flex-flow: column nowrap;
        color: $color-text-lt;
        // Double specificity
        &#{&} {
          outline-offset: -2px;
        }

        &__icon {
          width: 42px;
          height: 42px;
          margin: auto auto 10px;
        }

        &__text {
          text-align: center;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
