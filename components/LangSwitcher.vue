<script setup>
import { useI18n } from 'vue-i18n'
//import { useLocaleStore } from '../composables/locale'
//const { locale } = useI18n({ useScope: 'global' })

//const cookieLocale = useLocaleStore()

onMounted(() => {
  //useLocaleStore()
})

function changeLang() {
  if (locale.value === 'tr') {
    cookieLocale.setLocale('en')
    locale.value = 'en'
  }
  else {
    cookieLocale.setLocale('pl')
    locale.value = 'pl'
  }
}
</script>

<template>
  <div class="cursor-pointer transition-all fade w-100 h-100 flex content-center items-center" @click="changeLang()">
    <img :src="`/en.png`" class="h-6">
  </div>
</template>

<style scoped>
    .p-dropdown {
        border: none!important;
    }
</style>