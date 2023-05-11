<script setup lang="ts">
const { params } = useRoute();
const parking = params.ID as string;
const P = useData().getParking(parking);
const img = `/parking/${P.ID}.svg`;
</script>
<template>
  <div>
    <Title>Паркинг ~ {{ P.title }}</Title>
    <div class="card">
      <div class="card-header">
        <NuxtLink to="../">
          Паркинг
        </NuxtLink>
        ~ {{ P.title }}
      </div>
      <div class="card-body">
        <a :href="img" target="_blank">
          <img class="img-thumbnail w-100 bg-body-secondary" :src="img">
        </a>
      </div>
    </div>
  </div>
</template>
