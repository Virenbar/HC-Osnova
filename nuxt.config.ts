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
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@funken-studio/sitemap-nuxt-3",
    "@artmizu/yandex-metrika-nuxt"
  ],
  content: {
    markdown: {
      anchorLinks: false
    }
  },
  colorMode: { dataValue: "bs-theme" },
  yandexMetrika: { id: "87731504" },
  sitemap: { hostname: "https://virenbar.github.io" }
});
