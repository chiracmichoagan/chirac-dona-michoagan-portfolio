export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',    
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-03-11', 
})