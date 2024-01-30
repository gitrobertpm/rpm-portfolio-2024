<template>
  <div :class="`card card--${ theme }`">
    <!-- 
      Smaller reusable responsive card to break up content in a section or other container 
      Props used to determine theme: 'red', 'blue', 'green', 'yellow', 'lt', 'clr', 'dk',  - ALL STRINGS - defaults to 'clr'
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
    default: 'blue'
  },
  heading: Boolean,
  text: Boolean,
  footer: Boolean,
  drawer: Boolean
});
// const pole = props.light ? 'lt' : 'dk';
</script>

<style lang="scss" scoped>

</style>
