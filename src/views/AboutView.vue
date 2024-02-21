<template>
  <main class="main main__about" ref="page">
    <h1 id="tab-heading">ABOUT</h1>

    <div class="intro">
      <div class="cutout--dk--fat avatar-wrapper">
        <div class="avatar-frame">
          <div class="avatar-mat">
            <img alt="Me" class="avatar" src="@/assets/img/pics/me-jan-2024.jpg" />
          </div>
        </div>
      </div>
      <div class="cutout--lt--fat greeting-wrapper">
        <h3>Greetings!</h3>
        <p>I'm Robert Manolis, your friendly neighborhood web developer.</p>
      </div>
    </div>
    
    <div class="ctrl">
      <div class="tab-list-wrapper cutout--dk">
        <div class="tab-list  flex--row--cent" role="tablist" aria-labelledby="tab-heading">
          <button 
            id="tab-work"
            class="ctrl__btn ctrl__btn__work" 
            ref="workBtn"
            role="tab"
            :aria-selected="isMobile() ? true : false"
            aria-controls="tabpanel-work"
            @click="handleTab" 
            @focus="handleTab"
            @keydown.left="focusPrevTab"
            @keydown.right="focusNextTab"
          >Work</button>
          <button 
            id="tab-play"
            class="ctrl__btn ctrl__btn__play" 
            ref="playBtn"
            role="tab"
            aria-selected="false"
            aria-controls="tabpanel-play"
            tabindex="-1"
            @click="handleTab" 
            @focus="handleTab"
            @keydown.left="focusPrevTab"
            @keydown.right="focusNextTab"
          >Play</button>
          <button 
            id="tab-bio"
            class="ctrl__btn ctrl__btn__bio" 
            ref="bioBtn"
            role="tab"
            aria-selected="false"
            aria-controls="tabpanel-bio"
            tabindex="-1"
            @click="handleTab"
            @focus="handleTab"
            @keydown.left="focusPrevTab"
            @keydown.right="focusNextTab"
          >Bio</button>
          <button 
            id="tab-this"
            class="ctrl__btn ctrl__btn__port" 
            ref="thisBtn"
            role="tab"
            aria-selected="false"
            aria-controls="tabpanel-this"
            tabindex="-1"
            @click="handleTab" 
            @focus="handleTab"
            @keydown.left="focusPrevTab"
            @keydown.right="focusNextTab"
          >This</button>
        </div>
      </div>
    </div>

    <div v-if="isMobile()" class="mobile-container">
      <Transition name="fade" mode="out-in">
        <div 
          v-show="showPart === 'work' || showPart === 'showAll'" 
          id="tabpanel-work"
          class="part-wrapper"
          ref="workPanel"
          role="tabpanel" 
          aria-labelledby="tab-work"
        >
          <WorkPart />
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div 
          v-show="showPart === 'play' || showPart === 'showAll'" 
          id="tabpanel-play"
          class="part-wrapper"
          ref="playPanel"
          role="tabpanel" 
          aria-labelledby="tab-play"
        >
          <PlayPart />
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div 
          v-show="showPart === 'this' || showPart === 'showAll'" 
          id="tabpanel-this"
          class="part-wrapper"
          ref="thisPanel"
          role="tabpanel" 
          aria-labelledby="tab-this"
        >
          <PortfolioPart />
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div 
          v-show="showPart === 'bio' || showPart === 'showAll'" 
          id="tabpanel-bio"
          class="part-wrapper"
          ref="bioPanel"
          role="tabpanel" 
          aria-labelledby="tab-bio"
        >
          <BioPart />
        </div>
      </Transition>
    </div>

    <div v-if="!isMobile()" class="container flex--column--stretch">
      <div :class="['cube', {'cube-animation': isAnimated}]" ref="cube">
        <div 
          id="tabpanel-work" 
          class="side front" 
          ref="workPanel"
          role="tabpanel" 
          aria-labelledby="tab-work"
        >
          <WorkPart />
        </div>
        <div 
          id="tabpanel-play" 
          class="side back" 
          ref="playPanel"
          role="tabpanel" 
          aria-labelledby="tab-play"
        >
          <PlayPart />
        </div>
        <div 
          id="tabpanel-this" 
          class="side right" 
          ref="thisPanel"
          role="tabpanel" 
          aria-labelledby="tab-this"
        >
          <PortfolioPart />
        </div>
        <div 
          id="tabpanel-bio" 
          class="side left" 
          ref="bioPanel"
          role="tabpanel" 
          aria-labelledby="tab-bio"
        >
          <BioPart />
        </div>
      </div>
      <Transition name="fade" mode="out-in">
        <button 
          v-if="!isMobile() && !isAnimated"
          class="replay-btn" 
          :disabled="isAnimated"
          title="Reanimate"
          @click="handleReplay"
        >
          <IconReplay />
        </button>
      </Transition>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import PlayPart from '@/components/partials/PlayPart.vue';
import BioPart from '@/components/partials/BioPart.vue';
import PortfolioPart from '@/components/partials/PortfolioPart.vue';
import WorkPart from '@/components/partials/WorkPart.vue';
import IconReplay from '@/components/icons/IconReplay.vue';

// Screen width
import useWindowResize from '@/composables/useWindowResize.js';
import { BREAKPOINTS } from '@/util/constants.js';
const { globalState } = useWindowResize();
const { lg } = BREAKPOINTS;
const isMobile = () => globalState.width < lg;
const scrollToTop = () => window.scrollTo(0,0);

const isAnimated = ref(true);

// Briefly display all parts so height values can be collected and stored
const showPart = ref('showAll');

// Element refs
const page = ref(null);
const cube = ref(null);

const workBtn = ref(null);
const bioBtn = ref(null);
const playBtn = ref(null);
const thisBtn = ref(null);
const tabs = [workBtn, playBtn, bioBtn, thisBtn];

const workPanel = ref(null);
const playPanel = ref(null);
const bioPanel = ref(null);
const thisPanel = ref(null);
const panels = [workPanel, playPanel, bioPanel, thisPanel];

// Make active panel's children focusable
const setPanelFocusables = (topic) => {
  panels.forEach(panel => {
    const panelEl = panel.value;
    const btns = panelEl.querySelectorAll('button');
    [...btns].forEach(btn => {
      if (panel.value.id.includes(topic)) {
        btn.removeAttribute('tabindex');
      } else {
        btn.setAttribute('tabindex', '-1');
      }
    });
  });
};

onMounted(async() => {
  scrollToTop();
  await nextTick();
  if (isMobile()) {
    showPart.value = 'work';
    workBtn.value.focus();
    setPanelFocusables('work');
  }
});

// Cube sides - DESKTOP
// const front = ref(null);
// const left = ref(null);
// const back = ref(null);
// const right = ref(null);

// Responding to accordion emit to handle page size for absolute positioned content - Desktop only
// const accordionClick = () => {
//   setTimeout(() => {
//     const cardHeights = [
//       front.value.firstChild.offsetHeight,
//       left.value.firstChild.offsetHeight,
//       back.value.firstChild.offsetHeight,
//       right.value.firstChild.offsetHeight
//     ];
//     const maxHeight = Math.max(...cardHeights);
//     const headroom = 1000 + maxHeight;
//     const newHeight = headroom > originalHeight.value ? headroom : originalHeight.value;
//     page.value.style.height = `${newHeight}px`;
//     }, 636);
// };

// DESKTOP CUBE STUFF
// Get cube position
const getTransformVal = () => {
  const styles = window.getComputedStyle(cube.value);
  const transform = styles.getPropertyValue('transform');
  return transform;
};

// Animate cube selection transition, even on first click
const animateSelection = (transformString) => {
  const transformVal = getTransformVal();
  isAnimated.value = false;
  cube.value.style.transform = transformVal;
  setTimeout(() => {
    cube.value.style.transform = transformString;
  }, 10);
};

// Cube positions - values need to match cube animation conclusions
const cubeTransforms = {
  work: 'rotateY(360deg) translateZ(-300px)',
  bio: 'rotateY(90deg) translateX(300px)',
  play: 'rotateY(180deg) translateZ(300px)',
  this: 'rotateY(270deg) translateX(-300px)'
};

const handleTab = (e) => {
  const tabName = e.target.textContent.toLowerCase();
  tabs.forEach(tab => {
    if (tabName === tab.value.textContent.toLowerCase()) {
      tab.value.removeAttribute('tabindex');
      tab.value.setAttribute('aria-selected', 'true');
    } else {
      tab.value.setAttribute('aria-selected', 'false');
      tab.value.setAttribute('tabindex', '-1');
    }
  });
  if (isMobile()) {
    if (showPart.value !== tabName) {
      showPart.value = 'none';
      setTimeout(() => {
        showPart.value = tabName;
      }, 500);
    }
  } else {
    animateSelection(cubeTransforms[tabName]);
  }
  setPanelFocusables(tabName);
}

const focusNextTab = (e) => {
  const currentBtn = e.target.textContent.toLowerCase();
  const currentIndex = tabs.findIndex(t => t.value.textContent.toLowerCase().includes(currentBtn));
  const newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
  tabs[newIndex].value.focus();
};

const focusPrevTab = (e) => {
  const currentBtn = e.target.textContent.toLowerCase();
  const currentIndex = tabs.findIndex(t => t.value.textContent.toLowerCase().includes(currentBtn));
  const newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
  tabs[newIndex].value.focus();
};

const handleReplay = () => {
  const transformVal = getTransformVal();
  cube.value.style.transform = transformVal;
  cube.value.style.transform = cubeTransforms.work;
  setTimeout(() => {
    isAnimated.value = true;
  }, 750);
};
</script>

<style lang="scss" scoped>
.main {
 min-height: 100vh;
 @include lg {
  min-height: 2700px;
 }
}
.intro {
  padding: 0 0.5rem;
  @include sm {
    padding: 0 1rem;
  }
  .avatar-wrapper {
    padding: 1rem 2rem;
    margin: 0 auto;
    .avatar-frame {
    width: 100px;
    margin: 1rem auto;
    border-radius: 0.5rem;
    overflow: hidden;
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
  }
  .greeting-wrapper {
    margin: 0 auto auto;
    padding: 0.25rem 1rem 1rem;
    @include sm {
      padding: 0.25rem 3rem 1.5rem;
    }
    @include lg {
      margin-left: auto;
      background: #fff;
    }
    h3 {
      text-align: center;
    }
    p {
      @include lg {
        text-align: center;
        margin: auto;
      }
    }
  }
}
.ctrl {
  padding: 0 0.5rem;
  @include sm {
    padding: 0 1rem;
  }
  .tab-list-wrapper {
    margin: 0 auto;
  }
  .tab-list {
    justify-content: space-around;
    max-width: 850px;
    padding: 0.5rem 0.7rem 2rem 0.1rem;
    margin: 0 auto;
    @include md {
      padding: 1rem 0.7rem 2.5rem 0.1rem;
    }
    @include lg {
      padding: 1rem 0.5rem 2.5rem;
    }
  }
  &__btn {
    width: 100px;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 1rem 0.3rem;
    padding: 0.5rem 0.1rem 0.1rem;
    border-radius: 0;
    transform: rotate(-45deg);
    border: 3px solid transparent;
    &:focus-visible {
      outline: 3px solid $color-text-lt;
    }
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
.part-wrapper {
  width: 95%;
  margin: 1rem auto 1rem;
}
.container {
  position: relative;
  perspective: 3000px;
  width: 100%;
  margin-top: 25px;
  .cube {
    width: 720px;
    height: 300px;
    margin: auto;
    transition: 0.75s ease-out;
    transform-style: preserve-3d;
    .side {
      display: block;
      position: absolute;
      width: 720px;
      height: 160px;
      text-align: center;
      background-image: 
      linear-gradient(to top, $color-bg-dk-glass-thick, $color-bg-dk-glass-thin),
        conic-gradient(at 0% 0%, transparent 0deg, transparent 90deg, $color-bg-lt-glass-thin, transparent 180deg), 
        conic-gradient(at 100% 0%, transparent 0deg, transparent 180deg, $color-bg-lt-glass-thin, transparent 270deg);
      border-radius: 0.75rem;
      border: none;
    }
  }
  .cube-animation {
    transition: 0.75s ease-out;
    animation: cube-rotate 10s infinite;
  }
  .replay-btn {
    position: absolute;
    top: -127px;
    right: 1rem;
    width: 75px;
    height: 75px;
    padding: 0.75rem;
    color: $color-special-dk;
    background: none;
    border-radius: 50%;
    border: 3px solid transparent;
    transition: 0.75s ease-out;
    @include xl {
      right: calc(50% - 480px);
    }
    &:hover,
    &:focus {
      color: $color-special;
      border-color: $color-special-dk;
      box-shadow: none;
    }
    &:focus-visible {
      outline: 3px solid $color-text-lt;
    }
    &:disabled {
      color: $color-disabled-lt;
      border-color: transparent;
      box-shadow: none;;
    }
  }
}

@keyframes cube-rotate {
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
  @include md {
    transform: rotateY( 0deg ) translateZ( 360px );
  }
}
.cube .back {
  @include md {
    transform: rotateY( 180deg ) translateZ( 360px );
  }
}
.cube .right  {
  @include md {
    transform: rotateY( 90deg ) translateZ( 360px );
  }
}
.cube .left   {
  @include md {
    transform: rotateY( -90deg ) translateZ( 360px );
  }
}
.fade-enter-active {
  transition: 0.5s ease;
}
.fade-leave-active {
  transition: 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
