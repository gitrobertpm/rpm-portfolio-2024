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
        <div v-if="heading" :class="`cutout--${ pole }`">
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
        <div class="section__main__footer">
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

</style>
