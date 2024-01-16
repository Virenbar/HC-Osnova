<script setup lang="ts">
const props = defineProps<Props>();
definePageMeta({
  layout: false
});

const statusCode = computed(() => "statusCode" in props.error ? props.error.statusCode : undefined);

interface Props {
  error: Object
}
</script>
<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <ErrorNotFound v-if="statusCode == 404" />
      <ErrorCommon v-else :error="props.error" />
    </main>
    <PageFooter />
  </div>
</template>
