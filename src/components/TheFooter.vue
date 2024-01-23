<template>
  <footer class="footer">
    <div class="footer__box">
      <span class="footer__box__note">RPM 2024</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  // background: $color-bg-dk-glass;
  // backdrop-filter: blur(5px);

  // @include lg {
  //   background: none;
  //   backdrop-filter: none;
  // }

  &__box {
    max-width: $max-width-primary;
    margin: auto;

    &__note {
      font-family: $font-cursive;
      color: transparent;
      font-weight: bold;
      background: linear-gradient(to right, $color-disabled-dk, $color-disabled-lt);
      background-clip: text;
    }
  }
}
</style>
