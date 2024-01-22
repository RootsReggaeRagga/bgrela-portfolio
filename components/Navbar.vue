<script setup>

</script>

<template>
  <nav class="navbar flex">
    <img src="/8.svg" alt="Bartłomiej Grela - logo icon" width="100">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          {{ $t('pageTitles.about') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/resume" class="navbar-link">
          {{ $t('pageTitles.resume') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/portfolio" class="navbar-link">
          {{ $t('pageTitles.portfolio') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/blog" class="navbar-link">
          {{ $t('pageTitles.blog') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/contact" class="navbar-link">
          {{ $t('pageTitles.contact') }}
        </NuxtLink>
      </li>
    </ul>
    <LangSwitcher />
    <DarkToggle />
  </nav>
  
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>