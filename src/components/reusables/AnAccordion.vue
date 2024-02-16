<template>
  <div 
    :style="mainContainerStyle" 
    :class="[
      `accordion accordion--${ theme }`,
      'main-container',
      { 'borderless' : borderless }
    ]">
    <!-- 
      !NOTE! - Consider using `ADrawer` element instead for improved functionality
      Flexible, responsive, animated accordion component to hold click-through-content
      Props used to determine theme: 'clr', 'lt', 'dk' - ALL STRINGS - defaults to 'clr'
      Props used to determine button theme: 'lt', 'dk' - STING - defaults to ''
      Prop used to determine type: 'borderless' - BOOLEAN
      Props used to include children: 'heading', 'text', 'footer' - ALL BOOLEANS 
    -->
    <div :class="`accordion__body--${ theme }`">
      <div :class="`accordion__controller--${ theme }`">
        <button 
          :class="`accordion__controller__btn--${ theme } btn--${ btnTheme }`"
          @click="toggleAccordion"
          title="More..."
        >
          <IconArrowHead :class="accordionOpen ? 'arrow-up' : 'arrow-down'" />
        </button>
      </div>
      <div :style="contentWrapperStyle" class="content-wrapper">
        <!-- h4 or h4 -->
        <div v-if="heading" class="accordion__heading">
          <slot name="heading"></slot>
        </div>

        <!-- Text -->
        <div v-if="text" class="accordion__text">
          <slot name="text"></slot>
        </div>

        <!-- Primary content -->
        <slot></slot>

        <!-- Footer -->
        <div v-if="footer" class="accordion__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import IconArrowHead from '@/components/icons/IconArrowHead.vue';

defineProps({
  theme: {
    type: String,
    default: 'clr'
  },
  btnTheme: {
    type: String,
    default: ''
  },
  borderless: Boolean,
  heading: Boolean,
  text: Boolean,
  footer: Boolean
});

const emit = defineEmits(['accordionClick']);

const accordionOpen = ref(false);

const mainContainerStyle = computed(() => {
  return { 
      'max-height': accordionOpen.value ? '5000px' : '64px', 
      'width': accordionOpen.value ? '100%' : '64px' 
  };
});

const contentWrapperStyle = computed(() => {
  return { opacity: accordionOpen.value ? 1 : 0 };
});

function toggleAccordion() {
  accordionOpen.value = !accordionOpen.value;
  emit('accordionClick');
}
</script>

<style lang="scss" scoped>
// @mixin accordion-back {
//   background-size: 500%;
//   background-position: left;
// }
@mixin accordion {
  width: 64px;
  max-height: 64px;
  border-radius: 0.85rem;
  border-top: 1px solid $color-bg-lt-glass-thinner;
  border: 1px solid $color-bg-dk-glass-thinner;
  box-shadow: 1px 1px 0 $color-bg-lt-glass-thinner, 0 -1px 0 $color-bg-lt-glass-thinner;
  transition: 0.7s ease-out;
  overflow: hidden;
}
// @mixin accordion-lt {
//   background: linear-gradient(70deg, transparent 45%, $color-bg-lt-glass-thick 50%, $color-bg-dk-glass-thin 55%, transparent 60%);
//   @include accordion-back;
// }
// @mixin accordion-dk {
//   background: linear-gradient(70deg, transparent 45%, $color-bg-lt-glass-thin 50%, $color-bg-dk-glass-thin 55%, transparent 60%);
//   @include accordion-back;
// }
// @mixin accordion-clr {
//   background: linear-gradient(70deg, transparent 45%, $color-bg-lt-glass-thinner 49%, $color-bg-dk-glass-thinner 51%, transparent 55%);
//   @include accordion-back;
// }
@mixin accordion-controller {
  padding-top: 0.4rem;
}
@mixin accordion-controller-clr {
  @include accordion-controller;
}
@mixin accordion-controller-lt {
  @include accordion-controller;
}
@mixin accordion-controller-dk {
  @include accordion-controller;
}
@mixin accordion-btn {
  width: 48px;
  height: 48px;
  transition: 0.5s;
  perspective: 200px;
  &:hover {
    color: $color-alert;
  }
}
@mixin accordion-btn-clr {
  @include accordion-btn;
  color: $color-dodger;
}
@mixin accordion-btn-lt {
  @include accordion-btn;
}
@mixin accordion-btn-dk {
  @include accordion-btn;
  color: $color-text-lt;
}
@mixin accordion-body {}
@mixin accordion-body-clr {
  @include accordion-body;
  background: none;
}
@mixin accordion-body-lt {
  @include accordion-body;
  background: $color-bg-lt-glass-thicker;
  background: $gradient-radial-card-lt;
}
@mixin accordion-body-dk {
  @include accordion-body;
  color: $color-text-lt;
  background: $color-bg-dk-glass-thick;
  background: $gradient-radial-card-dk;
}
@mixin accordion-heading {
  border-bottom: 1px solid $color-bg-lt-glass-thinner;
  box-shadow: 0 1px 0 $color-bg-dk-glass-thinner;
  @include lg {
    text-align: left;
    padding: 0 1.70rem;
  }
}
@mixin accordion-text {
  padding: 0 1.25rem;
  @include sm{
    padding: 0 1.70rem;
  }
}
@mixin accordion-footer {
  padding: 0.1rem 1.25rem;
  margin-top: 1rem;
  border-top: 1px solid $color-bg-lt-glass-thinner;
  box-shadow: 0 -1px 0 $color-bg-dk-glass-thinner;
  @include sm{
    padding: 0.1rem 1.70rem;
  }
}
.accordion {
  @include accordion;
  // &--clr {
  //   @include accordion-clr;
  // }
  // &--lt {
  //   @include accordion-lt;
  // }
  // &--dk {
  //   @include accordion-dk;
  // }
  &__body {
    &--clr {
      @include accordion-body-clr;
    }
    &--lt {
      @include accordion-body-lt;
    }
    &--dk {
      @include accordion-body-dk;
    }
  }
  &__controller {
    &--clr {
      @include accordion-controller-clr;
    }
    &--lt {
      @include accordion-controller-lt;
    }
    &--dk {
      @include accordion-controller-dk;
    }
    &__btn {
      &--clr {
        @include accordion-btn-clr;
      }
      &--lt {
        @include accordion-btn-lt;
      }
      &--dk {
        @include accordion-btn-dk;
      }
    }
  }
  &__heading {
    @include accordion-heading;
  }
  &__text {
    @include accordion-text;
  }
  &__footer {
    @include accordion-footer;
  }
}

.btn--lt {
  color: $color-text-lt;
  filter: drop-shadow(-1px 0 1px $color-bg-dk-glass-thin);
  &:hover,
  &:focus {
    color: $color-alert;
    border: 1px solid $color-text-lt;
    box-shadow: 0.5rem 12px 0 $color-bg-lt-glass-thinner inset, -0.5rem -10px 0 $color-bg-lt-glass-thinner inset;
  }
}
.btn--dk {
  color: $color-text-dk;
  filter: drop-shadow(1px 0 1px $color-bg-lt-glass);
  &:hover,
  &:focus {
    color: $color-alert;
    border: 1px solid $color-text-dk;
    box-shadow: 0.5rem 12px 0 $color-bg-dk-glass-thinner inset, -0.5rem -10px 0 $color-bg-dk-glass-thinner inset;
  }
}
.borderless {
  border: none;
  box-shadow: none;
  * {
    border: none;
    box-shadow: none;
  }
}

.main-container {
  max-height: 64px;
  width: 64px;
  transition: max-height 0.4s ease 0.2s, width 0.2s ease;
}
.content-wrapper {
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}
// ANIMATIONS --------------------------------------------------------------------------------------------
.arrow-up {
  animation: up 0.5s ease-in-out forwards;
}
@keyframes up {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(180deg);
  }
}
.arrow-down {
  animation: down 0.5s ease-in-out forwards;
}
@keyframes down {
  from {
    transform: rotateX(180deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
</style>
