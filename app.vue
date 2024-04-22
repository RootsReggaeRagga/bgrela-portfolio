<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'
import { useCookieStore } from './composables/cookie'
const { locale } = useI18n({ useScope: 'global' });

const cookieLocale = useLocaleStore();
const cookie = useCookieStore()


locale.value = cookieLocale.getLocale || 'en';

const loadingPage = ref();


onBeforeMount(() => {
  loadingPage.value = true
})

onMounted(() => {
  useCookieStore()
  setTimeout(() => {
    loadingPage.value = false
  }, 1000)
})
useSeoMeta({
  ogTitle: "Bartłomiej Grela - Software Developer • Engineer • Programmer",
  ogDescription: "",
  ogImage: "logo_preloader.svg",
  ogUrl: "https://bgrela.dev/",
  twitterTitle: "Bartłomiej Grela - Software Developer • Engineer • Programmer",
  twitterDescription: "",
  twitterImage: "logo_preloader.svg",
  twitterCard: "summary"
})

</script>

<template>
  <LoadingPage v-if="loadingPage" />
  <NuxtLayout v-else :class="{
    'theme-light': !darkMode,
    'theme-dark': darkMode,
  }"
  class="h-screen bg-themeBackground p-5">
    <NuxtPage transition />
  </NuxtLayout>
  
</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>