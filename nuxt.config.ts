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
    "@nuxtjs/color-mode",
    "@artmizu/yandex-metrika-nuxt",
    ["@funken-studio/sitemap-nuxt-3", { hostname: "https://virenbar.github.io" }],
    "@nuxt/image"
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
  },
  devtools: { enabled: false } //Windows 7 = false
});
