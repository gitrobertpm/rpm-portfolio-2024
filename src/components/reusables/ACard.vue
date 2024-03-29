<template>
  <div :class="`card card--${ theme }`">
    <!-- 
      Smaller reusable responsive card to break up content in a section or other container 
      Props used to determine theme: 'red', 'blue', 'green', 'yellow', 'lt', 'clr', 'dk' - ALL STRINGS - defaults to 'dk'
      Props used to include children: 'heading', 'text', 'footer', 'drawer' - ALL BOOLEANS 
    -->
    <!-- CARD FACE-->
    <div class="card__main">

      <!-- BODY -->
      <div class="card__main__body">
        <!-- h3 or h4 -->
        <div v-if="heading" :class="`card__main__body__heading card__main__body__heading--${ theme }`">
          <slot name="heading"></slot>
        </div>

        <!-- Text -->
        <div v-if="text" class="card__main__body__text">
          <slot name="text"></slot>
        </div>
      </div>
      <!-- Footer -->
      <div v-if="footer" class="card__main__footer">
        <slot name="footer"></slot>
      </div>
    </div>

    <!-- CARD'S DRAWER -->
    <div v-if="drawer" class="card__drawer">
      <slot name="drawer"></slot>
    </div>

  </div>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    default: 'dk'
  },
  heading: Boolean,
  text: Boolean,
  footer: Boolean,
  drawer: Boolean
});
</script>

<style lang="scss" scoped>
@mixin card {
  position: relative;
  width: 100%;
  margin: 0.75rem 0.1rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 1px 1px 0 $color-bg-lt-glass-thinner, -1px -1px 0 $color-bg-lt-glass-thinner;
  overflow: hidden;
  transition: 0.5s;
  @include sm {
    min-width: 250px;
    width: 45%;
    margin: 0;
    flex-grow: 1;
  }
  @include md {
    width: 25%;
    backdrop-filter: blur(5px);
  }
}
@mixin card-red {
  background: $color-bg-alert-glass-lt;
  border: 1px solid $color-bg-error-glass;
  @include lg {
    background: linear-gradient(to top, $color-bg-error-glass, $color-bg-alert-glass);
  }
}
@mixin card-green {
  background: $color-bg-success-lt-glass-lt;
  border: 1px solid $color-bg-success-dk-glass;
  @include lg {
    background: linear-gradient(to top, $color-bg-success-glass, $color-bg-warning-glass);
  }
}
@mixin card-blue {
  background: $color-bg-blue-glass-lt;
  border: 1px solid $color-bg-midnight-glass;
  @include lg {
    background: linear-gradient(to top, $color-bg-blue-glass, $color-bg-dodger-glass);
  }
}
@mixin card-yellow {
  background: $color-bg-warning-dk-glass;
  border: 1px solid $color-bg-dirty-glass;
  @include lg {
    background: linear-gradient(to top, $color-bg-warning-dk-glass, $color-bg-warning-lt-glass);
  }
}
@mixin card-lt {
  color: $color-text-dk;
  background: linear-gradient(to top, $color-bg-lt-glass-thicker, $color-bg-lt-glass-thick);
  border: 1px solid $color-bg-dk-glass-thinner;
  box-shadow: 1px 1px 0 $color-bg-lt-glass-thinner, -1px -1px 0 $color-bg-lt-glass-thinner;
}
@mixin card-clr {
  color: $color-dodger;
  background: linear-gradient(to top, $color-bg-dk-glass-thinner, $color-bg-lt-glass-thinner);
  border: 1px solid $color-bg-dk-glass-thinner;
  box-shadow: 1px 1px 0 $color-bg-lt-glass-thinner, -1px -1px 0 $color-bg-lt-glass-thinner;
  text-shadow: 0 1px 0 $color-bg-dk-glass-thicker, 0 -1px 0 $color-bg-lt-glass-thin;
}
@mixin card-dk {
  color: $color-text-lt;
  background: linear-gradient(to top, $color-bg-dk-glass-thicker, $color-bg-dk-glass-thick);
  border: 1px solid $color-bg-dk-glass-thinner;
  box-shadow: 1px 1px 0 $color-bg-lt-glass-thinner, -1px -1px 0 $color-bg-lt-glass-thinner;
}
@mixin card-main {
  border-radius: 0.75rem 0.75rem 0 0;
}
@mixin card-body {
  border-radius: 0.75rem 0.75rem 0 0;
}
@mixin card-heading {
  padding: 0.1rem 1rem;
  border-radius: 0.75rem 0.75rem 0 0;
}
@mixin card-heading-red {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 -1px 0 $color-bg-alert-glass, 0 1px 0 $color-error;
  background: $color-bg-error-glass;
  border-bottom: 1px solid $color-bg-error-glass;
  @include lg {
    background: linear-gradient(to right, $color-bg-error-glass, $color-bg-alert-glass);
  }
}
@mixin card-heading-green {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 -1px 0 $color-bg-success-glass, 0 1px 0 $color-success-dk;
  background: $color-bg-success-dk-glass;
  border-bottom: 1px solid $color-bg-success-dk-glass;
  @include lg {
    background: linear-gradient(to right, $color-bg-success-dk-glass, $color-bg-success-glass);
  }
}
@mixin card-heading-blue {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 -1px 0 $color-bg-blue-glass, 0 1px 0 $color-blue;
  background: $color-bg-blue-glass;
  border-bottom: 1px solid $color-bg-midnight-glass;
  @include lg {
    background: linear-gradient(to right, $color-bg-midnight-glass, $color-bg-blue-glass);
  }
}
@mixin card-heading-yellow {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 -1px 0 $color-bg-warning-glass, 0 1px 0 $color-dirty;
  background: $color-bg-warning-dk-glass;
  border-bottom: 1px solid $color-bg-dirty-glass;
  @include lg {
    background: linear-gradient(to right, $color-bg-dirty-glass, $color-bg-warning-dk-glass);
  }
}
@mixin card-heading-lt {
  background: linear-gradient(to right, $color-bg-lt-glass-thicker, $color-bg-lt-glass-thinner);
  border-bottom: 1px solid $color-bg-dk-glass-thinner;
}
@mixin card-heading-clr {
  background: linear-gradient(to right, $color-bg-dk-glass-thinner, $color-bg-lt-glass-thinner);
  border-bottom: 1px solid $color-bg-lt-glass-thinner;
  box-shadow: 0 1px 0 $color-bg-dk-glass-thinner;
}
@mixin card-heading-dk {
  background: linear-gradient(to right, $color-bg-dk-glass-thicker, $color-bg-dk-glass-thick);
  border-bottom: 1px solid $color-bg-lt-glass-thinner;
}
@mixin card-text {
  display: none;
  @include md {
    display: block;
    padding-left: 1rem;
  }
}
@mixin card-footer {
  display: none;
  @include md {
    display: block;
    padding-left: 1rem;
  }
}
@mixin card-drawer {
  // div {
  //   border: none !important;
  //   box-shadow: none !important;
  // }
}
.card {
  @include card;
  &--red {
    @include card-red;
  }
  &--green {
    @include card-green;
  }
  &--blue {
    @include card-blue;
  }
  &--yellow {
    @include card-yellow;
  }
  &--lt {
    @include card-lt;
  }
  &--clr {
    @include card-clr;
  }
  &--dk {
    @include card-dk;
  }
  &__main {
    @include card-main;
    &__body {
      @include card-body;
      &__heading {
        @include card-heading;
        &--red {
          @include card-heading-red;
        }
        &--green {
          @include card-heading-green;
        }
        &--blue {
          @include card-heading-blue;
        }
        &--yellow {
          @include card-heading-yellow;
        }
        &--lt {
          @include card-heading-lt;
        }
        &--clr {
          @include card-heading-clr;
        }
        &--dk {
          @include card-heading-dk;
        }
      }
      &__text {
        @include card-text;
      }
    }
    &__footer {
      @include card-footer;
    }
  }
  &__drawer {
    @include card-drawer;
  }
}
</style>
