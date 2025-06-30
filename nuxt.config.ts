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

      // Nuxt SEO Utils already sets the below tags for you
      ogSiteName: 'Hoy Bailaré',
      ogLocale: 'es_AR',
      ogType: 'website',
      ogUrl: 'https://localhost:3000/',
      ogTitle: 'Hoy Bailaré',

      // Other Nuxt SEO modules handles these
      ogImage: 'https://example.com/my-og-image.png',
      robots: 'index, follow',
    },
  },
  tailwindcss: {
    exposeConfig: false,
  },
})
