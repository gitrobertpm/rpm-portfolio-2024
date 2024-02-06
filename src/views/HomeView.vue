<template>
  <main class="main main__home">
    <div class="logo-box">
      <a href="https://github.com/gitrobertpm" target="_blank" class="social-link">
        <img src="@/assets/img/logos/rasters/gh.png" alt="GitHub" class="logo github">
      </a>
      <a href="https://www.linkedin.com/in/robertpm/"  target="_blank" class="social-link">
        <img src="@/assets/img/logos/rasters/li.png" alt="LinkedIn" class="logo linkedin">
      </a>
    </div>
    <div class="name-title-container">
      <div class="name" lang="en">

        <!-- <div class="avatar-frame">
          <div class="avatar-mat">
            <img alt="Me" class="avatar" src="@/assets/img/pics/me-jan-2024.jpg" />
          </div>
        </div> -->

        <h1 class="title Web__W">W</h1>
        <h1 class="title Web__e">e</h1>
        <h1 class="title Web__b">b</h1>

        <h1 class="title De__D">D</h1>
        <h1 class="title De__e">e</h1>

        <div class="name-box name__first">
          <h1 class="initial name__first__initial">R</h1>
          <h1 class="remainder name__first__remainder">obert</h1>
        </div>

        <h1 class="title vel__v">v</h1>
        <h1 class="title vel__e">e</h1>
        <h1 class="title vel__l">l</h1>

        <div class="name-box name__middle">
          <h1 class="initial name__middle__initial">P</h1>
        </div>

        <div class="name-box name__last">
          <h1 class="initial name__last__initial">M</h1>
          <h1 class="remainder name__last__remainder">anolis</h1>
        </div>

        <h1 class="title oper__o">o</h1>
        <h1 class="title oper__p">p</h1>
        <h1 class="title oper__e">e</h1>
        <h1 class="title oper__r">r</h1>

      </div>
    </div>
    <div class="greeting-wrapper">
      <HomeGreetingPart />
    </div>
  </main>
</template>

<script setup>
import HomeGreetingPart from '@/components/partials/HomeGreetingPart.vue';
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  min-height: 100vh;
}
.greeting-wrapper {
  margin-top: 275px;
  opacity: 0;
  animation: fade-in 2s ease-out 5s forwards;
  @include md {
    margin-top: 245px;
  }
  @include lg {
    margin-top: 265px;
  }
}
// SOCIAL MEDIA LINKS --------------------------------------------------------------------------------
.logo-box {
  position: absolute;
  top: 19px;
  right: 19px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 80px;
  height: 42px;
  perspective: 250px;
  @include lg {
    width: 90px;
    top: 30px;
    right: 35px;
  }
  .logo {
    width: 30px;
    transform-style: preserve-3d;
  }
}
// NAME TITLE ---------------------------------------------------------------------------------------
.name-title-container {
  width: 100%;
  min-width: 320px;
  max-width: 320px;
  margin: 125px auto;
  animation: scale-and-slide 4s ease-in-out 3s forwards;
  @include md {
    max-width: 350px;
    margin: 150px auto;
    animation: scale-and-slide-md 4s ease-in-out 3s forwards;
  }
  @include lg {
    animation: scale-and-slide-lg 4s ease-in-out 3s forwards;
  }
}
// NAME --------------------------------------------------------------------------------------------------
.name {
  position: relative;
  width: 100%;
  .name-box {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: auto;
    h1 {
      display: inline-block;
      font-size: 4rem;
      letter-spacing: 0.25rem;
      padding: 0;
      margin: 0;
      @include lg {
        letter-spacing: 0.35rem;
      }
    }
  }
  .initial {
    background-size: 75%;
    opacity: 0;
  }
  .remainder {
    background-size: 30%;
    opacity: 0;
    animation: fade-in 1s ease-in-out 2.5s forwards;
  }
  &__first {
    left: calc(30% - 40px);
    animation: fname-position-uno 1.5s ease-in-out 1s forwards, fname-position-dos 1s ease-out 3s forwards, fname-position-tres 3s ease-in-out 4s forwards;
    @include md {
      animation: fname-position-uno 1.5s ease-in-out 1s forwards, fname-position-dos-md 1s ease-out 3s forwards, fname-position-tres-md 3s ease-in-out 4s forwards;
    }
    @include lg {
      animation: fname-position-uno 1.5s ease-in-out 1s forwards, fname-position-dos-lg 1s ease-out 3s forwards, fname-position-tres-lg 3s ease-in-out 4s forwards;
    }
    &__initial {
      animation: fade-in 1s ease-in-out forwards;
    }
  }
  &__middle {
    left: calc(55% - 40px);
    animation: mname-position-uno 1.5s ease-in-out 1s forwards;
    @include md {
      left: calc(57% - 40px);
      animation: mname-position-uno-md 1.5s ease-in-out 1s forwards;
    }
    @include lg {
      left: calc(59% - 40px);
      animation: mname-position-uno-lg 1.5s ease-in-out 1s forwards;
    }
    &__initial {
      animation: fade-in 1s ease-in-out 0.05s forwards, fade-out 0.75s ease-in-out 3s forwards;
    }
    &__remainder {
      visibility: hidden;
    }
  }
  &__last {
    left: calc(75% - 40px);
    white-space: nowrap;
    animation: lname-position-uno 1.5s ease-in-out 1s forwards, lname-position-dos 3s ease-in-out 4s forwards;
    @include md {
      left: calc(80% - 40px);
      animation: lname-position-uno-md 1.5s ease-in-out 1s forwards, lname-position-dos-md 3s ease-in-out 4s forwards;
    }
    @include lg {
      left: calc(85% - 40px);
      animation: lname-position-uno-lg 1.5s ease-in-out 1s forwards, lname-position-dos-lg 3s ease-in-out 4s forwards;
    }
    &__initial {
      animation: fade-in 1s ease-in-out 0.10s forwards;
    }
  }
}
// TITLE ---------------------------------------------------------------------------------------------------
.title {
  position: absolute;
  font-size: 3.75rem;
  text-shadow: 0 1px 0 $color-bg-lt-glass;
  padding: 0;
  margin:  0;
  background: none;
  opacity: 0;
  animation: fade-in 1s ease-in-out 4s forwards;
  @include lg {
    text-shadow: 0 1px 0 $color-bg-lt-glass-thick;
  }
  &.Web {
    &__W {
      text-shadow: 0 1px 0 $color-bg-dk-glass;
      animation: fade-in 1s ease-in-out 3.5s forwards, boot 0.5s ease-out 8s forwards;
      top: -99px;
      left: 110px;
      @include md {
        top: -109px;
        left: 115px;
      }
      @include lg {
        text-shadow: 0 1px 0 $color-bg-dk-glass-thick;
        top: -120px;
        left: 124px;
      }
    }
    &__e {
      text-shadow: 0 1px 0 $color-bg-dk-glass;
      animation: fade-in 1s ease-in-out 3.5s forwards, boot 0.5s ease-out 8s forwards;
      top: -57px;
      left: 125px;
      @include md {
        top: -63px;
        left: 130px;
      }
      @include lg {
        text-shadow: 0 1px 0 $color-bg-dk-glass-thick;
        top: -67px;
        left: 142px;
      }
    }
    &__b {
      text-shadow: 0 1px 0 $color-bg-dk-glass;
      animation: fade-in 1s ease-in-out 3.5s forwards, boot 0.5s ease-out 8s forwards;
      top: 2px;
      left: 124px;
      @include md {
        top: 3px;
        left: 132px;
      }
      @include lg {
        text-shadow: 0 1px 0 $color-bg-dk-glass-thick;
        top: 2px;
        left: 145px;
      }
    }
  }
  &.De {
    &__D {
      top: -40px;
      left: 168px;
      @include md {
        top: -47px;
        left: 179px;
      }
      @include lg {
        top: -51px;
        left: 194px;
      }
    }
    &__e {
      top: 3px;
      left: 170px;
      // z-index: 9;
      @include md {
        top: 4px;
        left: 180px;
      }
      @include lg {
        top: 3px;
        left: 196px;
      }
    }
  }
  &.vel {
    &__v {
      top: 52px;
      left: 173px;
      @include md {
        top: 52px;
        left: 183px;
      }
      @include lg {
        top: 58px;
        left: 198px;
      }
    }
    &__e {
      top: 99px;
      left: 173px;
      z-index: -9;
      @include md {
        top: 101px;
        left: 182px;
      }
      @include lg {
        top: 111px;
        left: 196px;
      }
    }
    &__l {
      top: 157px;
      left: 181px;
      @include md {
        top: 167px;
        left: 191px;
      }
      @include lg {
        top: 180px;
        left: 208px;
      }
    }
  }
  &.oper {
    &__o {
      top: 201px;
      left: 172px;
      z-index: -9;
      @include md {
        top: 218px;
        left: 183px;
      }
      @include lg {
        top: 233px;
        left: 199px;
      }
    }
    &__p {
      top: 255px;
      left: 175px;
      @include md {
        top: 271px;
        left: 187px;
      }
      @include lg {
        top: 289px;
        left: 201px;
      }
    }
    &__e {
      top: 310px;
      left: 173px;
      @include md {
        top: 337px;
        left: 182px;
      }
      @include lg {
        top: 356px;
        left: 196px;
      }
    }
    &__r {
      top: 355px;
      left: 175px;
      @include md {
        top: 388px;
        left: 185px;
      }
      @include lg {
        top: 409px;
        left: 199px;
      }
    }
  }
}
// PROFILE PIC --------------------------------------------------------------------------------------------
.avatar-frame {
  position: absolute;
  top: 300px;
  left: 42px;
  width: 100px;
  border-radius: 0.5rem;
  overflow: hidden;
  opacity: 0;
  animation: fade-in 1s ease-in-out 4.5s forwards;
  @include md {
    top: 325px;
    left: 21px;
    width: 125px;
  }
  @include lg {
    top: 360px;
    left: 17px;
  }
  .avatar-mat {
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 110%;
      background: linear-gradient(to bottom, $color-bg-dk-glass-thin, $color-bg-dk-glass-thinner, $color-bg-dk-glass);
    }
  }
  .avatar {
    margin: -15px auto 8px;
    transform: scale(1.5);
  }
}
// ANIMATIONS -----------------------------------------------------------------------------------------------
@keyframes boot {
  0% {
    filter: drop-shadow(0 -1px 0 rgba(248, 248, 248, 0.9)) drop-shadow(0 2px 0 rgba(24, 24, 24, 0.9));
  }
  80% {
    filter: drop-shadow(0 -1px 0 rgba(248, 248, 248, 0.9)) drop-shadow(0 2px 0 rgba(24, 24, 24, 0.9)) drop-shadow(1px 0 1px $color-text-lt);
  }
  85% {
    filter: drop-shadow(0 -1px 0 rgba(248, 248, 248, 0.9)) drop-shadow(0 2px 0 rgba(24, 24, 24, 0.9));
  }
  90% {
    filter: drop-shadow(0 -1px 0 rgba(248, 248, 248, 0.9)) drop-shadow(0 2px 0 rgba(24, 24, 24, 0.9)) drop-shadow(1px 0 1px $color-text-lt);
  }
  95% {
    filter: drop-shadow(0 -1px 0 rgba(248, 248, 248, 0.9)) drop-shadow(0 2px 0 rgba(24, 24, 24, 0.9));
  }
  100% {
    filter: drop-shadow(0 -1px 0 rgba(248, 248, 248, 0.9)) drop-shadow(0 2px 0 rgba(24, 24, 24, 0.9)) drop-shadow(1px 0 0 $color-text-lt);
    color: black;
  }
}
@keyframes scale-and-slide {
  from {
    transform: scale(1) translateX(0) translateY(0);
  }
  to {
    transform: scale(0.6) translateX(205px) translateY(0);
  }
}
@keyframes scale-and-slide-md {
  from {
    transform: scale(1) translateX(0) translateY(0);
  }
  to {
    transform: scale(0.7) translateX(400px) translateY(0px);
  }
}
@keyframes scale-and-slide-lg {
  from {
    transform: scale(1) translateX(0) translateY(0);
  }
  to {
    transform: scale(0.8) translateX(400px) translateY(0px);
  }
}
@keyframes fname-position-uno {
  from {
    left: calc(30% - 40px);
  }
  to {
    left: 1.5rem;
  }
}
@keyframes fname-position-dos {
  from {
    translate: 0 0;
  }
  to {
    translate: 3px 97px;
  }
}
@keyframes fname-position-dos-md {
  from {
    translate: 0 0;
  }
  to {
    translate: 2px 98px;
  }
}
@keyframes fname-position-dos-lg {
  from {
    translate: 0 0;
  }
  to {
    translate: -1px 109px;
  }
}
@keyframes fname-position-tres {
  from {
    translate: 3px 97px;
  }
  to {
    translate: -300px 0px;
  }
}
@keyframes fname-position-tres-md {
  from {
    translate: 3px 97px;
  }
  to {
    translate: -700px -110px;
  }
}
@keyframes fname-position-tres-lg {
  from {
    translate: 3px 97px;
  }
  to {
    translate: -700px -110px;
  }
}
@keyframes mname-position-uno {
  from {
    left: calc(55% - 40px);
    translate: 0 0;
  }
  to {
    left: 1.3rem;
    translate: 0 100px;
  }
}
@keyframes mname-position-uno-md {
  from {
    left: calc(57% - 40px);
    translate: 0 0;
  }
  to {
    left: 1.3rem;
    translate: 0 115px;
  }
}
@keyframes mname-position-uno-lg {
  from {
    left: calc(59% - 40px);
    translate: 0 0;
  }
  to {
    left: 1.3rem;
    translate: 0 120px;
  }
}
@keyframes lname-position-uno {
  from {
    left: calc(75% - 40px);
    translate: 0 0;
  }
  to {
    left: 0.7rem;
    translate: 0 200px;
  }
}
@keyframes lname-position-uno-md {
  from {
    left: calc(80% - 40px);
    translate: 0 0;
  }
  to {
    left: 0.7rem;
    translate: 0 215px;
  }
}
@keyframes lname-position-uno-lg {
  from {
    left: calc(85% - 40px);
    translate: 0 0;
  }
  to {
    left: 0.7rem;
    translate: 0 230px;
  }
}
@keyframes lname-position-dos {
  from {
    left: 0.7rem;
    translate: 0 200px;
  }
  to {
    left: 0.7rem;
    translate: -235px 100px;
  }
}
@keyframes lname-position-dos-md {
  from {
    left: 0.7rem;
    translate: 0 200px;
  }
  to {
    left: 0.7rem;
    translate: -685px -5px;
  }
}
@keyframes lname-position-dos-lg {
  from {
    left: 0.7rem;
    translate: 0 200px;
  }
  to {
    left: 0.7rem;
    translate: -685px -5px;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes rotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
