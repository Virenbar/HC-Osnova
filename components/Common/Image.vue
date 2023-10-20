<script setup lang="ts">
const props = defineProps<Props>();
const src = computed(() => useBaseURL(props.src));

interface Props { src: string }
</script>
<template>
  <NuxtLink :to="src" target="_blank">
    <NuxtImg class="img-thumbnail w-100" :src="src" />
  </NuxtLink>
</template>
<style scoped>
img {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
