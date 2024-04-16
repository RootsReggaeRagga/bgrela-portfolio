<script>
</script>
<template>
    <div class="bg-info-more">
        <div class="separator" />
        <ul class="bg-info-more__contacts-list">
          <li class="bg-info-more__contacts-list-item">
            <div class="bg-icon-box">
              <ion-icon name="mail-outline" />
            </div>
  
            <div class="bg-contact-info">
              <p class="bg-contact-title">
                Email
              </p>
  
              <a href="mailto:bartlomiej.grela@gmail.comm" class="contact-link">bartlomiej.grela@gmail.com</a>
            </div>
          </li>

          <li class="bg-info-more__contacts-list-item">
            <div class="bg-icon-box">
              <ion-icon name="call-outline" />
            </div>
  
            <div class="bg-contact-info">
              <p class="bg-contact-title">
                {{ $t('sidebar.phone') }}
              </p>
  
              <a href="tel:+48451562862" class="contact-link">+48 451 562 862</a>
            </div>
          </li>
  
          <li class="bg-info-more__contacts-list-item">
            <div class="bg-icon-box">
              <ion-icon name="logo-github" />
            </div>
  
            <div class="bg-contact-info">
              <p class="bg-contact-title">
                Github
              </p>
  
              <a href="https://github.com/RootsReggaeRagga" class="contact-link" target="_blank">RootsReggaeRagga</a>
            </div>
          </li>
  
          <li class="bg-info-more__contacts-list-item">
            <div class="bg-icon-box">
              <ion-icon name="logo-linkedin" />
            </div>
  
            <div class="bg-contact-info">
              <p class="bg-contact-title">
                Linkedin
              </p>
  
              <a href="https://www.linkedin.com/in/bart%C5%82omiej-grela-2bb215112/" class="contact-link" target="_blank">Bartłomiej Grela</a>
            </div>
          </li>
  
          <li class="bg-info-more__contacts-list-item">
            <div class="bg-icon-box">
              <ion-icon name="location-outline" />
            </div>
  
            <div class="bg-contact-info">
              <p class="bg-contact-title">
                {{ $t('sidebar.location') }}
              </p>
  
              <address>Bielsko-Biała, Poland</address>
            </div>
          </li>
        </ul>
  
        <div class="separator" />
  
        <ul class="flex align-center gap-4 justify-center">
          <li class="bg-icon-box">
            <NuxtLink to="https://www.instagram.com/czaaak/" target="_blank">
              <ion-icon name="logo-instagram" />
            </NuxtLink>
          </li>
        </ul>      
      </div>
</template>