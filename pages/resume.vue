<script setup>
import { useI18n } from 'vue-i18n'

useHead({

})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

//const { data: educations } = await useFetch('/api/educations', {server: false})
//const { data: experiances } = await useFetch('/api/experiances', {server: false})

const educations = [
    {
      id: 1,
      title: {
        en: 'HIGH SCHOOL, TEB EDUKACJA – IT SPECIALIST [BIELSKO-BIAŁA - POLAND] ',
        pl: 'TECHNIKUM, TEB EDUKACJA – TECHNIK INFORMATYK [BIELSKO-BIAŁA - POLSKA] ',
      },
      year: "2008-2012",
      description: {
        en: "Learning basics in IT World, programing, hardware, software, graphic designs, network administation etc.",
        pl: "Podstawy świata IT, programowanie, sprzęt, oprogramowanie, projektowanie graficzne, administracja sieciami itp"
      }
    },
    {
      id: 2,
      title: {
        en: 'COLLEGE, HIGH SCHOOL OF FINANCES AND LAW – DATABASE AND INTERNET TECHNOLOGIES [BIELSKO-BIAŁA - POLAND]',
        pl: 'STUDIA, WYŻSZA SZKOŁA FINANSÓW I PRAWA - BAZY DANY I TECHNOLOGIE INTERNETOWE [BIELSKO-BIAŁA - POLSKA]',
      },
      year: "2014-2018",
      description: {
        en: "Learing programing (Java, C++, C#, JavaScript, PHP, .NET, Python - arduino) and database basics SQL",
        pl: "Nauka programowania (Java, C++, C#, JavaScript, PHP, .NET, Python - arduino) oraz podstaw baz danych SQL"
      }
    },
  ]
const experiances = [
    {
        id: 1,
        title: {
            en: 'Front-end developer – intern, Agencja71 [Bielsko-Biała, Poland]',
            pl: 'Front-end developer – staż, Agencja71 [Bielsko-Biała, Poland]',
        },
        year: {
            en: "10 May 2014 - 10 December 2014",
            pl: "10 Maj 2014 - 10 Grudzień 2014",
        },
        description: {
            en: "Programming web pages and web shops in HTML5, CSS3, JavaScript, PHP, and learning new program languages",
            pl: "Programowanie stron internetowych i sklepów internetowych w HTML5, CSS3, JavaScript, PHP oraz nauka nowych języków programowania"
        }
    },
    {
        id: 2,
        title: {
            en: 'Front-end Developer, Agencja71 [Bielsko-Biała, Poland]',
            pl: 'Front-end Developer, Agencja71 [Bielsko-Biała, Poland]',
        },
        year: {
            en: "2015 - 2018",
            pl: "2015 - 2018",
        },
        description: {
            en: "Programming web pages and web shops in HTML5, CSS3, JavaScript, PHP, and learning these program languages, also web developing for WordPress custom pages, writing plugins and widgets",
            pl: "Programowanie stron internetowych i sklepów internetowych w HTML5, CSS3, JavaScript, PHP oraz nauka tych języków programowania, a także tworzenie stron internetowych dla niestandardowych stron WordPress, pisanie wtyczek i widżetów"
        }
    },
    {
        id: 3,
        title: {
            en: 'Senior Web Developer, Agencja71 [Bielsko-Biała, Poland]',
            pl: 'Senior Web Developer, Agencja71 [Bielsko-Biała, Poland]',
        },
        year: {
            en: "2018 - 2021",
            pl: "2018 - 2021",
        },
        description: {
            en: "Programming web pages and web shops and creating dedicated solutions  in HTML5, CSS3, JavaScript, VueJS, JQuery, PHP, Symfony",
            pl: "Programowanie stron internetowych i sklepów internetowych oraz tworzenie dedykowanych rozwiązań w HTML5, CSS3, JavaScript, VueJS, JQuery, PHP, Symfony,"
        }
    },
    {
        id: 4,
        title: {
            en: 'Front-end Developer, WorkGuard (Moniti now) [Bielsko-Biała, Poland]',
            pl: 'Front-end Developer, WorkGuard (obecnie Moniti) [Bielsko-Biała, Poland]',
        },
        year: {
            en: "2018 - 2021 July",
            pl: "2018 - 2021 Lipiec",
        },
        description: {
            en: "Creating working time registration applications based on VueJS and Symfony",
            pl: "Tworzenie aplikacji do rejestracji czasu pracy opartych o VueJS oraz Symfony"
        }
    },
    {
        id: 5,
        title: {
            en: 'Software Developer, Rankomat.pl  [Bielsko-Biała, Poland]',
            pl: 'Software Developer, Rankomat.pl [Bielsko-Biała, Poland]',
        },
        year: {
            en: "2021 - 2024",
            pl: "2021 - 2024",
        },
        description: {
            en: "Creation and development of applications using Scala, Java, Kotlin, Akka, Play Framework, RabbitMQ programming technologies, Angular",
            pl: "Tworzenie i rozwój aplikacji z wykorzystaniem technologii programowania Scala, Java, Kotlin, Akka, Play Framework, RabbitMQ, Angular"
        }
    },
  ]
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