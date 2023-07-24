<script setup lang="ts">
const props = defineProps<Props>();
const src = computed(() => useBaseURL(props.src));

interface Props { src: string }
</script>
<template>
  <a :href="src" target="_blank">
    <img class="img-thumbnail w-100 bg-body-secondary" :src="src">
  </a>
</template>
