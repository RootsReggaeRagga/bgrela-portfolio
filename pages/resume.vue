<script setup>
import { useI18n } from 'vue-i18n'

useHead({

})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

const { data: educations } = await useFetch('/api/educations')
const { data: experiances } = await useFetch('/api/experiances')
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="bg-icon-box bg-icon-box--big">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          {{ $t('resume.education') }}
        </h3>
      </div>

      <ol class="timeline-list">
        <EducationItem  v-for="education in educations" :key="education.id" :education="education"/>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="bg-icon-box bg-icon-box--big">
          <ion-icon name="rocket-outline" />
        </div>

        <h3 class="h3">
          {{ $t('resume.experiance') }}
        </h3>
      </div>

      <ol class="timeline-list">
        <ExperianceItem  v-for="experiance in experiances" :key="experiance.id" :experiance="experiance"/>
      </ol>
    </section>

    <div class="separator" />

    <section class="skill">

      <div class="grid grid-cols-1">
        <div class="col-span-1 mx-4 mb-4">
          <h3 class="h3 skills-title">
            {{ $t('resume.skills.langs') }}
          </h3>
          <ul class="technologies__list flex flex-wrap gap-3 justify-center">
            <li class="technologies__list-item">Javascript</li>
            <li class="technologies__list-item">Typescript</li>
            <li class="technologies__list-item">Scala</li>
            <li class="technologies__list-item">PHP</li>
          </ul>
        </div>

        <div class="separator" />

        <div class="col-span-1 mx-4 mb-4">
          <h3 class="h3 skills-title">
            {{ $t('resume.skills.frameworks') }}
          </h3>
          <ul class="technologies__list flex flex-wrap gap-3 justify-center">
            <li class="technologies__list-item">Angular</li>
            <li class="technologies__list-item">Vue</li>
            <li class="technologies__list-item">Nuxt</li>
            <li class="technologies__list-item">Wordpress</li>
            <li class="technologies__list-item">Woocommerce</li>
          </ul>
        </div>
      </div>

      <div class="separator" />

      <div class="grid grid-cols-1 mb-6">
        <div class="col-span-1">
          <h3 class="h3 skills-title">
            {{ $t('resume.skills.others') }}
          </h3>
          <ul class="technologies__list flex flex-wrap gap-3 justify-center">
            <li class="technologies__list-item">Git</li>
            <li class="technologies__list-item">HTML5</li>
            <li class="technologies__list-item">CSS/SCSS (BEM)</li>
            <li class="technologies__list-item">Bootstrap</li>
            <li class="technologies__list-item">Tailwind</li>
            <li class="technologies__list-item">Foundation</li>
            <li class="technologies__list-item">RWD</li>
            <li class="technologies__list-item">Mobile First</li>
            <li class="technologies__list-item">REST API</li>
            <li class="technologies__list-item">SQL</li>
            <li class="technologies__list-item">GraphQL</li>
            <li class="technologies__list-item">AWD</li>
            <li class="technologies__list-item">Scrum</li>
          </ul>
        </div>
      </div>

    </section>
  </article>
</template>