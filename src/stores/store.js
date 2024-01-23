import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStore = defineStore('counter', () => {
  const width = ref(0);
  function updateWidth(w) {
    width.value = w;
  }

  return { width, updateWidth};
});
