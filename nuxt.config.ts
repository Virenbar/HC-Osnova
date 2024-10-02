import { execSync } from "child_process";

const exec = (command: string) => execSync(command).toString().trim();
const branch = exec("git branch --show-current");
const hash = exec("git rev-parse HEAD");
const date = new Date().toISOString();

export default defineNuxtConfig({
  css: [
    "@/assets/css/styles.scss"
  ],
  app: {
    head: {
      script: [
        { src: "https://kit.fontawesome.com/3d652cc361.js", crossorigin: "anonymous" }
      ]
    }
  },
  modules: [
    "@artmizu/yandex-metrika-nuxt",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    ["@nuxtjs/sitemap", { name: "HC Osnova", site: "https://virenbar.github.io" }]
  ],
  colorMode: { dataValue: "bs-theme" },
  yandexMetrika: { id: "87731504" },
  runtimeConfig: {
    public: {
      repository: "https://github.com/Virenbar/HC-Osnova",
      branch,
      hash,
      date
    }
  },
  compatibilityDate: "2024-10-02"
});
