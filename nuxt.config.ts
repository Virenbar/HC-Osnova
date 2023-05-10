export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "@Virenbar" }
      ],
      link: [{ href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css", rel: "stylesheet" }],
      script: [{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" }]
    }
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode"
  ],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false
    }
  },
  colorMode: {
    dataValue: "bs-theme"
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  }
});
