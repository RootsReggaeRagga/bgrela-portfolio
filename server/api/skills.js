import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      name: {
       en: "Driving License (cat. B)",
       pl: "Prawo jazdy (kat. B)"
      },
    },
    {
      id: 2,
      name: {
       en: "Ability to work in a group",
       pl: "Umiejętność pracy w grupie"
      },
    },
    {
      id: 3,
      name: {
       en: "Honesty",
       pl: "Szczerość"
      },
    },
    {
      id: 4,
      name: {
       en: "Loyalty",
       pl: "Lojalność"
      },
    },
    {
      id: 5,
      name: {
       en: "Punctuality",
       pl: "Punktualność"
      },
    },
    {
      id: 6,
      name: {
       en: "Diligence and attention to details",
       pl: "Dbałość o szczegóły"
      },
    },
    {
      id: 7,
      name: {
       en: "Communicative",
       pl: "Komunikatywność"
      },
    },
  ]
})