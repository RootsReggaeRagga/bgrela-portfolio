<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'
const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()

locale.value = cookieLocale.getLocale || 'pl'

const loadingPage = ref()


onBeforeMount(() => {
  loadingPage.value = true
})

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = false
  }, 1000)
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