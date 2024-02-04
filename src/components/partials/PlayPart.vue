<template>
  <ACard theme="red" heading drawer>
    <template #heading>
      <h2>Play</h2>
    </template>
    <template #drawer>
      <AnAccordion theme="clr" btnTheme="lt" borderless>
        <div class="play-wrapper">
          <ACard theme="red" drawer>
            <template #drawer>
              <div class="pad-x--10">
                <p>When I'm not working or writing code, I love watching movies and playing video games with my kids.</p>
                <p>My hobbies include writing, playing guitar, drawing, and of course building cool things with code.</p>
                <p>I have a deep appreciation for nature and a good book, but don't get to either as much as I should.</p>
                <p>I'm a big fan of Pink Floyd, Stephen King, and Star Wars. But not necessarily in that order.</p>
                <p>And my passions pursue an understanding of the universe, the meaning of life, the nature of reality, the essence of truth, the mystery of consciousness, and the clockworks of the human condition.</p>
                <div class="flex--row--cent">
                  <p><span class="emoji" role="img" aria-label="Smiling face with sunglasses emoji">😎</span></p>
                </div>
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

  .emoji {
    font-size: 1.2rem;
  }
}
</style>
