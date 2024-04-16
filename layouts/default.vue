<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

useHead({
  htmlAttrs: {
    lang: locale,
  },
  titleTemplate:(pageTitle) => {
    return pageTitle ? `${pageTitle} -  Bartłomiej Grela - Software Developer • Engineer • Programmer` : 'Bartłomiej Grela - Software Developer • Engineer • Programmer'
  },
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      crossorigin: '',
    },
  ],
  script: [
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      body: false,
      type: 'module',
    },
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      body: false,
      nomodule: true,
    },
  ],
})
</script>

<template>
  <div>
    <div class="container mx-auto max-w-7xl my-6 md:my-6">
      <Navbar class="mx-6 lg:mx-[3]"/>
    </div>
      
    <div class="container mx-auto max-w-7xl">
      <div class="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-10">
        <div class="col-span-3 md:col-span-3 lg:col-span-3 mb-3 md:mb-0 mx-6 md:mx-6 lg:mx-[3]">
          <Sidebar />
        </div>
        

        <div class="col-span-3 md:col-span-4 lg:col-span-7 dark:text-dark mt-4 mx-6 md:mr-6 md:mx-0 lg:mx-[3] md:mt-0 text-center bg-content">
          <slot />
        </div>
      
      </div>
    </div>
    <CookieBar />
    <Footer/>
  </div>
  
</template>