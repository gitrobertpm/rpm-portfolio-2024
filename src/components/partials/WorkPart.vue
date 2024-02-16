<template>
  <ACard theme="green" heading drawer>
    <template #heading>
      <h2>Work</h2>
    </template>
    <template #drawer>
      <div class="work-wrapper">
        <h3>Professional History</h3>
        <p class="pad-x--15">As a Front-end dev, I've written code that lives on sites like <code>XBOX</code>, <code>Hydro Flask</code>, and <code>Pandora</code>.</p>
        <p class="pad-x--15">As a web dev mentor, I've reviewed over <code>4,600</code> student projects.</p>
        <div class="flex--row--cent">
          <p><span class="emoji" role="img" aria-label="Technologist emoji">🧑‍💻</span></p>
        </div>
        <ACard v-for="job in jobs" :key="job.id" theme="green" drawer class="job-card job">
          <template #drawer>
            <ADrawer>
              <template #heading>
                <h4 class="job__company">{{ job.company }}</h4>
              </template>
              <template #content>
                <div class="job__details">
                  <code class="job__date">{{ job.date }}</code>
                  <h5 class="job__title">{{ job.title }}</h5>
                  <ul class="job__bullets">
                    <li v-for="point in job.bullets.points" :key="point">{{ point }}</li>
                  </ul>
                </div>
              </template>
            </ADrawer>
          </template>
        </ACard>
      </div>
    </template>
  </ACard>
</template>

<script setup>
import ACard from '@/components/reusables/ACard.vue';
import ADrawer from '../reusables/ADrawer.vue';
import jobs from '@/data/work.json';
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
  }
  .emoji {
    font-size: 1.5rem;
  }
}
</style>
