<template>
  <section class="w-full">
    <wave class="bg-slate-100" />
    <section class="container-section">
      <HeaderSection title="Go To Our Wedding" />
      <div class="mt-12 text-center">
        <h1 
          data-aos="zoom-in"
          class="kalam-font text-green-500 text-2xl">Map Location</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.3503390209353!2d106.37844797499031!3d-6.217446293770506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTMnMDIuOCJTIDEwNsKwMjInNTEuNyJF!5e0!3m2!1sen!2sid!4v1700645675631!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a 
          data-aos="zoom-in"
          class="px-5 py-2 rounded-lg bg-green-600 text-gray-100 mx-auto">Open Google Map</a>
      </div>
    </section>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import wave from '@/assets/svg/wave.svg'

</script>
