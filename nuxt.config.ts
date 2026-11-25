import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    smtpHost: '',
    smtpPort: '',
    smtpUser: '',
    smtpPass: '',
    mailTo: ''
  },

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
    head: {
      title: 'Chirac Dona Michoagan | Développeur Web Freelance au Bénin',
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      charset: 'utf-8',
      // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      meta: [
        { name: 'description', content: 'Développeur web freelance (Laravel, React, Vue.js) au Bénin et à l\'international. Création de sites web modernes et sur-mesure. Devis gratuit sous 48h.' },
        { name: 'keywords', content: 'Chirac Dona Michoagan, développeur web freelance, création de site web, développement web, Bénin, devis gratuit, site internet professionnel, meilleurs services, meilleurs tarifs' },
        { name: 'author', content: 'Chirac Dona Michoagan' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['@/assets/css/main.css'],
  compatibilityDate: '2025-03-11', 
})