<script setup lang="ts">
const { entrances } = useData();
</script>
<template>
  <ul>
    <li v-for="E in entrances" :key="E.ID">
      <NuxtLink :to="'/entrance/' + E">
        Подъезд {{ E.ID }}
      </NuxtLink>
    </li>
  </ul>
</template>
