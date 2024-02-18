<template>
  <ACard theme="green" heading drawer>
    <template #heading>
      <h2>Work</h2>
    </template>
    <template #drawer>
      <div class="work-wrapper">
        <ADrawer has-drawer-kids :has-drawer-kids-height="alphaDrawerNewOpenHeight" ref="alphaDrawer">
          <template #heading>
            <h4>Professional History</h4>
          </template>
          <template #content>
            <p class="pad-x--15">As a Front-end dev, I've written code that lives on sites like <code>XBOX</code>, <code>Hydro Flask</code>, and <code>Pandora</code>.</p>
            <p class="pad-x--15">As a web dev mentor, I've reviewed over <code>4,600</code> student projects.</p>
            <div class="flex--row--cent">
              <p><span class="emoji" role="img" aria-label="Technologist emoji">🧑‍💻</span></p>
            </div>
            <ACard v-for="job in jobs" :key="job.id" theme="green" drawer class="job-card job">
              <template #drawer>
                <ADrawer grounded :jobId="job.id" :ref="(el) => (jobRefs[job.id] = el)" @drawer-click="handleDrawerClick">
                  <template #heading>
                    <h5 class="job__company">{{ job.company }}</h5>
                  </template>
                  <template #content>
                    <div class="job__details">
                      <code class="job__date">{{ job.date }}</code>
                      <h6 class="job__title">{{ job.title }}</h6>
                      <ul class="job__bullets">
                        <li v-for="point in job.bullets.points" :key="point">{{ point }}</li>
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
import jobs from '@/data/work.json';
import useWindowResize from '@/composables/useWindowResize.js';
import { BREAKPOINTS } from '@/util/constants.js';

// Screen width
const { globalState } = useWindowResize();
const { lg } = BREAKPOINTS;
const isMobile = () => globalState.width < lg;

const alphaDrawer = ref(null);
const jobRefs = ref({});
const alphaDrawerOriginalOpenHeight = ref(0);
const alphaDrawerNewOpenHeight = ref(0);
const multiplier = () => isMobile() ? 75 : 88;

onMounted(() => {
  const alphaDescendants = alphaDrawer.value.$el.firstElementChild.lastElementChild.children;
  const alphaDescendantsHeights = alphaDescendants.length * multiplier();
  alphaDrawerOriginalOpenHeight.value = alphaDescendantsHeights;
  alphaDrawerNewOpenHeight.value = alphaDrawerOriginalOpenHeight.value;
});

const handleDrawerClick = (e, drawerOriginalHeight) => {
  const currentDrawerId = e.currentTarget.parentElement.parentElement.getAttribute('jobId');
  const isExpanded = jobRefs.value[currentDrawerId].isExpanded;
  for (let i = 0; i < jobs.length; i++) {
    if (jobRefs.value[i].isExpanded) {
      jobRefs.value[i].isExpanded = false;
    }
  }
  alphaDrawerNewOpenHeight.value = alphaDrawerOriginalOpenHeight.value; 
  if (!isExpanded) {
    jobRefs.value[currentDrawerId].isExpanded = true;
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
  .work-wrapper {
    height: 100%;
    margin: 0;
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
    .job-card {
      margin-bottom: 0.5rem;

      @include md {
        margin-bottom: 1rem;
      }
    }
    .job {
      &__company {
        @include lg {
          font-size: 1.5rem;
        }
      }
      &__title {
        text-align: left;
      }
      &__details {
        padding: 1rem;
      }
      &__bullets {
        list-style-type: disc;
        padding-left: 1rem;
      }
    }
    .emoji {
      font-size: 2rem;
    }
  }
}
</style>
