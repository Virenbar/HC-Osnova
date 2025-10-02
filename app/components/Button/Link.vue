<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  to: string
}
</script>
<template>
  <NuxtLink class="btn btn-primary" :to="props.to" :target="props.to.startsWith('http') ? '_blank' : null">
    <slot />
  </NuxtLink>
</template>
