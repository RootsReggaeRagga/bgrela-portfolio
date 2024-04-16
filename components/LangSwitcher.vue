<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '../composables/locale'
const { locale } = useI18n({ useScope: 'global' })

const cookieLocale = useLocaleStore()

onMounted(() => {
  useLocaleStore()
})

function changeLang() {
  if (locale.value === 'pl') {
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
  <div class="cursor-pointer transition-all fade h-100 flex items-center justify-between" @click="changeLang()" title="switch language">
    <!-- <img :src="`/${locale}.png`" class="w-9"> -->
    <span class="bg-icon-box text-uppercase">
      <img :src="`/${locale}.png`" class="w-4">
    </span>
  </div>
</template>

<style scoped>
    .p-dropdown {
        border: none!important;
    }
</style>