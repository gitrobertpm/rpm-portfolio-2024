<template>
  <div class="not-found-wrapper">
    <h1 class="four-oh-four-heading">&lt;~*404*~&gt;</h1>
    <ASection hero heading text footer>
      <template #hero>
        <img src="@/assets/img/icons/rasters/impossible-triangle.png" alt="Impossible Triangle" class="not-found-hero" />
      </template>
      <template #heading>
        <h2 class="oops">Not Found</h2>
      </template>
      <template #text>
        <p>Oops! It looks like the page you're looking for does not exist.</p>
      </template>
      <template #footer>
        <button @click.prevent="$router.back()" class="btn--primary go-back">← Back</button>
      </template>
    </ASection>
  </div>
</template>

<script setup>
import ASection from '@/components/reusables/ASection.vue';
</script>

<style lang="scss" scoped>
.not-found-wrapper {
  overflow: hidden;
  max-width: 1280px;
  padding: 1rem;
  margin: auto;
}
.four-oh-four-heading {
  text-align: center;
}
.not-found-hero {
  padding: 1rem;
  @include lg {
    width: 187px;
    height: 142px;
  }
}
.spacer {
  visibility: hidden;
}
.go-back {
  min-width: 225px;
  margin: 1rem 0 1rem -5px;
}
</style>
