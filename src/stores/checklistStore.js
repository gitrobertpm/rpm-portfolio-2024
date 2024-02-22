import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useChecklistStore = defineStore('checklist', () => {
  // const width = ref(0);
  // function updateWidth(w) {
  //   width.value = w;
  // }

  const viewedDisclaimer = ref(false);
  function hasViewedDisclaimer() {
    viewedDisclaimer.value = true;
  };

  const wasAnimated = ref(false);
  function hasBeenAnimated() {
    wasAnimated.value = true;
  };

  return { viewedDisclaimer, hasViewedDisclaimer, wasAnimated, hasBeenAnimated };
});
