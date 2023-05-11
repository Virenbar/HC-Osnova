<script setup lang="ts">
const { entrances } = useData();
</script>
<template>
  <div class="card">
    <div class="card-header">
      <b>Подъезды</b>
    </div>
    <div class="card-body">
      <ul>
        <li v-for="E in entrances" :key="E.ID">
          <NuxtLink :to="'./' + E.ID">
            Подъезд №{{ E.ID }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
