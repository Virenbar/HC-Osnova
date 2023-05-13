<script setup lang="ts">
const props = defineProps<Props>();

interface Props { src: string }
</script>
<template>
  <a :href="props.src" target="_blank">
    <img class="img-thumbnail w-100 bg-body-secondary" :src="props.src">
  </a>
</template>
