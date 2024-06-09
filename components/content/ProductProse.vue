<template>
  <div class="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-3">
    <div class="not-prose">
      <slot name="image" />
    </div>

    <div class="prose max-w-full md:col-span-2">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(table) {
  thead:not(:has(th:not(:empty))) {
    display: none;
  }
}
</style>
