<script setup>
import { useI18n } from 'vue-i18n'

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Services */
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <p>
        {{ $t('home.welcome') }}
      </p>

      <p>
        {{ $t('home.description') }}
      </p>

      <p>
        {{ $t('home.description2') }}
      </p>

      <p>
        {{ $t('home.description3') }}
      </p>
      
      <p>
        {{ $t('home.description4') }}
      </p>

      <p>
        {{ $t('home.description-more') }}
        <a href="https://www.linkedin.com/in/bart%C5%82omiej-grela-2bb215112/" class="contact-link" target="_blank">Bartłomiej Grela</a>
      </p>
    </section>

    <div class="separator"></div>

    <!-- service -->

    <section class="service my-10">
      <h3 class="h3 service-title">
        {{ $t('home.headingWork') }}
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>

    <div class="separator"></div>

    <!-- technologies -->

    <section class="technologies my-10">
      <h3 class="h3 service-title">
        {{ $t('home.headingTechnologies') }}
      </h3>

      <ul class="technologies__list flex flex-wrap gap-3 justify-center">
        <li class="technologies__list-item">Javascript</li>
        <li class="technologies__list-item">Typescript</li>
        <li class="technologies__list-item">Scala</li>
        <li class="technologies__list-item">Angular</li>
        <li class="technologies__list-item">Vue</li>
        <li class="technologies__list-item">Nuxt</li>
        <li class="technologies__list-item">Wordpress</li>
        <li class="technologies__list-item">Woocommerce</li>
        <li class="technologies__list-item">PHP</li>
        <li class="technologies__list-item">Postgresql</li>
        <li class="technologies__list-item">Postman</li>
        <li class="technologies__list-item">Scrum</li>
        <li class="technologies__list-item">Boostrap</li>
        <li class="technologies__list-item">Tailwindcss</li>
      </ul>

    </section>
  </article>
</template>