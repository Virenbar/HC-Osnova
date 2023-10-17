<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: unknown) => { return titleChunk ? `${titleChunk} - ЖК Основа` : "ЖК Основа"; }
});
useSeoMeta({
  ogType: "website",
  ogTitle: "ЖК Основа",
  ogSiteName: "ЖК Основа",
  description: "Сайт ЖК Основа",
  ogUrl: computed(() => useRuntimeConfig().app.baseURL + useRoute().path.slice(1))
});
</script>
<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <div class="container py-3">
        <NuxtPage />
      </div>
    </main>
    <PageFooter />
  </div>
</template>
