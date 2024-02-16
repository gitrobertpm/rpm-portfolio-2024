<template>
  <ACard theme="red" heading drawer>
    <template #heading>
      <h2>Play</h2>
    </template>
    <template #drawer>
      <div class="play-wrapper">
        <ACard theme="red" drawer>
          <template #drawer>
            <ADrawer>
              <template #heading>
                <h6 class="heading">When I'm not working...</h6>
              </template>
              <template #content>
                <div class="details">
                  <p>I love watching movies and playing video games with my kids.</p>
                  <p>My hobbies include writing, playing guitar, drawing, and of course building cool things with code.</p>
                  <p>I have a deep appreciation for nature and a good book, but don't get to either as much as I should.</p>
                  <p>I'm a big fan of Pink Floyd, Stephen King, and Star Wars. But not necessarily in that order.</p>
                  <p>And my passions pursue an understanding of the universe, the meaning of life, the nature of reality, the essence of truth, the mystery of consciousness, and the clockworks of the human condition.</p>
                  <div class="flex--row--cent">
                    <p><span class="emoji" role="img" aria-label="Smiling face with sunglasses emoji">😎</span></p>
                  </div>
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
  .play-wrapper {
    height: 100%;
    margin-top: 0;
    padding: 0.5rem;
    border-radius: 0 0 0.75rem 0.75rem;
    color: $color-text-lt;
    background: $color-text-dk;
    @include md {
      padding: 1rem;
    }
    .heading {
      margin: 2rem auto;
    }
    .details {
      padding: 0 1rem 1rem;
    }
  }
  .emoji {
    font-size: 1.2rem;
  }
}
</style>
