<script setup lang="ts">
useHead({
  title: 'Contact',
});
</script>

<template>
  <div class="container py-4 lg:py-8">
    <h1 class="sr-only">Contact</h1>

    <img class="w-full" src="/map.jpg" width="1277" height="620" alt="" />

    <div class="relative grid grid-cols-1 gap-x-20 gap-y-4 lg:grid-cols-2">
      <div
        class="absolute bottom-2 left-1/2 top-2 hidden w-px bg-primary-500 lg:block"
      ></div>

      <div>
        <h2 class="mb-2 text-2xl text-primary-500">CHINA</h2>
        <p class="mb-4">
          ZHONGSHAN DONG ROAD#2388 YINTAI BUILDING ROOM 602 YINZHOU AREA, NINGBO
          CITY 315100, CHINA
        </p>

        <h2 class="mb-2 text-2xl text-primary-500">HONGKONG</h2>
        <p>6/F MANULIFE PLACE 348 KWUN TONG ROAD KL HONGKONG</p>
      </div>

      <div>
        <h2 class="mb-2 text-2xl text-primary-500">EUROPE</h2>
        <p>
          We have supply partners covering all countries of Europe including
          German, Poland, Italy, France, Spain, Netherlands...etc, as well as UK
          and Serbia. We could either supply you from Chinese factory directly
          with container shipment at a competitive price, or supply from our
          local partners with shorter delivery time and flexible order quantity.
          Shipment of Local orders are realizing a delivery time within 48 hours
          in major regions.
        </p>
      </div>
    </div>
  </div>
</template>
