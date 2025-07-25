<script setup lang="ts">
const { parkings } = useData();
</script>
<template>
  <ul class="list-group mx-auto">
    <li v-for="P in parkings" :key="P.ID" class="list-group-item">
      <NuxtLink :to="`/parking/${P.ID}/`" class="d-flex justify-content-between align-items-center">
        {{ P.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
<style scoped>
ul {
  max-width: 20rem;
}
</style>
