<script setup lang="ts">
const config = useRuntimeConfig();
let tree = `${config.public.repository}/tree/${config.public.hash}`;
tree = tree.replace("unknown", config.public.branch);
</script>
<template>
  <footer class="container-fluid py-1 px-3 bg-body-secondary d-flex justify-content-between">
    <div class="d-none d-md-block">
      Made with
      <a href="https://nuxt.com/" target="_blank">
        <i class="fa-solid fa-mountain" /> Nuxt
      </a>
      and
      <a href="https://pages.github.com/" target="_blank">
        <i class="fa-brands fa-github" /> GitHub Pages
      </a>
    </div>
    <div>
      Version: <a :href="tree" class="text-link" target="_blank">
        {{ config.public.branch }}@{{ config.public.hash.substring(0, 7) }}
      </a>#{{ formatDate(new Date(config.public.date)) }}
    </div>
  </footer>
</template>
