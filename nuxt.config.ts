export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
    '@nuxt/fonts',
  ],

   fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'google',
        weights: [300, 400, 500, 600, 700]
      },
      {
        name: 'Roboto',
        provider: 'google',
        weights: [300, 400, 500, 700]
      },
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800]
      },
      {
        name: 'Open Sans',
        provider: 'google',
        weights: [300, 400, 600, 700]
      },
      {
        name: 'Lato',
        provider: 'google',
        weights: [300, 400, 700]
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600, 700]
      }
    ]
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['@/assets/css/main.css'],
  compatibilityDate: '2025-03-11', 
})