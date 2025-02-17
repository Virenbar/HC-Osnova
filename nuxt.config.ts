import { execSync } from "child_process";

const exec = (command: string) => execSync(command).toString().trim();
const branch = exec("git branch --show-current") || process.env.HEAD;
const hash = exec("git rev-parse HEAD") || process.env.COMMIT_REF;
const date = new Date().toISOString();

export default defineNuxtConfig({
  modules: [
    "@artmizu/yandex-metrika-nuxt",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap"
  ],
  colorMode: { dataValue: "bs-theme" },
  yandexMetrika: { id: "87731504" },
  site: {
    name: "HC Osnova",
    url: "https://virenbar.github.io"
  },
  runtimeConfig: {
    public: {
      repository: "https://github.com/Virenbar/HC-Osnova",
      branch,
      hash,
      date
    }
  },
  // Silencing the deprecation warnings
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"]
        },
      }
    }
  },
  compatibilityDate: "2024-10-02"
});
