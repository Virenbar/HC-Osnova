<script setup lang="ts">
const { params } = useRoute();
const entrance = params.entrance as string;
const floor = params.floor as string;
const flat = params.flat as string;
const E = useData().getEntrance(entrance);
const F = useData().getFloor(entrance, floor);
const FL = useData().getFlat(entrance, floor, flat);
const img = `/svg/turns/${E.title}/flats/${F.title}/${FL.ID}.svg`;
</script>
<template>
  <div class="container py-3">
    <div class="card">
      <Title>Подъезд №{{ entrance }} - Этаж №{{ floor }} - Квартира №{{ flat }}</Title>
      <div class="card-header">
        <b>
          <NuxtLink to="../../">
            Подъезд №{{ entrance }}
          </NuxtLink> -
          <NuxtLink to="../">
            Этаж №{{ floor }}
          </NuxtLink> - Квартира №{{ flat }}
        </b>
      </div>
      <div class="card-body">
        <ul>
          <li>Площадь: {{ FL.area }} м²</li>
          <li>Комнат: {{ FL.room }}</li>
        </ul>
        <CommonImage :src="img" />
      </div>
    </div>
  </div>
</template>
