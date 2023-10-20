<script setup lang="ts">
const { params } = useRoute();
const entrance = params.entrance as string;
const floor = params.floor as string;

const F = useData().getFloor(entrance, floor);
</script>
<template>
  <div class="container py-3">
    <div class="card">
      <Title>Подъезд №{{ entrance }} - Этаж №{{ floor }}</Title>
      <div class="card-header">
        <b>
          <NuxtLink :to="`/entrance/${entrance}/`">
            Подъезд №{{ entrance }}
          </NuxtLink>
          - Этаж №{{ floor }}
        </b>
      </div>
      <div class="card-body">
        <div class="text-center">
          Квартир: {{ F.flatCount }}
        </div>
        <div class="d-flex justify-content-center flex-wrap">
          <template v-for="flat in F.flats" :key="flat.ID">
            <NuxtLink class="btn btn-primary m-1" :to="`/entrance/${entrance}/floor-${F.title}/flat-${flat.title}/`">
              {{ flat.title }}
            </NuxtLink>
          </template>
        </div>
        <CommonImage :src="F.image" />
      </div>
    </div>
  </div>
</template>
