<script setup lang="ts">
const house = "https://наш.дом.рф/сервисы/каталог-новостроек/объект";
const guid = "88083f91-817d-4629-bf36-2abfc06d790a";
</script>
<template>
  <div class="container py-3" style="max-width: 40rem;">
    <div class="card mx-auto text-center">
      <div class="card-header">
        <b>Подъезды</b>
      </div>
      <div class="card-body">
        <EntranceList class="mx-auto" />
      </div>
    </div>

    <div class="card mx-auto text-center m-1">
      <div class="card-header">
        <b>Ссылки</b>
      </div>
      <div class="card-body">
        <div class="text-8xl">
          Дом на ДОМ.РФ
        </div>
        <div class="btn-group">
          <NuxtLink class="btn btn-primary" :to="`${house}/40746`" target="_blank">
            Дом 1.1
          </NuxtLink>
          <NuxtLink class="btn btn-primary" :to="`${house}/40747`" target="_blank">
            Дом 1.2
          </NuxtLink>
          <NuxtLink class="btn btn-primary" :to="`${house}/40748`" target="_blank">
            Дом 1.3
          </NuxtLink>
        </div>
        <div class="m-1">
          <NuxtLink class="btn btn-primary" :to="`https://dom.gosuslugi.ru/#!/house-view?guid=${guid}&typeCode=1`" target="_blank">
            ГИС ЖКХ
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
