<template>
  <div class="nav-wrapper flex--row--left">
    <button 
      v-show="!navOpen"
      class="nav-toggle-btn"
      @click="toggleNav"
    >
      <IconHamburger />
    </button>

    <Transition>
      <nav 
        v-show="navOpen"
        class="nav"
      >

        <div class="btn-box flex--row--right">
          <button 
            class="btn-close"
            @click="toggleNav"
          >
            <IconClose />
          </button>
        </div>
        
        <ul class="nav__list">
          <li class="nav__list__item">
            <RouterLink 
              to="/"
              class="nav__list__item__link"
              @click="toggleNav"
            >
              <IconHome class="nav__list__item__link__icon" />
              <span class="nav__list__item__link__text">Home</span>
            </RouterLink>
          </li>

          <li class="nav__list__item">
            <RouterLink  
              to="/projects"
              class="nav__list__item__link"
              @click="toggleNav"
            >
              <IconProjects class="nav__list__item__link__icon" />
              <span class="nav__list__item__link__text">Projects</span>
            </RouterLink>
          </li>

          <li class="nav__list__item">
            <RouterLink 
              to="/about"
              class="nav__list__item__link" 
              @click="toggleNav"
            >
              <IconAbout class="nav__list__item__link__icon" />
              <span class="nav__list__item__link__text">About</span>
            </RouterLink>
          </li>

          <li class="nav__list__item">
            <RouterLink  
              to="/contact"
              class="nav__list__item__link"
              @click="toggleNav"
            >
              <IconContact class="nav__list__item__link__icon" />
              <span class="nav__list__item__link__text">Contact</span>
            </RouterLink>
          </li>

          <!-- <li class="nav__list__item">
            <RouterLink class="nav__list__item__link" to="/experience">
              <CommunityIcon class="nav__list__item__link__icon" />
              <span class="nav__list__item__link__text">Experience</span>
            </RouterLink>
          </li> -->

          <li class="nav__list__item">
            <RouterLink 
              to="/style-guide"
              class="nav__list__item__link"
              @click="toggleNav" 
            >
              <IconStyleguide class="nav__list__item__link__icon" />
              <span class="nav__list__item__link__text">Style Guide</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import IconHamburger from './icons/IconHamburger.vue';
import IconHome from './icons/IconHome.vue';
import IconProjects from './icons/IconProjects.vue';
import IconAbout from './icons/IconAbout.vue';
import IconContact from './icons/IconContact.vue';
import IconStyleguide from './icons/IconStyleguide.vue';
import IconClose from './icons/IconClose.vue';
// import DocumentationIcon from './icons/IconDocumentation.vue';
// import ToolingIcon from './icons/IconTooling.vue';
// import EcosystemIcon from './icons/IconEcosystem.vue';
// import CommunityIcon from './icons/IconCommunity.vue';
// import SupportIcon from './icons/IconSupport.vue';

const navOpen = ref(false);

function toggleNav() {
  navOpen.value = !navOpen.value;
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.nav-wrapper {
  position: relative;
}

.nav-toggle-btn {
  @include btn-reset;
  position: fixed;
  width: 42px;
  height: 42px;
  padding: 5px;
  border-radius: 5px;
  z-index: 99;
}

.nav {
  position: fixed;
  width: 100%;
  height: 100vh;
  max-width: $max-width-primary;
  background: $gradient-radial-nav;
  backdrop-filter: blur(5px);
  z-index: 9;

  @include xl {
    height: calc(100vh - 100px);
    margin: 50px auto;
    border-radius: 5px;
  }

  .btn-box {
    height: 0;
  }

  .btn-close {
    // SVG styles in source icon vue file
    position: relative;
    width: 50px;
    height: 50px;
    margin: 15px 15px 0 0;
    z-index: 999;

    &:focus,
    &:focus-visible {
      border-radius: 15px;
      outline: 2px solid $color-dodger;
      outline-offset: -5px;
    }

    &::after {
      content: "";
      pointer-events: none;
      position: absolute;
      bottom: 7px;
      left: 7px;
      width: 33px;
      height: 31px;
      background: $gradient-linear-shadow;
      border-radius: 5px;
    }
  }

  &__list {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 75px 25px;

    @include md {
      padding: 100px;
    }

    @include lg {
      padding: 150px 100px 100px;
    }

    &__item {
      text-align: center;
      width: 35%;
      height: 120px;
      padding: 35px 0;
      margin: auto 5% 50px;

      @include md {
        width: 20%;
        margin: auto 5% 50px;
      }

      &__link {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        justify-items: center;
        color: white;

        &__icon {
          width: 42px;
          height: 42px;
          margin: auto auto 10px;

          @include lg {
            width: 75px;
            height: 75px;
          }
        }

        &__text {
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
