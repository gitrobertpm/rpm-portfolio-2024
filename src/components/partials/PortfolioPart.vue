<template>
  <ACard theme="yellow" heading drawer>
    <template #heading>
      <h2>This</h2>
    </template>
    <template #drawer>
      <AnAccordion theme="clr" :btnTheme="isMobile() ? 'dk' : 'lt'" borderless @accordionClick="accordionClick">
        <div class="port-wrapper">
          <h3>Portfolio Details</h3>
          <p class="pad-x--15">Here's a brief breakdown of what's going into this project.</p>
          <div class="flex--row--cent">
            <p><span class="emoji" role="img" aria-label="Artist palette emoji">🎨</span></p>
          </div>
          <ACard theme="yellow" drawer>
            <template #drawer>
              <div class="pad-x--10">
                <h3>Accessibility</h3>
                <AnAccordion theme="clr" btnTheme="lt" borderless @accordionClick="accordionClick">
                  <p>Considerations:</p>
                  <ul class="port-list">
                    <li>Aria roles</li>
                    <li>Color contrast ratio</li>
                    <li>Resizable layout with relative units</li>
                    <li>Deliberate focus-visible styles</li>
                    <li>Focus trapped modals</li>
                  </ul>
                </AnAccordion>
              </div>
            </template>
          </ACard>
          <br>
          <ACard theme="yellow" drawer>
            <template #drawer>
              <div class="pad-x--10">
                <h3>Style</h3>
                <AnAccordion theme="clr" btnTheme="lt" borderless @accordionClick="accordionClick">
                  <p>The direction of this portfolio was inspired by the simplicity of the Yin Yang, the joy of color, the reassurance of strong shapes and clean lines, and the x-ray vision of translucency.</p>
                  <p>Powered by: </p>
                  <ul class="port-list">
                    <li>Imported Sass partials and scoped single-file component styles</li>
                    <li>BEM selectors</li>
                    <li>Sass map-and-loop-built utility selectors</li>
                    <li>Sass variables and mixins</li>
                    <li>Original SVGs</li>
                  </ul>
                </AnAccordion>
              </div>
            </template>
          </ACard>
          <br>
          <ACard theme="yellow" drawer>
            <template #drawer>
              <div class="pad-x--10">
                <h3>Composition</h3>
                <AnAccordion theme="clr" btnTheme="lt" borderless @accordionClick="accordionClick">
                  <p>Here's a high level view of the app architecture:</p>
                  <ul class="port-list">
                    <li>Root</li>
                    <ul class="port-list sub-ul">
                      <li>Layout</li>
                      <ul class="port-list sub-ul">
                        <li>Header/Nav</li>
                        <ul class="port-list sub-ul">
                          <li>Mobile Nav - hamburger menu with full screen modal</li>
                          <li>Desktop Nav - sidebar - left</li>
                        </ul>
                        <li>Router Views</li>
                        <ul class="port-list sub-ul">
                          <li>Home - Landing page</li>
                          <li>Projects</li>
                          <ul class="port-list sub-ul">
                            <li>Reusable components with slot injection</li>
                          </ul>
                          <li>Contact</li>
                          <li>About</li>
                          <ul class="port-list sub-ul">
                            <li>Reusable components with slot injection</li>
                          </ul>
                          <li>Style Guide</li>
                          <ul class="port-list sub-ul">
                            <li>Reusable components with slot injection</li>
                          </ul>
                        </ul>
                        <li>Footer</li>
                      </ul>
                    </ul>
                  </ul>
                </AnAccordion>
              </div>
            </template>
          </ACard>
          <br>
          <ACard theme="yellow" drawer>
            <template #drawer>
              <div class="pad-x--10">
                <h3>State & Routing</h3>
                <AnAccordion theme="clr" btnTheme="lt" borderless @accordionClick="accordionClick">
                  <ul class="port-list">
                    <li>Catch all route and custom NotFound component for handling 404s</li>
                    <li>Pinia and composables for state</li>
                  </ul>
                </AnAccordion>
              </div>
            </template>
          </ACard>
          <br>
        </div>
      </AnAccordion> 
    </template>
  </ACard>
</template>

<script setup>
import ACard from '@/components/reusables/ACard.vue';
import AnAccordion from '@/components/reusables/AnAccordion.vue';
import useWindowResize from '@/composables/useWindowResize.js';
import { BREAKPOINTS } from '@/util/constants.js';

// Screen width
const { globalState } = useWindowResize();
const { lg } = BREAKPOINTS;
const isMobile = () => globalState.width < lg;

const emit = defineEmits(['accordionClick']);

const accordionClick = ()=> {
  emit('accordionClick');
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0 auto;
  @include sm {
    width: 100%;
    margin: 0;
  }
  h2 {
    color: #fff;
  }
  .port-wrapper {
    height: 100%;
    margin-top: 0.71rem;
    padding: 0.5rem;
    border-radius: 0.75rem;
    color: $color-text-lt;
    background: $color-text-dk;
    @include md {
      padding: 1rem;
    }
    @include lg {
      margin-top: 0.62rem;
    }
  }
  .port-list {
    list-style: disc;
    padding-left: 1rem;
    @include md {
      padding-left: 2rem;
    }
  }
  .sub-ul {
    margin-bottom: 0.5rem;
  }
  .emoji {
    font-size: 1.2rem;
  }
}
</style>
