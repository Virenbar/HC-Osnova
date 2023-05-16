<script setup lang="ts">
const { entrances } = useData();
</script>
<template>
  <ul class="list-group">
    <li v-for="E in entrances" :key="E.ID" class="list-group-item">
      <NuxtLink :to="`/entrance/${E.ID}/`" class="d-flex justify-content-between align-items-center">
        Подъезд №{{ E.ID }}
        <span class="badge bg-primary rounded-pill">{{ E.flatFirst }} - {{ E.flatLast }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>
