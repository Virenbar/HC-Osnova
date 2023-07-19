<script setup lang="ts">
import { TreeNode } from "types";

const props = defineProps<Props>();
interface Props { node: TreeNode }

const node = computed(() => props.node);
</script>
<template>
  <ul>
    <li>
      <a v-if="node.path" :href="node.path" target="_blank"> {{ node.title }} </a>
      <template v-else>
        {{ node.title }}
      </template>
    </li>
    <li v-for="N in node.child" :key="N.title">
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
