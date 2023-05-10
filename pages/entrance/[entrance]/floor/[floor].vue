<script setup lang="ts">
const { params } = useRoute();
const entrance = params.entrance as string;
const floor = params.floor as string;
const E = useData().getEntrance(entrance);
console.log(E);
console.log(floor);
const F = useData().getFloor(entrance, floor);
</script>
<template>
  <div>
    <div class="card">
      <div class="card-header">
        Подъезд №{{ entrance }} - Этаж №{{ floor }} (Квартир: {{ F.flatCount }})
      </div>
      <div class="card-body">
        <img :src="`/turns/${E.title}/${F.title}.svg`">
      </div>
    </div>
  </div>
</template>
