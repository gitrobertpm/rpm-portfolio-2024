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
  width: 119px;
  height: 100vh;
  background: $color-text-dk;
  background-image: 
      linear-gradient(to top, $color-bg-dk-glass-thick, $color-bg-dk-glass-thinner),
      conic-gradient(at 0% 0%, transparent 0deg, transparent 130deg, $color-bg-lt-glass-thinner, transparent 200deg), 
      conic-gradient(at 100% 0%, transparent 0deg, transparent 160deg, $color-bg-lt-glass-thinner, transparent 230deg);
  backdrop-filter: blur(5px);
  z-index: 9;
  &__list {
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    &__item {
      text-align: center;
      width: 100px;
      height: auto;
      &__link {
        display: flex;
        flex-flow: column nowrap;
        color: $color-text-lt;
        padding: 1rem 0;
        margin: 0.5rem auto;
        
        // border: 1px solid red;
        // Double specificity
        // &#{&} {
          // outline-offset: -1px;
        // }
        &:focus,
        &:focus-visible {
          outline: 1px solid $color-text-lt;
        }
        &:hover {
          
          box-shadow: 0 0.5px 0 $color-bg-lt-glass-thinner inset, 0 -0.5px 0 $color-bg-dk-glass-thin inset;
          &::before {
            // @include spotlights;
            // width: calc(100% + 0.5rem) !important;
            // margin-left: -0.25rem;
            margin-top: 5px;
            // min-height: calc(100% + 5px);
            // width: 100% !important;
            // margin-left: 0;
            // background-image: 
            //   conic-gradient(at 0% 0%, transparent 0deg, transparent 90deg, $color-bg-lt-glass-thinner, transparent 180deg), 
            //   conic-gradient(at 100% 0%, transparent 0deg, transparent 180deg, $color-bg-lt-glass-thinner, transparent 270deg),
            //   linear-gradient(to top, $color-bg-dk-glass-thin, transparent);
            background-image: 
              linear-gradient(to top, #000, transparent),
              conic-gradient(at 5% 5%, transparent 0deg, transparent 90deg, currentColor, transparent 180deg), 
              conic-gradient(at 95% 5%, transparent 0deg, transparent 180deg, currentColor, transparent 270deg),
              linear-gradient(to top, transparent, $color-bg-lt-glass);
          //     border-radius: 0.5rem;
          //   opacity: 1 !important;
          }
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
