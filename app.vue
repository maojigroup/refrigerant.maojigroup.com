<script setup lang="ts">
const SITE_TITLE = 'MAOJI gas | MAOJI GROUP';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${SITE_TITLE}` : SITE_TITLE;
  },
});
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <app-header class="flex-none" />
    <div class="flex-auto">
      <NuxtPage />
    </div>
    <app-footer class="flex-none" />
  </div>
</template>

<style>
body {
  min-width: 320px;
}

.container {
  @apply mx-auto px-4 lg:px-8;
}
</style>
