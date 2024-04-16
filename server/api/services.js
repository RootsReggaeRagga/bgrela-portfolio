import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
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
        en: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is a library that enables the creation of dynamic, reactive web applications.',
        pl: 'Vue.js to progresywny framework JavaScript do budowania interfejsów użytkownika. Jest to biblioteka, która umożliwia tworzenie dynamicznych, reaktywnych aplikacji internetowych.',
      },
      icon: 'logo-angular',
      image: null,
    },
  ]
})