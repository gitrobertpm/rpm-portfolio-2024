<template>
  <ACard theme="green" heading drawer>
    <template #heading>
      <h2>Work</h2>
    </template>
    <template #drawer>
      <AnAccordion theme="clr" :btnTheme="isMobile() ? 'dk' : 'lt'" borderless @accordionClick="accordionClick">
        <div class="work-wrapper">
          <h3>Professional History</h3>
          <p class="pad-x--15">As a Front-end dev, I've written code that lives on sites like <code>XBOX</code>, <code>Hydro Flask</code>, and <code>Pandora</code>.</p>
          <p class="pad-x--15">As a web dev mentor, I've reviewed over <code>4,600</code> student projects.</p>
          <div class="flex--row--cent">
            <p><span class="emoji" role="img" aria-label="Technologist emoji">🧑‍💻</span></p>
          </div>
          <ACard v-for="job in jobs" :key="job.id" theme="green" drawer class="job-card">
            <template #drawer>
              <div class="pad-x--10">
                <h4>{{ job.company }}</h4>
                <AnAccordion theme="clr" btnTheme="lt" borderless @accordionClick="accordionClick">
                  <br>
                  <code class="date">{{ job.date }}</code>
                  <h5>{{ job.title }}</h5>
                  <ul class="job-ul">
                    <li v-for="point in job.bullets.points" :key="point">{{ point }}</li>
                  </ul>
                </AnAccordion>
              </div>
            </template>
          </ACard>
        </div>
      </AnAccordion> 
    </template>
  </ACard>
</template>

<script setup>
import ACard from '@/components/reusables/ACard.vue';
import AnAccordion from '@/components/reusables/AnAccordion.vue';
import jobs from '@/data/work.json';
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

  .work-wrapper {
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
    .job-card {
      margin-bottom: 0.5rem;

      @include md {
        margin-bottom: 1rem;
      }

      h5 {
        text-align: left;
      }
    }
    .job-ul {
      list-style-type: disc;
      padding-left: 1rem;
    }
  }

  .emoji {
    font-size: 1.5rem;
  }
}
</style>