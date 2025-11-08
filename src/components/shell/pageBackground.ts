import { ref } from 'vue';

import DefaultBackground from './kingbreaker-background.jpg?url';

const backgroundURL = ref(DefaultBackground);

export function usePageBackground() {
  function setPageBackground(url: string | null) {
    backgroundURL.value = url || DefaultBackground;
  }

  return {
    backgroundURL,
    setPageBackground,
  };
}
