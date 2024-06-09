// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: 'https://refrigerant.maojigroup.com',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/sitemap',
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
