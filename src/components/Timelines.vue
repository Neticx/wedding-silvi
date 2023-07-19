<style scoped>

.btn {
  @apply active:scale-95 active:ring-gray-200 active:ring duration-300 rounded-3xl px-3 py-2 text-white bg-gray-800 inline-block w-10/12 mt-4;
}

</style>

<template>
  <section class="w-full bg-gradient-to-b from-sky-200 to-blue-200">
    <section class="container-section pb-12">
      <HeaderSection text-color="text-gray-100" subtitle="Dengan tidak mengurangi rasa hormat, kami mengajak para tamu undangan agar bisa berhadir pada serangkaian acara kami" title="Runtutan Acara"></HeaderSection>
      <Card>
        <template v-slot:body>
          <div class="bg-blue-300 px-6 py-8 text-center text-sm font-medium" v-for="(timeline, index) in timelines" :key="index">
            <section data-aos="fade-up">
              <h1 class="text-xl satisfy-font text-white">{{ timeline.title }}</h1>
              <p class="font-medium text-gray-100">{{ timeline.date }} | {{ timeline.time }}</p>
              <decoration class="w-2/12 mx-auto my-2 fill-white"></decoration>
              <p class="text-white">{{ timeline.location }}</p>
              <p class="text-gray-200">{{ timeline.address }}</p>
              <a class="btn" href="">
                <i class="fa-solid fa-map"></i>
                Lihat Peta
              </a>
              <decoration class="w-2/12 mx-auto my-2 fill-white rotate-180"></decoration>
            </section>
          </div>
        </template>
        <template v-slot:footer>
          <section class="bg-blue-300">
            <Countdown></Countdown>
            <!-- Button to Guest Book -->
            <div class="px-6 pt-5 pb-8 text-center">
              <p class="text-sm text-gray-100">Konfirmasi kehadiran anda pada buku tamu</p>
              <button @click="goToGuestBook" class="btn">
                <i class="fa-solid fa-clipboard-check"></i>
                Konfirmasi
              </button>
            </div>
            <img src="@/assets/images/image-7.jpg" alt="">
          </section>
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import Countdown from '@/components/Countdown.vue'
import decoration from '@/assets/svg/decoration-2.svg'

const timelines = ref(null)
onMounted(() => {
  axios.get('contents/timelines.json')
    .then( res => timelines.value = res.data.timelines )
    .catch( err => alert(err) )
})

// Handler for navigate to guest book
const emits = defineEmits(['goToGuestBook'])

const goToGuestBook = () => setTimeout(() => { emits('goToGuestBook') }, 300)

</script>
