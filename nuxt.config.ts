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
      branch: process.env.HEAD || "master",
      hash: process.env.COMMIT_REF || "unknown",
      date: new Date().toISOString()
    }
  }
});
