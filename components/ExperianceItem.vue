<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  experiance: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="timeline-item">
    <h4 class="h4 timeline-item-title">
      {{ locale === 'en' ? experiance.title?.en : experiance.title?.pl }}
    </h4>

    <span>{{ locale === 'en' ? experiance.year?.en : experiance.year?.pl }}</span>

    <p class="timeline-text">
      {{ locale === 'en' ? experiance.description?.en : experiance.description?.pl }}
    </p>
  </li>
</template>