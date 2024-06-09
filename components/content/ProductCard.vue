<script setup lang="ts">
defineProps<{
  title: string;
  type?: string;
}>();
</script>

<template>
  <div class="not-prose grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
    <h1 class="text-4xl font-bold">{{ title }}</h1>

    <div class="md:order-first md:row-span-2">
      <slot name="image" />
    </div>

    <div>
      <div class="mb-8">
        <span
          class="inline-flex h-8 items-center rounded bg-primary-500 px-2 text-white"
          >Refrigerants</span
        >
        <span
          v-if="type"
          class="ms-2 inline-flex h-8 items-center rounded border border-primary-500 px-2 text-primary-500"
          >{{ type }}</span
        >
      </div>

      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(table) {
  @apply mb-4 w-full text-center text-xs;

  thead tr {
    @apply odd:bg-primary-500 odd:text-white;
  }

  tbody tr {
    @apply even:bg-primary-500 even:text-white;
  }

  td,
  th {
    @apply px-2 py-1 first:max-w-fit first:border-e first:border-white;
  }
}

:deep(hr) {
  @apply my-2 border-black;
}
</style>
