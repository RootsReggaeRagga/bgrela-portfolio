import { defineStore } from 'pinia'
import { computed, ref, inject } from 'vue'
import { useCookie } from '#app'

export const useCookieStore = defineStore('cookieStore', () => {
  const cookie = ref(useCookie('accept-cookie'))
  const $cookies = inject('$cookies')
  const maxAge = 60 * 60 * 24 * 30

  function setCookie() {
    $cookies.set('accept-cookie', true, maxAge)
    return this.cookie = true
  }
  const getCookie = computed(() => {
    return cookie.value
  })

  return { cookie, setCookie, getCookie }
})