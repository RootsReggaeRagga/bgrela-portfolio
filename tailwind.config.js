/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "components/**/*.{js,vue,ts}",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "composables/**/*.{js,ts}",
      "plugins/**/*.{js,ts}",
      "app.vue",
      "App.vue",
      "error.vue",
      "nuxt.config.js"
    ],
    theme: {
      dark: {
        bg: {
          main: "rgb(47, 55, 46)",
          secondary: "hsl(111, 9%, 16%)",
          third: "hsl(110, 9%, 13%)"
        },
        accent: "#31FD9B",
        text: "#ffffff",
        textSecondary: "hsl(0, 0%, 84%)"
      },
      light: {
        bg: {
          main: "#ffffff",
          secondary: "#f3f4f6",
          third: "hsl(110, 9%, 13%)"
        },
        accent: "#31FD9B",
        text: "#ffffff",
        textSecondary: "hsl(0, 0%, 84%)"
      },
      extend: {
        colors: {
          ranko: {
            50: '#FCE5C1',
            100: '#FBDDAD',
            200: '#F9CD87',
            300: '#F7BC60',
            400: '#F5AC39',
            500: '#31FD9B',
            600: '#C37B0A',
            700: '#8E5A07',
            800: '#583804',
            900: '#231602',
          },
          vue: '#42b883',
          laravel: '#f55247',
          html5: '#e34f26',
          css3: '#3C99DC',
        },
      },
    },
    plugins: [
      require('tailwindcss-dark-mode'),
    ],
    darkMode: 'class',
    variants: {
      backgroundColor: [
        'dark',
        'dark-hover',
        'dark-group-hover',
        'dark-even',
        'dark-odd',
      ],
      borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
      textColor: ['dark', 'dark-hover', 'dark-active'],
    },
  }