<script setup>
import { ref } from 'vue'
const zoom = ref(11)
const center = [49.8222701, 19.0343083]

</script>

<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.contact') }}
      </h2>
    </header>

    <section class="about-text">
      <p>
        {{ $t('contact.text') }}
      </p>
    </section>

    <div class="bg-info-more">
      <div class="separator" />
      <ul class="bg-info-more__contacts-list service-list">
        <li class="bg-info-more__contacts-list-item service-item">
          <div class="bg-icon-box bg-icon-box--dark">
            <ion-icon name="mail-outline" />
          </div>

          <div class="bg-contact-info">
            <p class="bg-contact-title">
              Email
            </p>

            <a href="mailto:bartlomiej.grela@gmail.comm" class="contact-link">bartlomiej.grela@gmail.com</a>
          </div>
        </li>

        <li class="bg-info-more__contacts-list-item service-item">
          <div class="bg-icon-box bg-icon-box--dark">
            <ion-icon name="call-outline" />
          </div>

          <div class="bg-contact-info">
            <p class="bg-contact-title">
              {{ $t('sidebar.phone') }}
            </p>

            <a href="tel:+48451562862" class="contact-link">+48 451 562 862</a>
          </div>
        </li>

        <!-- <li class="bg-info-more__contacts-list-item service-item">
          <div class="bg-icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="bg-contact-info">
            <p class="bg-contact-title">
              Github
            </p>

            <a href="https://github.com/RootsReggaeRagga" class="contact-link" target="_blank">RootsReggaeRagga</a>
          </div>
        </li> -->

        <li class="bg-info-more__contacts-list-item service-item">
          <div class="bg-icon-box bg-icon-box--dark">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="bg-contact-info">
            <p class="bg-contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/bart%C5%82omiej-grela-2bb215112/" class="contact-link"
              target="_blank">Bartłomiej Grela</a>
          </div>
        </li>
      </ul>
      <div style="height:350px; width:100%" class="my-6 ">
        <LMap class="map-container" ref="map" :zoom="zoom" :center="center">
          <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="" layer-type="base"
            name="OpenStreetMap" />
        </LMap>
      </div>
    </div>

  </article>
</template>