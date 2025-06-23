// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  appDir: 'app',
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/seo'
  ]
})