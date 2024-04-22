<script setup>
import { useI18n } from 'vue-i18n'

useHead({
})

onMounted(() => {
  useLocaleStore()
})
const services = [
    {
      id: 1,
      title: 'Wordpress',
      description: {
        en: 'WordPress is a popular open-source content management system (CMS) that powers millions of websites worldwide. It was initially released in 2003 as a blogging platform but has since evolved into a versatile tool for creating various types of websites, including blogs, business websites, e-commerce stores, portfolios, and more.',
        pl: 'WordPress to popularny system zarządzania treścią (CMS) typu open source, który obsługuje miliony witryn na całym świecie. Został pierwotnie wydany w 2003 roku jako platforma blogowa, ale od tego czasu przekształcił się w wszechstronne narzędzie do tworzenia różnego rodzaju witryn internetowych, w tym blogów, witryn biznesowych, sklepów e-commerce, portfolio i innych.',
      },
      icon: 'logo-wordpress',
      image: null,
    },
    {
      id: 2,
      title: 'Vue JS',
      description: {
        en: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is a library that enables the creation of dynamic, reactive web applications.',
        pl: 'Vue.js to progresywny framework JavaScript do budowania interfejsów użytkownika. Jest to biblioteka, która umożliwia tworzenie dynamicznych, reaktywnych aplikacji internetowych.',
      },
      icon: 'logo-vue',
      image: null,
    },
    {
      id: 3,
      title: 'Angular',
      description: {
        en: "Angular is a popular open-source web application framework maintained by Google and a community of developers. It's used for building dynamic single-page web applications (SPAs) and cross-platform mobile applications. Angular is based on TypeScript, a superset of JavaScript, which adds static types and other features to the language.",
        pl: 'Angular to popularna platforma aplikacji internetowych o otwartym kodzie źródłowym, obsługiwana przez Google i społeczność programistów. Służy do tworzenia dynamicznych jednostronicowych aplikacji internetowych (SPA) i wieloplatformowych aplikacji mobilnych. Angular opiera się na TypeScript, nadzbiorze JavaScript, który dodaje do języka typy statyczne i inne funkcje.',
      },
      icon: 'logo-angular',
      image: null,
    },
  ]

const { locale } = useI18n({ useScope: 'global' })

/* Services */
//const { data: services } = await useFetch('/api/services')
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