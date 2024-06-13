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
  routeRules: {
    '/Chlorodifluoromethane_R22/': { redirect: '/products/r22/' },
    '/tetrafluoroethane_R134a/': { redirect: '/products/r134a/' },
    '/Mixed_refrigerant_R404A/': { redirect: '/products/r404a/' },
    '/Mixed_refrigerant_R407C/': { redirect: '/products/r407c/' },
    '/Mixed_refrigerant_R410A/': { redirect: '/products/r410a/' },
    '/Mixed_refrigerant_R507/': { redirect: '/products/r507/' },
    '/HFO_R1234yf/': { redirect: '/products/r1234yf/' },
  },
});
