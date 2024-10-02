<script setup lang="ts">
const title = "ЖК Основа";
const description = "Сайт ЖК Основа";
const logo = useBaseURL("/favicon/mstile-70x70.png");
useHead({
  titleTemplate: (t) => (t ? `${t} - ` : "") + title,
  meta: [
    { name: "description", content: description }
  ],
  htmlAttrs: {
    lang: "ru"
  }
});
useSeoMeta({
  ogType: "website",
  ogTitle: title,
  ogSiteName: title,
  ogUrl: "https://virenbar.github.io/HC-Osnova/",
  ogDescription: description,
  ogImage: logo,
  ogImageSecureUrl: logo,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: logo,
  twitterCard: "summary"
});
</script>
<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <NuxtPage />
    </main>
    <PageFooter />
  </div>
</template>
