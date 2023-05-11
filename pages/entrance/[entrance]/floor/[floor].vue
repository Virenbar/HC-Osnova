<script setup lang="ts">
const { params } = useRoute();
const entrance = params.entrance as string;
const floor = params.floor as string;
const E = useData().getEntrance(entrance);
const F = useData().getFloor(entrance, floor);
const img = `/turns/${E.title}/${F.title}.svg`;
</script>
<template>
  <div class="card">
    <div class="card-header">
      <NuxtLink to="../../">
        Подъезд №{{ entrance }}
      </NuxtLink>
      - Этаж №{{ floor }} (Квартир: {{ F.flatCount }})
    </div>
    <div class="card-body">
      <a :href="img" target="_blank">
        <img class="img-thumbnail w-100 bg-body-secondary" :src="img">
      </a>
    </div>
  </div>
</template>
