import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
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
})