// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Absolute base for canonical and og:image URLs. Defaults to the preview host;
  // set SITE_URL=https://natpower.org for the real launch.
  site: process.env.SITE_URL ?? 'https://preview.yourdomain.com',
  output: 'static',
  trailingSlash: 'ignore',
  // Inline the (small) stylesheet so it doesn't block first paint
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});
