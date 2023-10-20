<script setup lang="ts">
const props = defineProps<Props>();

interface Props { src: string }
</script>
<template>
  <NuxtLink :to="useBaseURL(props.src)" target="_blank">
    <NuxtImg class="img-thumbnail w-100" :src="props.src" />
  </NuxtLink>
</template>
<style scoped>
img {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
