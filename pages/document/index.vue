<script setup>
const { documents } = useData();
</script>
<template>
  <div class="card">
    <Title>Документы</Title>
    <div class="card-header">
      <b>Документы</b>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li v-for="D in documents" :key="D.ID" class="list-group-item">
          <a :href="D.path" target="_blank" class="d-flex justify-content-between align-items-center">
            {{ D.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
ul {
  max-width: 20rem;
}
</style>
