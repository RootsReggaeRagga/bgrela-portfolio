<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  education: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="timeline-item">
    <h4 class="h4 timeline-item-title">
      {{ locale === 'en' ? education.title?.en : education.title?.pl }}
    </h4>

    <span>{{ education.year }}</span>

    <p class="timeline-text">
      {{ locale === 'en' ? education.description?.en : education.description?.pl }}
    </p>
  </li>
</template>