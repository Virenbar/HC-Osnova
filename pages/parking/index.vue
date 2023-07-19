<script setup>
const { parkings } = useData();
</script>
<template>
  <div class="card">
    <Title>Паркинг</Title>
    <div class="card-header">
      <b>Паркинг</b>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li v-for="P in parkings" :key="P.ID" class="list-group-item">
          <NuxtLink :to="`/parking/${P.ID}/`" class="d-flex justify-content-between align-items-center">
            {{ P.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
ul {
  max-width: 15rem;
  /* --bs-list-group-item-padding-x: 5px;
  --bs-list-group-item-padding-y: 5px; */
}
</style>
