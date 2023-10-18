<script setup lang="ts">
const { params } = useRoute();
const entrance = params.entrance as string;
const floor = params.floor as string;
const E = useData().getEntrance(entrance);
const F = useData().getFloor(entrance, floor);
const img = `/svg/turns/${E.title}/${F.title}.svg`;
</script>
<template>
  <div class="container py-3 text-center">
    <div class="card">
      <Title>Подъезд №{{ entrance }} - Этаж №{{ floor }}</Title>
      <div class="card-header">
        <NuxtLink to="../">
          Подъезд №{{ entrance }}
        </NuxtLink>
        - Этаж №{{ floor }} (Квартир: {{ F.flatCount }})
      </div>
      <div class="card-body">
        <div>
          Квартиры
        </div>
        <div class="d-flex justify-content-center flex-wrap">
          <template v-for="flat in F.flats" :key="flat.ID">
            <NuxtLink class="btn btn-primary m-1" :to="`/entrance/${entrance}/floor-${F.title}/flat-${flat.title}/`">
              {{ flat.title }}
            </NuxtLink>
          </template>
        </div>
        <CommonImage :src="img" />
      </div>
    </div>
  </div>
</template>
