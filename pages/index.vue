<script setup lang="ts">
const { entrances } = useData();
</script>
<template>
  <ul>
    <li v-for="E in entrances" :key="E.ID">
      <NuxtLink :to="'/entrance/' + E.ID">
        Подъезд №{{ E.ID }}
      </NuxtLink>
      <!-- https://t.me/ochoba_5 -->
    </li>
  </ul>
</template>
