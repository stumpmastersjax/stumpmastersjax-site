import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: 'https://stumpmastersjax.github.io',
  base: '/stumpmastersjax-site',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});