// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss',
  ],


  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    'nuxt3-leaflet',
  ],
  

  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },


  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

  colorMode: {
    classSuffix: '',
  },

  plugins: [
    
  ],

  build: {
    transpile: ['pinia'],
  },

  // router: {
  //   options: {
  //     strict: true,
  //   },
  // },

})
