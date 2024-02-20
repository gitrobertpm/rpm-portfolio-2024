<template>
  <footer class="footer">
    <div class="footer__box">
      <span class="footer__box__note">RPM 2024</span>
      <div class="invisible__box">
        <RouterLink to="/experiments" class="invisible__link" tabindex="-1">Ex</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  background: $color-bg-dk-glass-thick;
  border-top: 1px solid $color-bg-lt-glass-thinner;
  backdrop-filter: blur(5px);
  @include md {
    background: none;
    border-top: none;
    box-shadow: none;
    backdrop-filter: none;
  }
  @include lg {
    width: calc(100% - 111px);
  }
  &__box {
    position: relative;
    max-width: $max-width-primary;
    margin: auto;
    &__note {
      font-family: $font-cursive;
      font-size: 0.75rem;
      font-weight: bold;
      color: transparent;
      background: linear-gradient(to right, $color-disabled-lt, $color-disabled-dk);
      background-clip: text;
    }
    .invisible {
      &__box {
        position: absolute;
        right: 0;
        width: 48px;
        height: 10px;
        overflow: hidden;
      }
      &__link {
        color: transparent;
        width: 48px;
        height: 10px;
        padding-top: 10px;
      }
    }
  }
}
</style>
