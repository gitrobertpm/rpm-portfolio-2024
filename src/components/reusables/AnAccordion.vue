<template>
  <div :class="[
        `accordion accordion--${ theme }`,
        accordionOpen ? 'grow' : 'shrink'
      ]">
    <!-- 
      Flexible, responsive, animated accordion component to hold click-through-content
      Props used to determine theme: 'clr', 'lt', 'dk' - ALL STRINGS - defaults to 'clr'
      Props used to include children: 'heading', 'text', 'footer' - ALL BOOLEANS 
    -->
    <div :class="`accordion__body--${ theme }`">
      <div :class="`accordion__controller--${ theme }`">
        <button 
          :class="`accordion__controller__btn--${ theme }`"
          @click="toggleAccordion"
          title="More..."
        >
          <IconArrowHead :class="accordionOpen ? 'arrow-up' : 'arrow-down'" />
        </button>
      </div>

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
</template>

<script setup>
import { ref } from 'vue';
import IconArrowHead from '@/components/icons/IconArrowHead.vue';

defineProps({
  theme: {
    type: String,
    default: 'clr'
  },
  heading: Boolean,
  text: Boolean,
  footer: Boolean
});

const accordionOpen = ref(false);

function toggleAccordion() {
  accordionOpen.value = !accordionOpen.value;
}
</script>

<style lang="scss" scoped>
.grow {
  animation: grow 1s ease-in-out forwards, flash-on 1.5s ease-in forwards;
}

@keyframes grow {
  0% {
    width: 64px;
    max-height: 64px;
  }
  50% {
    width: 100%;
    max-height: 64px;
  }
  100% {
    width: 100%;
    max-height: 5000px;
  }
}

@keyframes flash-on {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

.shrink {
  animation: shrink 1s ease-in-out forwards, flash-off 1.3s 0.3s ease-in forwards;
}

@keyframes shrink {
  0% {
    width: 100%;
    max-height: 5000px;
  }
  50% {
    width: 100%;
    max-height: 64px;
  }
  100% {
    width: 64px;
    max-height: 64px;
  }
}

@keyframes flash-off {
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}

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
