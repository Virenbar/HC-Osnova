import { execSync } from 'child_process';

const exec = (command: string) => execSync(command).toString().trim();
const repository = 'https://github.com/Virenbar/HC-Osnova';
const branch = exec('git branch --show-current') || process.env.HEAD;
const hash = exec('git rev-parse HEAD') || process.env.COMMIT_REF;
const date = new Date().toISOString();

export default defineNuxtConfig({
  modules: [
    '@artmizu/yandex-metrika-nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
  ],
  css: ['@/assets/css/styles.scss'],
  site: {
    name: 'HC Osnova',
    url: 'https://virenbar.github.io',
  },
  colorMode: { dataValue: 'bs-theme' },
  runtimeConfig: {
    public: { repository, branch, hash, date },
  },
  compatibilityDate: '2025-07-26',
  // Create sitemap with nuxt build
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },
  // Silencing the deprecation warnings
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['color-functions', 'global-builtin', 'import', 'if-function'],
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  yandexMetrika: { id: '87731504' },
});
