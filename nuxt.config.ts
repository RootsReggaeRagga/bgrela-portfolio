// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/style.css', 
    '~/assets/css/navbar.css'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Bartłomiej Grela Portfolio"
    }
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],

  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  }

})
