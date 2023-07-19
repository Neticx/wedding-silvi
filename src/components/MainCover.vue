<template>
  <section class="w-full bg-couples bg-contain h-screen">
    <section class="container-section h-screen grid content-end">
      <div 
        class="animate__animated animate__fadeInUpBig text-gray-100 text-center bg-blue-300 bg-opacity-80 backdrop-blur-sm rounded-t-3xl px-6 py-10">
        <p>Pernikahan</p>
        <h1 class="tangerine-font text-title font-bold">{{ couples.join(' & ') }}</h1>
        <decoration class="fill-white mx-auto w-3/12 mb-3"></decoration>
        <p class="text-sm">
          <p class="font-medium">Kepada Bapak/Ibu Yang Terhormat</p>
          <p class="font-medium my-2 text-lg">{{ query.to }}</p>
          <small>Izinkan kami turut mengundang anda dalam acara kami</small>
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import decoration from '@/assets/svg/decoration-2.svg'

const couples = ['Silvia', 'Claudio']

const route = useRoute()
let query = computed(() => route.query)

if ( route.query.to === undefined ) query = { to: 'Saudara/i' }

</script>
