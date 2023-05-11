<script setup>
const { parkings } = useData();
</script>
<template>
  <div class="card">
    <div class="card-header">
      <b>Паркинг</b>
    </div>
    <div class="card-body">
      <ul>
        <li v-for="P in parkings" :key="P.ID">
          <NuxtLink :to="`./${P.ID}/`">
            {{ P.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
