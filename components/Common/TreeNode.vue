<script setup lang="ts">
import type { TreeNode } from "../../types";

const props = defineProps<Props>();
interface Props { node: TreeNode }

const url = computed(() => useBaseURL(props.node.path));
</script>
<template>
  <ul>
    <li>
      <NuxtLink v-if="url" :to="url" target="_blank">
        {{ props.node.title }}
      </NuxtLink>
      <template v-else>
        {{ props.node.title }}
      </template>
    </li>
    <li v-for="N in props.node.child" :key="N.title">
      <CommonTreeNode :node="N" />
    </li>
  </ul>
</template>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 1.5rem;
}
</style>
