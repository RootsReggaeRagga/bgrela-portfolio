import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Development',
        pl: 'Web Geliştirme',
      },
    },
    {
      id: 2,
      title: {
        en: 'Application',
        pl: 'Uygulama',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        pl: 'Web Tasarım',
      },
    },
  ]
})
