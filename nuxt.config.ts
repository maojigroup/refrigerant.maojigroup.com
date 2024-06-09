// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: 'https://refrigerant.maojigroup.com',
    trailingSlash: true,
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
      crawlLinks: true,
      routes: ['/sitemap.xml'],
    },
  },
  content: {},
});
