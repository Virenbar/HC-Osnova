export default defineNuxtConfig({
  css: [
    "@/assets/css/styles.scss"
  ],
  app: {
    head: {
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "@Virenbar" }
      ],
      link: [{ href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css", rel: "stylesheet" }],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" },
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
    documentDriven: {
      page: false
    },
    markdown: {
      anchorLinks: false
    }
  },
  colorMode: {
    dataValue: "bs-theme"
  },
  yandexMetrika: {
    id: "87731504"
  },
  sitemap: {
    hostname: "https://example.com"
  }
});
