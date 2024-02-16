<template>
  <div :class="`drawer-wrapper drawer-wrapper--${ theme }`">
    <!-- 
      Flexible, responsive, animated accordion component to hold click-through-content
      Props used to determine theme: 'clr', 'lt', 'dk' - ALL STRINGS - defaults to 'clr'
    -->
    <div :class="`drawer drawer--${ theme }`">
      <button 
        :class="`drawer__btn drawer__btn--${ theme }`"
        ref="drawerBtn"
        :aria-expanded="isExpanded"
        @click="handleDrawerBtn"
      >
        <slot name="heading"></slot>
        <IconArrowHead :style="arrowStyles" :class="`arrow arrow--${ theme }`" ref="arrow" />
      </button>
      <div :style="contentStyles" :class="`drawer__content drawer__content--${ theme }`" ref="drawerContent">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import IconArrowHead from '@/components/icons/IconArrowHead.vue';

defineProps({
  theme: {
    type: String,
    default: "clr"
  }
});

const drawerBtn = ref(null);
const drawerContent = ref(null);
const isExpanded = ref(true);
const haveCapturedHeight = ref(false);
const originalContentHeight = ref(0);

onMounted( async() => {
  originalContentHeight.value = drawerContent.value.offsetHeight;
  await nextTick();
  haveCapturedHeight.value = true;
  isExpanded.value = false;
});

const newContentHeight = () => {
  if (!haveCapturedHeight.value) {
    return 'auto';
  } else {
    return isExpanded.value ? `${originalContentHeight.value}px` : '0px';
  }
};

const contentStyles = computed(() => {
  return {
    height: newContentHeight()
  };
});

const arrowStyles = computed(() => {
  return {
    transform: isExpanded.value ? 'rotateX(180deg)' : 'rotateX(0deg)'
  };
});

const handleDrawerBtn = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style lang="scss" scoped>
.drawer-wrapper {
  &--lt {
    background: #fff;
    border-radius: 0 0.75rem 0.75rem 0;
    @include md {
      border-radius: 0 4rem 4rem 0;
    }
  }
  &--dk {
    color: $color-text-lt;
    background: #000;
    border-radius: 0.75rem 0 0 0.75rem;
    @include md {
      border-radius: 4rem 0 0 4rem;
    }
  }
  .drawer {
    &__btn {
      perspective: 200px;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0.25rem 0.75rem;
      &:hover,
      &:focus {
        border-color: transparent;
        box-shadow: none;
      }
      &:focus-visible {
        border-color: transparent;
        outline-offset: -5px;
        outline-width: 5px;
      }
      &--lt {
        perspective-origin: left;
        color: $color-text-dk;
        padding-left: 75px;
        border-radius: 0 0.75rem 0.75rem 0;
        @include md {
          border-radius: 0 4rem 4rem 0;
        }
      }
      &--dk {
        perspective-origin: right;
        color: $color-text-lt;
        border-radius: 0.75rem 0 0 0.75rem;
        @include md {
          border-radius: 4rem 0 0 4rem;
        }
      }
      &--clr {
        perspective-origin: right;
        color: transparent;
        padding-right: 50px;
        text-shadow: 0 1px 0 $color-bg-lt-glass-thick;
        filter: drop-shadow(0 1px 0 $color-bg-dk-glass-thick) drop-shadow(0 -1px 0 $color-bg-dk-glass-thick);
      }
      .arrow {
        display: inline-block;
        width: 35px;
        height: 35px;
        transition: 0.5s ease-in;
        &--lt {
          position: absolute;
          top: calc(50% - 17px);
          left: 1rem;
          filter: drop-shadow(0 -3px 0 $color-text-lt);
          @include md {
            left: 3rem;
          }
        }
        &--dk {
          position: absolute;
          top: calc(50% - 17px);
          right: 1rem;
          filter: drop-shadow(0 3px 1px $color-text-dk);
          @include md {
            right: 3rem;
          }
        }
        &--clr {
          position: absolute;
          top: calc(50% - 17px);
          right: 1rem;
          color: $color-text-lt;
          // filter: drop-shadow(0 1px 0 $color-bg-dk-glass-thinner);
        }
      }
    }
    &__content {
      padding: 0 1rem;
      transition: 0.7s ease;
      overflow: hidden;
      @include md {
        padding: 0 3rem 1rem;
      }
      &--clr {
        padding: 0;
      }
    }
  }
}
</style>