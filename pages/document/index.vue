<script setup>
const { documents, project } = useData();
</script>
<template>
  <div class="container py-3">
    <div class="card">
      <Title>Документы</Title>
      <div class="card-header">
        <b>Документы</b>
      </div>
      <div class="card-body">
        <ul>
          <li v-for="D in documents" :key="D.title">
            <a :href="useBaseURL(D.path)" target="_blank">
              {{ D.title }}
            </a>
          </li>
        </ul>
        <CommonTreeNode :node="project" />
      </div>
    </div>
  </div>
</template>

