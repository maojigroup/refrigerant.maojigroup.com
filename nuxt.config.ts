// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxt/content',
  ],
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: [
        '/products/r22',
        '/products/r32',
        '/products/r404a',
        '/products/r407c',
        '/products/r410a',
        '/products/r507',
        '/products/r1234yf',
        '/products/r134a',
      ],
    },
  },
  content: {},
});
