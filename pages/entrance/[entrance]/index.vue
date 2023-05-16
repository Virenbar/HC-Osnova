<script setup lang="ts">
const { params } = useRoute();
const entrance = params.entrance as string;
const E = useData().getEntrance(entrance);
</script>
<template>
  <div>
    <div class="card">
      <div class="card-header">
        Подъезд №{{ entrance }} (Квартир: {{ E.flatCount }})
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li v-for="F in E.floors" :key="F.title" class="list-group-item">
            <NuxtLink :to="`./floor-${F.title}/`" class="d-flex justify-content-between align-items-center">
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
ul {
  max-width: 15rem;
  --bs-list-group-item-padding-x: 5px;
  --bs-list-group-item-padding-y: 5px;
}
</style>
