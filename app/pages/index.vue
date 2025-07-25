<script setup lang="ts">
const house = 'https://наш.дом.рф/сервисы/каталог-новостроек/объект';
const guid = '88083f91-817d-4629-bf36-2abfc06d790a';
</script>
<template>
  <div class="container py-3">
    <div class="card text-center">
      <div class="card-header">
        <b>Подъезды</b>
      </div>
      <div class="card-body">
        <EntranceList class="mx-auto" />
      </div>
    </div>

    <div class="card text-center mt-1">
      <div class="card-header">
        <b>Ссылки</b>
      </div>
      <div class="card-body">
        <div class="text-8xl">
          Дом на ДОМ.РФ
        </div>
        <div class="btn-group">
          <ButtonLink :to="`${house}/40746`">
            Дом 1.1
          </ButtonLink>
          <ButtonLink :to="`${house}/40747`">
            Дом 1.2
          </ButtonLink>
          <ButtonLink :to="`${house}/40748`">
            Дом 1.3
          </ButtonLink>
        </div>
        <div class="m-1">
          <ButtonLink :to="`https://dom.gosuslugi.ru/#!/house-view?guid=${guid}&typeCode=1`">
            ГИС ЖКХ
          </ButtonLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 40rem;
}
</style>
