<script setup lang="ts">
const props = defineProps<Props>();
const handleError = () => clearError({ redirect: "/" });

interface Props {
  error: Object
}
</script>
<template>
  <h3>Error</h3>
  <div>
    <ul>
      <li v-for="(value, key) in props.error" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
  <button class="btn btn-warning" @click="handleError">
    Clear errors
  </button>
</template>
