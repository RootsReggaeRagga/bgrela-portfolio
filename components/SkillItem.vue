<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  skill: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
    <li class="technologies__list-item">{{ locale === 'en' ? skill.name?.en : skill.name?.pl }}</li>
</template>