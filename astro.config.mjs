import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import { imagetools } from 'vite-imagetools';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [imagetools()],
  },
  //   optimizeDeps: {
  //     exclude: ['imagetools'],
  //   },
  //   ssr: {
  //     external: ['imagetools'],
  //   },
  // },
});
