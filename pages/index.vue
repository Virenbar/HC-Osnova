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
          <a class="btn btn-primary" :href="`${house}/40746`">
            Дом 1.1
          </a>
          <a class="btn btn-primary" :href="`${house}/40747`">
            Дом 1.2
          </a>
          <a class="btn btn-primary" :href="`${house}/40748`">
            Дом 1.3
          </a>
        </div>
        <div class="m-1">
          <a class="btn btn-primary" :href="`https://dom.gosuslugi.ru/#!/house-view?guid=${guid}&typeCode=1`">
            ГИС ЖКХ
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
