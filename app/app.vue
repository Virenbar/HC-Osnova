<script setup lang="ts">
const title = 'ЖК Основа';
const description = 'Сайт ЖК Основа';
const logo = useBaseURL('/favicon/mstile-70x70.png');
useHead({
  titleTemplate: chunk => (chunk ? `${chunk} - ` : '') + title,
  meta: [{ name: 'description', content: description }],
  script: [{ src: 'https://kit.fontawesome.com/3d652cc361.js', crossorigin: 'anonymous' }],
  htmlAttrs: { lang: 'ru' },
});
useSeoMeta({
  ogDescription: description,
  ogImage: logo,
  ogImageSecureUrl: logo,
  ogSiteName: title,
  ogTitle: title,
  ogType: 'website',
  ogUrl: 'https://virenbar.github.io/HC-Osnova/',
  twitterCard: 'summary',
  twitterDescription: description,
  twitterImage: logo,
  twitterTitle: title,
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
