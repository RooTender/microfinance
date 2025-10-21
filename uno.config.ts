import { defineConfig, presetWind3, presetAttributify } from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
  ],
  extractors: [extractorSvelte()],
});
