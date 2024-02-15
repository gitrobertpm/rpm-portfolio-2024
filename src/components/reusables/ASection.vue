<template>
  <div class="section">
    <!-- 
      Large reusable responsive section to break up content on a page/view  
      Props used to determine theme: 'light' - BOOLEAN
      Props used to include children: 'hero', 'heading', 'subheading', 'text', 'footer' -  - ALL BOOLEANS
    -->
    <!-- SECTION'S PRIMARY PORTION -->
    <div :class="[
        'section__main', 
        {
          'section__main--reverse': light 
        }
      ]"
    >

      <!-- HERO -->
      <div class="section__main__hero">
        <div v-if="hero" :class="`cutout--${ pole }--img`">
          <slot name="hero"></slot>
        </div>
      </div>

      <!-- BODY -->
      <div class="section__main__body">
        <!-- h2 -->
        <div v-if="heading" :class="`section__main__body__heading section__main__body__heading--${ pole } cutout--${ pole }`">
          <slot name="heading"></slot>
        </div>

        <!-- h3 -->
        <div v-if="subheading" :class="`cutout--${ pole }`">
          <slot name="subheading"></slot>
        </div>

        <!-- TEXT -->
        <div v-if="text" :class="`cutout--${ pole }--fat`">
          <slot name="text"></slot>
        </div>

        <!-- FOOTER -->
        <div :class="`section__main__body__footer section__main__body__footer--${ pole }`">
          <div v-if="footer" :class="`cutout--${ pole }--chubby`">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>   

    <!-- SECTION'S SECONDARY PORTION -->
    <div class="section__supplemental">
      <slot name="supplemental"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  light: Boolean,
  hero: Boolean,
  heading: Boolean,
  subheading: Boolean,
  text: Boolean,
  footer: Boolean
});
const pole = props.light ? 'lt' : 'dk';
</script>

<style lang="scss" scoped>
@mixin section {
  width: 100%;
  margin: 2rem auto;
  padding: 0.1rem 0.5rem 0.5rem;
  transition: 0.7s ease-out;
  @include sm {
    padding: 0.5rem 1rem 1rem;
  }
  @include md {
    margin: 2rem auto 5rem;
    padding: 0.5rem 2rem 1rem;
    background: linear-gradient(to bottom left, $color-bg-lt-glass-thinner, transparent 10%, transparent 90%, $color-bg-dk-glass-thinner);
    border-radius: 1.75rem;
    border-top: 1px solid $color-bg-lt-glass-thinner;
    border-bottom: 1px solid $color-bg-dk-glass-thinner;
    box-shadow: 1px 1px 0 $color-bg-lt-glass-thinner, -1px -1px 0 $color-bg-dk-glass-thinner;
  }
  @include lg {
    padding: 0.5rem 3rem 1rem;
  }
}
@mixin section-main {
  margin: 1rem auto;
  @include md {
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
  }
}
@mixin section-hero {
  @include md {
    align-self: center;
    width: 30%;
  }
}
@mixin section-heading {
  @include md {
    width: 140%;
  }
}
@mixin section-body {
  margin: 2rem auto;
  @include md {
    width: 70%;
    margin: 0 auto 1rem;
  }
}
@mixin section-footer {
  @include md {
    width: 140%;
  }
}
@mixin hd-ft-dk {
  @include md {
    margin-left: -40%;
  }
}
@mixin section-supplemental {
  position: relative;
  @include md {
    width: 100%;
  }
}
.section {
  @include section;
  &__main {
    @include section-main;
    &--reverse {
      flex-direction: row-reverse;
    }
    &__hero {
      @include section-hero;
    }
    &__body {
      @include section-body;
      &__heading {
        @include section-heading;
        &--dk {
          @include hd-ft-dk;
        }
      }
      &__footer {
        @include section-footer;
        &--dk {
          @include hd-ft-dk;
        }
      }
    }
  }
  &__supplemental {
    @include section-supplemental;
  }
}
</style>
