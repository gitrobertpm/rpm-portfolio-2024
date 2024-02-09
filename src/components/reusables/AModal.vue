<template>
  <Transition name="fade" mode="out-in">
    <div 
      v-show="display"
      class="modal" 
      ref="trapRef"
      role="dialog" 
      aria-labelledby="modal-label" 
      aria-modal="true"
    >
      <div class="modal__box">
        <div class="btn-box flex--row--right">
          <button 
            class="btn-close"
            @click="closeModal"
          >
            <IconClose />
          </button>
        </div>

        <div class="content-box">
          <h1 id="modal-label" class="modal-heading">{{ headingText }}</h1>
          <slot name="content"></slot>
        </div>
        
        <div class="btn-box flex--row--cent--cent">
          <button 
            class="btn--primary close-btn"
            ref="close"
            @click="closeModal"
            >
              {{ btnText }}
            </button>
          </div>
        </div>
      </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import IconClose from '@/components/icons/IconClose.vue';
import useFocusTrap from '@/composables/useFocusTrap.js';

const props = defineProps({
  display: {
    type: Boolean,
    required: true,
    default: false
  },
  btnText: {
    type: String,
    default: "CLOSE"
  },
  headingText: {
    type: String,
    default: 'Modal Dialog'
  },
  delay: {
    type: Number,
    default: 0
  }
});

const { trapRef } = useFocusTrap();
const close = ref(null);

// Focus on modal's main close button 100 milliseconds after any delay prop passed
onMounted(() => {
  setTimeout(() => {
    close.value.focus();
  }, props.delay + 100);
});

const emit = defineEmits(['modalClose']);

const closeModal = () => {
  emit('modalClose');
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  backdrop-filter: blur(5px);
  z-index: 999;
  &__box {
    color: $color-text-lt;
    max-width: 700px;
    padding: 1rem;
    margin: 3rem auto;
    background: $gradient-radial-nav;
    border-top: 1px solid $color-bg-lt-glass-thinner;
    border-bottom: 1px solid $color-bg-dk-glass-thinner;
    box-shadow: 0 1px 0 $color-bg-lt-glass-thinner, 0 -1px 0 $color-bg-dk-glass-thinner;
    border-radius: 0.75rem;
    @include md {
      padding: 3rem;
      border-radius: 4rem;
    }
    .content-box {
      margin: 0 auto 2rem;
      padding: 0 0 1rem;
      .modal-heading {
        margin-top: 0;
      }
    }
    .btn-close {
      // SVG styles in source icon vue file
      position: relative;
      width: 50px;
      height: 50px;
      margin: 0;
      z-index: 999;
      &:focus,
      &:focus-visible {
        border-radius: 15px;
        border: 1px solid $color-bg-lt-glass;
        outline: 2px solid $color-text-lt;
      }
      &:hover {
        color: $color-text-lt;
        border: 1px solid $color-bg-lt-glass;
        filter: drop-shadow(0 5px 15px $color-bg-lt-glass-thinner);
        box-shadow: 0.5rem 12px 0 $color-bg-lt-glass-thinner inset, -0.5rem -10px 0 $color-bg-lt-glass-thinner inset;
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
    .close-btn {
      max-width: 350px;
      margin: auto;
      &:focus,
      &:focus-visible {
        color: $color-text-lt;
        border-radius: 15px;
        border: 1px solid $color-bg-lt-glass;
        outline: 2px solid $color-text-lt;
      }
      &:hover {
        color: $color-text-lt;
        border: 1px solid $color-bg-lt-glass;
        filter: drop-shadow(0 5px 15px $color-bg-lt-glass-thinner);
        box-shadow: 0.5rem 12px 0 $color-bg-lt-glass-thinner inset, -0.5rem -10px 0 $color-bg-lt-glass-thinner inset;
      }
    }
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
