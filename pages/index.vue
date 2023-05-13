<script setup lang="ts">
const { entrances } = useData();

</script>
<template>
  <div class="card mx-auto" style="max-width: 40rem;">
    <div class="card-body">
      <ul>
        <li v-for="E in entrances" :key="E.ID">
          <NuxtLink :to="`/entrance/${E.ID}/`">
            Подъезд №{{ E.ID }}
          </NuxtLink>
        </li>
      </ul>

      <p class=" d-flex justify-content-center">
        <a href="https://t.me/ochoba_5" target="_blank">
          <img class="img-thumbnail bg-white" src="/image/telegram.jpg">
        </a>
      </p>
    </div>
  </div>
</template>
