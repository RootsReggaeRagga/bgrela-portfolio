// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss',
  ],


  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Bartłomiej Grela - Software Developer • Engineer • Programmer"
    }
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    'nuxt3-leaflet'
  ],

  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },

  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
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
    transpile: ['pinia-orm'],
  },

})
