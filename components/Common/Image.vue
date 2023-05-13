<script setup lang="ts">
const props = defineProps<Props>();
const src = computed(() => props.src.startsWith("/") ? `${useRuntimeConfig().app.baseURL}${props.src.slice(1)}` : props.src);

interface Props { src: string }
</script>
<template>
  <a :href="src" target="_blank">
    <img class="img-thumbnail w-100 bg-body-secondary" :src="src">
  </a>
</template>
