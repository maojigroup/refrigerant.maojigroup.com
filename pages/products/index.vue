<script setup lang="ts">
useHead({
  title: 'Products',
});
</script>

<script lang="ts">
const PRODUCT_CONFIG: { title: string; name: string; img?: string }[][] = [
  [
    {
      title: 'R1234yf',
      name: 'r1234yf',
      img: 'r1234yf.png',
    },
    {
      title: 'R134a',
      name: 'r134a',
      img: 'r134a.png',
    },
  ],
  [
    {
      title: 'R32',
      name: 'r32',
    },
    {
      title: 'R410a',
      name: 'r410a',
    },
    {
      title: 'R407c',
      name: 'r407c',
    },
  ],
  [
    {
      title: 'R404a',
      name: 'r404a',
    },
    {
      title: 'R507',
      name: 'r507',
    },
    {
      title: 'R22',
      name: 'r22',
    },
  ],
];
</script>

<template>
  <div class="container py-4 lg:py-8">
    <h1 class="mb-8 text-4xl font-bold">Products</h1>

    <div class="grid grid-cols-3 gap-4 lg:gap-16">
      <div
        v-for="(row, i) of PRODUCT_CONFIG"
        :key="i"
        class="col-span-full grid grid-cols-subgrid"
      >
        <SiteLink
          v-for="(product, j) of row"
          :key="j"
          class="text-primary-500 hover:text-primary-600"
          :to="`/products/${product.name}`"
        >
          <img
            class="mb-1 aspect-[2/3] rounded object-cover lg:mb-2"
            :src="`/product/${product.img || `${product.name}.jpg`}`"
            alt=""
          />
          <div class="text-center lg:text-lg">{{ product.title }}</div>
        </SiteLink>
      </div>
    </div>
  </div>
</template>
