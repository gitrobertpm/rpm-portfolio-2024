<template>
  <ACard theme="yellow" heading drawer>
    <template #heading>
      <h2>This</h2>
    </template>
    <template #drawer>
      <div class="port-wrapper">
        <ADrawer has-drawer-kids :has-drawer-kids-height="alphaDrawerNewOpenHeight" ref="alphaDrawer">
          <template #heading>
            <h4>Portfolio Details</h4>
          </template>
          <template #content>
            <p class="pad-x--15">Here's a brief breakdown of what's going into this project.</p>
            <p v-if="repoStore.isLoading" class="pad-x--15">Loading...</p>
            <p v-else-if="repoStore.isError" class="pad-x--15">Error fetching commits.</p>
            <p v-else class="pad-x--15">Number of commits so far: <code>{{ repoStore.commitsCount }}</code></p>
            <p class="pad-x--15"><a href="https://github.com/gitrobertpm/rpm-portfolio-2024" target="_blank">GitHub repo link</a></p>
            <div class="flex--row--cent">
              <p><span class="emoji" role="img" aria-label="Artist palette emoji">🎨</span></p>
            </div>
            <ACard theme="yellow" drawer>
              <template #drawer>
                <ADrawer grounded id="accessibility" ref="accessibility" @drawer-click="handleDrawerClick">
                  <template #heading>
                    <h5 class="this__heading">Accessibility</h5>
                  </template>
                  <template #content>
                    <div class="this__details">
                      <p>Considerations:</p>
                      <ul class="port-list">
                        <li>Aria roles</li>
                        <li>Color contrast ratio</li>
                        <li>Resizable layout with relative units</li>
                        <li>Deliberate focus-visible styles</li>
                        <li>Focus trapped modals</li>
                        <li>Tab group roles and focus control</li>
                      </ul>
                    </div>
                  </template>
                </ADrawer>
              </template>
            </ACard>
            <br>
            <ACard theme="yellow" drawer>
              <template #drawer>
                <ADrawer grounded id="style" ref="style" @drawer-click="handleDrawerClick">
                  <template #heading>
                    <h5 class="this__heading">Style</h5>
                  </template>
                  <template #content>
                    <div class="this__details">
                      <p>The direction of this portfolio was inspired by the:</p>
                      <ul class="port-list">
                        <li>Elegance of the Yin Yang</li>
                        <li>Joy of color</li>
                        <li>Reassurance of strong shapes and clean lines</li>
                        <li>Vision of translucency</li>
                      </ul>
                      <p>Styles powered by: </p>
                      <ul class="port-list">
                        <li>Imported Sass partials and scoped single-file component styles</li>
                        <li>BEM selectors</li>
                        <li>Sass map-and-loop-built utility selectors</li>
                        <li>Sass variables and mixins</li>
                        <li>Original SVGs</li>
                      </ul>
                    </div>
                  </template>
                </ADrawer>
              </template>
            </ACard>
            <br>
            <ACard theme="yellow" drawer>
              <template #drawer>
                <ADrawer grounded id="composition" ref="composition" @drawer-click="handleDrawerClick">
                  <template #heading>
                    <h5 class="this__heading">Composition</h5>
                  </template>
                  <template #content>
                    <div class="this__details">
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
                    </div>
                  </template>
                </ADrawer>
              </template>
            </ACard>
            <br>
            <ACard theme="yellow" drawer>
              <template #drawer>
                <ADrawer grounded id="state" ref="state" @drawer-click="handleDrawerClick">
                  <template #heading>
                    <h5 class="this__heading">State & Routing</h5>
                  </template>
                  <template #content>
                    <div class="this__details">
                      <ul class="port-list">
                        <li>Catch all route and custom NotFound component for handling 404s</li>
                        <li>Pinia and composables for state</li>
                      </ul>
                    </div>
                  </template>
                </ADrawer>
              </template>
            </ACard>
            <br>
            <ACard theme="yellow" drawer>
              <template #drawer>
                <ADrawer grounded id="dev" ref="dev" @drawer-click="handleDrawerClick">
                  <template #heading>
                    <h5 class="this__heading">Dev Ops</h5>
                  </template>
                  <template #content>
                    <div class="this__details">
                      <p>Build and deploy details:</p>
                      <ul class="port-list">
                        <li>Vue 3 Composition API</li>
                        <li>Vite dev server</li>
                        <li>Build hosted on gh-pages</li>
                        <li>Gh-pages configured for custom domain</li>
                        <li>Single command accomplishes build and deploy pipeline</li>
                      </ul>
                    </div>
                  </template>
                </ADrawer>
              </template>
            </ACard>
          </template>
        </ADrawer>
      </div>
    </template>
  </ACard>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ACard from '@/components/reusables/ACard.vue';
import ADrawer from '../reusables/ADrawer.vue';
import { useRepoStore } from '@/stores/repoStore';

const repoStore = useRepoStore();

// Screen width
import useWindowResize from '@/composables/useWindowResize.js';
import { BREAKPOINTS } from '@/util/constants.js';
const { globalState } = useWindowResize();
const { lg } = BREAKPOINTS;
const isMobile = () => globalState.width < lg;

const alphaDrawer = ref(null);
const alphaDrawerOriginalOpenHeight = ref(0);
const alphaDrawerNewOpenHeight = ref(0);
const multiplier = () => isMobile() ? 50 : 57;

onMounted(() => {
  repoStore.getCommits();
  const alphaDescendants = alphaDrawer.value.$el.firstElementChild.lastElementChild.children;
  const alphaDescendantsHeights = alphaDescendants.length * multiplier();
  alphaDrawerOriginalOpenHeight.value = alphaDescendantsHeights;
  alphaDrawerNewOpenHeight.value = alphaDrawerOriginalOpenHeight.value;
});

const accessibility = ref(null);
const style = ref(null);
const composition = ref(null);
const state = ref(null);
const dev = ref(null);

const drawers = [accessibility, style, composition, state, dev];

const handleDrawerClick = (e, drawerOriginalHeight) => {
  const currentDrawerId = e.currentTarget.parentElement.parentElement.id;
  const currentDrawer = drawers.find(d => d.value.$el.id === currentDrawerId);
  const isExpanded = currentDrawer.value.isExpanded;
  for (let i = 0; i < drawers.length; i++) {
    if (drawers[i].value.isExpanded) {
      drawers[i].value.isExpanded = false;
    }
  }
  alphaDrawerNewOpenHeight.value = alphaDrawerOriginalOpenHeight.value; 
  if (!isExpanded) {
    currentDrawer.value.isExpanded = true;
    alphaDrawerNewOpenHeight.value = alphaDrawerOriginalOpenHeight.value + drawerOriginalHeight;
  }
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
    padding: 0.5rem;
    border-radius: 0 0 0.75rem 0.75rem;
    color: $color-text-lt;
    background: $color-text-dk;
    @include md {
      padding: 1rem;
    }
    @include lg {
      padding-bottom: 1.5rem;
    }
    .this {
      &__heading {
        @include lg {
          font-size: 1.5rem;
        }
      }
      &__details {
        padding: 0 1rem 1rem;
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
      font-size: 1.5rem;
    }
  }
}
</style>
