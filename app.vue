<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: unknown) => { return titleChunk ? `${titleChunk} - ЖК Основа` : "ЖК Основа"; }
});
useServerSeoMeta({
  ogType: "website",
  ogTitle: "ЖК Основа",
  ogSiteName: "ЖК Основа",
  description: "Сайт ЖК Основа"
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
