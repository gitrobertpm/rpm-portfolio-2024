import { reactive, onMounted, onUnmounted } from 'vue';

const globalState = reactive({
  width: window.width,
  height: window.height
});

export default function useWindowResize() {
  function handler() {
    globalState.width = window.innerWidth;
    globalState.height = window.innerHeight;
  };

  if (globalState.width === undefined) {
    handler();
  }

  onMounted(() => window.addEventListener('resize', handler));
  onUnmounted(() => window.removeEventListener('resize', handler));

  return { globalState };
};
