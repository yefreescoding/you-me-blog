import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ...
  site: 'https://you-me-blog.vercel.app',
  integrations: [sitemap()],
});
