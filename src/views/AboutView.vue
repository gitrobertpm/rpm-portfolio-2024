<template>
  <main class="main main__about" ref="page">
    <h1>ABOUT</h1>

    <div class="ctrl flex--row--cent">
      <button @click="handleWork" class="ctrl__btn ctrl__btn__work">Work</button>
      <button @click="handlePlay" class="ctrl__btn ctrl__btn__play">Play</button>
      <button @click="handleBio" class="ctrl__btn ctrl__btn__bio">Bio</button>
      <button @click="handlePortfolio" class="ctrl__btn ctrl__btn__port">This</button>
    </div>

    <div v-if="isMobile()" class="mobile-container">
      <Transition name="fade" mode="out-in">
        <div v-show="showPart === 'Work'" class="part-wrapper">
          <WorkPart />
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div v-show="showPart === 'Play'" class="part-wrapper">
          <PlayPart />
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div v-show="showPart === 'This'" class="part-wrapper">
          <PortfolioPart />
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div v-show="showPart === 'Bio'" class="part-wrapper">
          <BioPart />
        </div>
      </Transition>
    </div>

    <div v-if="!isMobile()" class="container flex--column--stretch">
      <div class="cube" ref="cube">
        <div class="side front" ref="front">
          <WorkPart @accordionClick="accordionClick" />
        </div>
        <div class="side back" ref="back">
          <PlayPart @accordionClick="accordionClick" />
        </div>
        <div class="side right" ref="right">
          <PortfolioPart @accordionClick="accordionClick" />
        </div>
        <div class="side left" ref="left">
          <BioPart @accordionClick="accordionClick" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import PlayPart from '@/components/partials/PlayPart.vue';
import BioPart from '@/components/partials/BioPart.vue';
import PortfolioPart from '@/components/partials/PortfolioPart.vue';
import WorkPart from '@/components/partials/WorkPart.vue';
import useWindowResize from '@/composables/useWindowResize.js';
import { BREAKPOINTS } from '@/util/constants.js';

// Screen width
const { globalState } = useWindowResize();
const { md } = BREAKPOINTS;
const isMobile = () => globalState.width < md;

// Scroll to top when mounted
const initialize = () => window.scrollTo(0,0);
onMounted(initialize);

// Listen for outer accordion opening/closing 
// and adjust page height to compensate for absolute positioned content
const page = ref(null);
const front = ref(null);
const left = ref(null);
const back = ref(null);
const right = ref(null);
const originalHeight = ref(0);

onMounted(async () => {
  await nextTick();
  originalHeight.value = page.value.offsetHeight;
});

// const emit = defineEmits(['accordionClick']);

const accordionClick = () => {
  setTimeout(() => {
    const cardHeights = [
      front.value.firstChild.offsetHeight,
      left.value.firstChild.offsetHeight,
      back.value.firstChild.offsetHeight,
      right.value.firstChild.offsetHeight
    ];
    const maxHeight = Math.max(...cardHeights);
    const multiplier = maxHeight < 1000 ? 2 : 1.5
    page.value.style.height = (maxHeight + 200) > originalHeight.value ? `${maxHeight * multiplier}px` : `${originalHeight.value}px`;
    }, 750);
};

// DISPLAY SELECTION - MOBILE
const showPart = ref('Work');

// CUBE STUFF - DESKTOP
const cube = ref(null);

// Get cube position
const getTransformVal = () => {
  const styles = window.getComputedStyle(cube.value);
  const transform = styles.getPropertyValue('transform');
  return transform;
};

// Animate cube selection transition, even on first click
const animateSelection = (transformString) => {
  cube.value.style.animation = "none";
  const transformVal = getTransformVal();
  cube.value.style.transform = transformVal;
  cube.value.style.transform = transformString;
};

// FRONT
const handleWork = (e) => {
  if (isMobile()) {
    showPart.value = e.target.textContent;
  } else {
    animateSelection('rotateY(360deg) translateZ(-300px)');
  }
};

// LEFT
const handleBio = (e) => {
  if (isMobile()) {
    showPart.value = e.target.textContent;
  } else {
    animateSelection('rotateY(90deg) translateX(300px)');
  }
};

// BACK
const handlePlay = (e) => {
  if (isMobile()) {
    showPart.value = e.target.textContent;
  } else {
    animateSelection('rotateY(180deg) translateZ(300px)');
  }
};

// RIGHT
const handlePortfolio = (e) => {
  if (isMobile()) {
    showPart.value = e.target.textContent;
  } else {
    animateSelection('rotateY(270deg) translateX(-300px)');
  }
};
</script>

<style lang="scss" scoped>
.main {
 min-height: 100vh;
}

.part-wrapper {
  width: 95%;
  margin: 3rem auto auto;
}

.ctrl {
  padding: 0 0.7rem 0 0.1rem;
  &__btn {
    width: 100px;
    font-size: 1.1rem;
    font-weight: bold;
    margin: auto 0.3rem;
    padding: 0.5rem 0.1rem 0.1rem;
    border-radius: 0;
    transform: rotate(-45deg);
    border: 3px solid transparent;
    @include sm {
      transform: rotate(0deg);
    }
    @include md {
      margin: auto 1rem;
      padding: 0.5rem;
    }
    &__work {
      color: $color-success;
      border-bottom: 3px solid $color-success;
      &:hover,
      &:focus {
        color: $color-success;
        border: 3px solid $color-success;
        box-shadow: 0.5rem 12px 0 $color-bg-success-glass inset, -0.5rem -10px 0 $color-bg-success-glass inset;
      }
    }
    &__play {
      color: $color-alert;
      border-bottom: 3px solid $color-alert;
      &:hover,
      &:focus {
        color: $color-alert;
        border: 3px solid $color-alert;
        box-shadow: 0.5rem 12px 0 $color-bg-alert-glass inset, -0.5rem -10px 0 $color-bg-alert-glass inset;
      }
    }
    &__bio {
      color: $color-dodger;
      border-bottom: 3px solid $color-dodger;
      &:hover,
      &:focus {
        color: $color-dodger;
        border: 3px solid $color-dodger;
        box-shadow: 0.5rem 12px 0 $color-bg-dodger-glass inset, -0.5rem -10px 0 $color-bg-dodger-glass inset;
      }
    }
    &__port {
      color: $color-warning;
      border-bottom: 3px solid $color-warning;
      &:hover,
      &:focus {
        color: $color-warning;
        border: 3px solid $color-warning;
        box-shadow: 0.5rem 12px 0 $color-bg-warning-glass inset, -0.5rem -10px 0 $color-bg-warning-glass inset;
      }
    }
  }
}
.container {
  position: relative;
  perspective: 3000px;
  width: 100%;
  margin-top: 75px;
}
.cube {
  width: 720px;
  height: 400px;
  margin: auto;
  transition: 0.75s ease-out;
  transform-style: preserve-3d;
  animation: cube-rotate-md 10s infinite; 
  /* animation: cube-dance 10s infinite; */
  // animation: cube-rotate 10s infinite;
  
  // @include sm {
  //   width: calc(100vw - 4rem);
  // }
  // @include sm-md-mid {
  //   width: calc(100vw - 8rem);
  // }
  // @include md {
  //   width: 720px;
  //   animation: cube-rotate-md 10s infinite; 
  //   /* animation: cube-dance 10s infinite; */
  // }
  .side {
    display: block;
    position: absolute;
    width: 720px;
    height: 210px;
    text-align: center;
    background-image: 
    linear-gradient(to top, $color-bg-dk-glass-thick, $color-bg-dk-glass-thin),
      conic-gradient(at 0% 0%, transparent 0deg, transparent 90deg, $color-bg-lt-glass-thin, transparent 180deg), 
      conic-gradient(at 100% 0%, transparent 0deg, transparent 180deg, $color-bg-lt-glass-thin, transparent 270deg);
    border-radius: 0.75rem;
    border: none;
    // @include sm {
    //   width: calc(100vw - 4rem);
    // }
    // @include sm-md-mid {
    //   width: calc(100vw - 8rem);
    // }
    // @include md {
    //   width: 720px;
    //   height: 210px;
    // }
    @include lg {
      width: 720px;
      height: 247px;
    }
  }
}
// @keyframes cube-rotate {
//   0% { transform: rotateY(0deg); }
//   25% { transform: rotateY(90deg); }
//   50% { transform: rotateY(180deg); }
//   75% { transform: rotateY(270deg); }
//   100% { transform: rotateY(360deg); }
// }
@keyframes cube-rotate-md {
  0% { transform: rotateY(0deg) translateZ( -300px ); }
  25% { transform: rotateY(90deg) translateX( 300px ); }
  50% { transform: rotateY(180deg) translateZ( 300px ); }
  75% { transform: rotateY(270deg) translateX( -300px ); }
  100% { transform: rotateY(360deg) translateZ( -300px ); }
}
// @keyframes cube-dance {
//   0% { transform: rotateX(0deg) rotateY(360deg) rotateZ(90deg); }
//   25% { transform: rotateX(90deg) rotateY(270deg) rotateZ(180deg); }
//   50% { transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg); }
//   75% { transform: rotateX(270deg) rotateY(90deg) rotateZ(360deg); }
//   100% { transform: rotateX(360deg) rotateY(0deg) rotateZ(270deg); }
// }
.cube .front  {
  // transform: rotateY( 0deg ) translateZ( calc(50vw - 1rem) );
  // @include sm {
  //   transform: rotateY( 0deg ) translateZ( calc(50vw - 2rem) );
  // }
  // @include sm-md-mid {
  //   transform: rotateY( 0deg ) translateZ( calc(50vw - 4rem) );
  // }
  @include md {
    transform: rotateY( 0deg ) translateZ( 360px );
  }
}
.cube .back {
  // transform: rotateY( 180deg ) translateZ( calc(50vw - 1rem) );
  // @include sm {
  //   transform: rotateY( 180deg ) translateZ( calc(50vw - 2rem) );
  // }
  // @include sm-md-mid {
  //   transform: rotateY( 180deg ) translateZ( calc(50vw - 4rem) );
  // }
  @include md {
    transform: rotateY( 180deg ) translateZ( 360px );
  }
}
.cube .right  {
  // transform: rotateY(  90deg ) translateZ( calc(50vw - 1rem) );
  // @include sm {
  //   transform: rotateY( 90deg ) translateZ( calc(50vw - 2rem) );
  // }
  // @include sm-md-mid {
  //   transform: rotateY( 90deg ) translateZ( calc(50vw - 4rem) );
  // }
  @include md {
    transform: rotateY( 90deg ) translateZ( 360px );
  }
}
.cube .left   {
  // transform: rotateY( -90deg ) translateZ( calc(50vw - 1rem) );
  // @include sm {
  //   transform: rotateY( -90deg ) translateZ( calc(50vw - 2rem) );
  // }
  // @include sm-md-mid {
  //   transform: rotateY( -90deg ) translateZ( calc(50vw - 4rem) );
  // }
  @include md {
    transform: rotateY( -90deg ) translateZ( 360px );
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
