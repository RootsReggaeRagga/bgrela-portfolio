<script setup>

</script>

<template>
  <div class="bg-sidebar">
    <div class="bg-info">
      <figure class="bg-info__avatar-box">
        <img src="/profile.jpg" alt="Bartłomiej Grela - logo" width="80">
      </figure>

      <div class="bg-info__content">
        <h1 class="bg-info__content-name" title="Bartłomiej Grela">
          Bartłomiej Grela
        </h1>

        <p class="bg-info__content-title text-center xl:block flex items-center justify-center">
          <span>{{ $t('sidebar.developer') }}</span>
          <span>{{ $t('sidebar.engineer') }}</span>
          <span>{{ $t('sidebar.hobby') }}</span>
        </p>

      </div>
    </div>

    <ContactSection/>
  </div>
</template>