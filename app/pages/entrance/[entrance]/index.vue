<script setup lang="ts">
const { params } = useRoute();
const entrance = params.entrance as string;
const E = useData().getEntrance(entrance);
</script>
<template>
  <div class="container py-3">
    <div class="card text-center">
      <Title>Подъезд №{{ entrance }}</Title>
      <div class="card-header">
        <b>
          Подъезд №{{ entrance }}
        </b>
      </div>
      <div class="card-body">
        <div>
          Квартир: {{ E.flatCount }}
        </div>
        <ul class="list-group mx-auto">
          <li v-for="F in E.floors" :key="F.title" class="list-group-item">
            <NuxtLink :to="`/entrance/${entrance}/floor-${F.title}/`" class="d-flex justify-content-between align-items-center">
              Этаж №{{ F.title }}
              <span class="badge bg-primary rounded-pill">{{ F.flatFirst }} - {{ F.flatLast }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 40rem;
}

ul {
  max-width: 20rem;
}
</style>
