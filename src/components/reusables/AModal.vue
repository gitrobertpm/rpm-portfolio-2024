<template>
  <Transition name="fade" mode="out-in">
    <div v-show="display" class="modal">
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
          <slot name="content"></slot>
        </div>
        
        <div class="btn-box flex--row--cent--cent">
          <button 
            class="btn--primary close-btn"
            @click="closeModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
  </Transition>
</template>

<script setup>
import IconClose from '@/components/icons/IconClose.vue';

defineProps({
  display: {
    type: Boolean,
    required: true,
    default: false
  }
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
    .close-btn {
      max-width: 350px;
      margin: auto;
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
