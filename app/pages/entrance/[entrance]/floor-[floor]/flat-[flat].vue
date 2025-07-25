<script setup lang="ts">
const { params } = useRoute();
const entrance = params.entrance as string;
const floor = params.floor as string;
const flat = params.flat as string;

const lost = ["1", "5", "14", "30", "176", "200"];

const FL = useData().getFlat(entrance, floor, flat);
</script>
<template>
  <div class="container py-3">
    <div class="card">
      <Title>Подъезд №{{ entrance }} - Этаж №{{ floor }} - Квартира №{{ flat }}</Title>
      <div class="card-header">
        <b>
          <NuxtLink :to="`/entrance/${entrance}/`">
            Подъезд №{{ entrance }}
          </NuxtLink> -
          <NuxtLink :to="`/entrance/${entrance}/floor-${floor}/`">
            Этаж №{{ floor }}
          </NuxtLink>
          - Квартира №{{ flat }}
        </b>
      </div>
      <div class="card-body">
        <ul>
          <li>Площадь: {{ FL.area }} м²</li>
          <li>Комнат: {{ FL.room }}</li>
        </ul>
        <div v-if="lost.includes(flat)" class="text-center">
          <div>
            <b>Изображение отсутствует</b>
          </div>
          Для квартир №{{ lost.join(", №") }} <br>отсутствовали изображения на сайте застройщика
        </div>
        <CommonImage v-else :src="FL.image" />
      </div>
    </div>
  </div>
</template>
