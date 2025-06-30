import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  site: {
    // url: 'https://localhost:3000',
    name: 'Hoy Bailaré',
    currentLocale: 'es_AR',
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: [{
    path: '~/components',
    pathPrefix: false,
  }],
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    '@nuxt/image',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ssr: true,
  image: {
    dir: 'assets/img',
  },
  seo: {
    meta: {
      description: 'My awesome website',
      themeColor: [
        { content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
      author: 'Manuel Villarinos',
      colorScheme: 'light',
      applicationName: 'hoy-bailare-app',
    },
  },
  tailwindcss: {
    exposeConfig: false,
  },
})
