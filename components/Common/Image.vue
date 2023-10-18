<script setup lang="ts">
const props = defineProps<Props>();
const src = computed(() => useBaseURL(props.src));

interface Props { src: string }
</script>
<template>
  <a :href="src" target="_blank">
    <img class="img-thumbnail w-100" :src="src">
  </a>
</template>
<style scoped>
img {
  background-color: rgba(150, 150, 150, 0.5);
}
</style>
