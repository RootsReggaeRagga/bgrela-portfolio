<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  repos: Object,
})

onMounted(() => {
  useLocaleStore()
})
</script>

<template> 
    <div class="container">
        {{ repos }}
        <div v-if="repos && repos.length > 0" class="flex flex-wrap pt-4 md:-mr-6">
          <div
            v-for="repo in repos"
            :key="repo.id"
            class="w-full md:w-1/2 lg:w-1/3 md:pr-6 pb-4"
          >
            {{ name }}
          </div>
        </div>
      </div>
</template>
