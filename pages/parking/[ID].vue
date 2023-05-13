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
        <CommonImage :src="img" />
      </div>
    </div>
  </div>
</template>
