// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: confirm the production domain. allinonetec.com is the current site this one replaces.
const site = process.env.PUBLIC_SITE_URL || 'https://allinonetec.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'am'],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    // three is only imported lazily by the hero scene, so the dev server would
    // discover it late and re-bundle mid-session (504 Outdated Optimize Dep).
    optimizeDeps: { include: ['three'] },
    build: {
      // The lazy scene chunk is about 560 KB raw and 140 KB compressed, inside
      // the 200 KB compressed budget and never on the critical render path.
      chunkSizeWarningLimit: 600,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', am: 'am-ET' },
      },
    }),
  ],
});

