// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://natpower.org',
  output: 'static',
  trailingSlash: 'ignore',
  // Inline the (small) stylesheet so it doesn't block first paint
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});
