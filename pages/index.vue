<script setup lang="ts">
definePageMeta({
  name: 'home',
});
useHead({
  title: 'Home',
});
</script>

<script lang="ts">
const ABOUT_CONFIG = [
  'MAOJI Group, one of the main refrigerant exporters in China, is a fluorine chemical product company integrating professional research and development, production and sales, with an annual throughput of more than 12,000 tons of refrigerant.',
  'MAOJI Group has more than 20 years of refrigerant operation experience. All of our refrigerants are strictly tested in our own quality testing center, with 100% guarantee of quality. Our purity standard is more than 99.9% and all other parameters meet ARI-700 standard.',
  'With the new trend of refrigerant gas replacement from HFC to HFO(Low GWP, such as R1234yf), MAOJI Group specialized in researching and developing the new product line of HFO for our worldwide clients. After years of working, we have become a key producer and supplier for the new HFO gas such as R1234yf, hoping to promote this low GWP gas to the worldwide market.',
];
</script>

<template>
  <div>
    <div class="relative mb-10">
      <div class="pointer-events-none absolute inset-0">
        <img
          class="size-full object-cover"
          src="/hero-bg.jpg"
          role="presentation"
          alt=""
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div
        class="container relative z-10 grid grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2 lg:py-20"
      >
        <div class="text-center text-lg sm:text-xl lg:text-start lg:text-2xl">
          <div class="mb-6 text-white">
            MAOJI offers worldwide delivery of top-quality refrigerants R1234yf,
            R134a, R32, R22, R410a, R407c, R404a, R507 in disposable or
            refillable cylinders, small cans, Ton drums and ISO tanks.
          </div>

          <div>
            <SiteLink
              class="inline-flex items-center rounded-lg bg-primary-500 px-4 py-2 text-white hover:bg-primary-600 active:bg-primary-700 lg:px-6 lg:py-4"
              to="/products"
            >
              View Products
            </SiteLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h2 class="my-8 text-center text-4xl font-bold lg:text-start">
        Hot Sales
      </h2>

      <div class="space-y-8 lg:space-y-12">
        <SiteLink class="block" to="/products/r1234yf">
          <img
            class="aspect-[1440/804] w-full"
            src="/hotsales-1.jpg"
            alt="R-1234yf"
          />
        </SiteLink>

        <SiteLink class="block" to="/products/r134a">
          <img
            class="aspect-[1440/804] w-full"
            src="/hotsales-2.jpg"
            alt="R-134a"
          />
        </SiteLink>
      </div>

      <h2
        id="about-us"
        class="my-8 scroll-mt-20 text-center text-4xl font-bold lg:text-start"
      >
        About Us
      </h2>

      <div class="space-y-8 lg:space-y-12">
        <div
          v-for="(item, i) of ABOUT_CONFIG"
          :key="i"
          class="relative flex aspect-[5/2] max-h-[455px] w-full items-center text-white even:justify-end"
        >
          <img
            class="absolute inset-0 h-full w-full object-cover"
            :src="`/about-bg-${i}.jpg`"
            role="presentation"
            alt=""
          />
          <div class="absolute inset-0 bg-black/50"></div>
          <p
            class="relative mx-12 my-4 text-sm md:w-1/2 md:text-base lg:w-1/3 lg:text-xl"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
