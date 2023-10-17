<script setup lang="ts">
import { TreeNode } from "../../types";

const props = defineProps<Props>();
interface Props { node: TreeNode }

const href = computed(() => useBaseURL(props.node.path));
</script>
<template>
  <ul>
    <li>
      <a v-if="href" :href="href" target="_blank"> {{ props.node.title }} </a>
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
