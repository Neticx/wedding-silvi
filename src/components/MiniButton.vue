<style scoped>

.button {
  @apply bg-gray-600 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-full text-lg grid place-items-center left-3 text-amber-400 z-50 mb-2;
  height: 40px;
  width: 40px;
} 

@keyframes backOutUp-custom-52dffe73 {
    0% {
        transform: scale(1);
        opacity: 1
    }

    20% {
        transform: translateY(0) scale(.7);
        opacity: .7
    }

    to {
        transform: translateY(-100%) scale(.7);
        opacity: .7
    }
}

.close-page {
    -webkit-animation: backOutUp-custom-52dffe73 .5s 1s forwards;
    animation: backOutUp-custom-52dffe73 .5s 1s forwards
}

</style>

<template>
  <section class="bg-autumn-texture bg-cover w-full h-screen min-h-screen fixed inset-0 grid place-items-center z-50 bg-blue-200" id="opening">
      <div class="w-6/12 text-center text-xs md:text-lg lg:text-xl">
        <div class="mt-5 animate__animated animate__zoomInUp">
          <h1 class="kalam-font font-semibold text-5xl lg:text-6xl my-5 text-black">Munah &amp; Riki</h1>
          <p class="kalam-font text-black font-medium text-lg">We Are Getting Married</p>
          <p class="font-medium text-black">Sabtu, 02 Desember 2023</p>
          <button type="buton" class="w-10/12 md:w-8/12 text-sm md-text-lg mt-6 font-medium z-50 border border-amber-800 text-gray-100 bg-amber-500 p-2 rounded-full pointer active:scale-90 hover:bg-amber-500 hover:text-gray-100 duration-300" @click="openInvitation">
            <i class="fa-solid fa-book-open mr-1" ></i> Buka undangan </button>
        </div>
      </div>
  </section>
  <audio ref="audioEl" autoplay>
    <source src="@/assets/audio/backsound-3.mp3" type="audio/mp3">
  </audio>
  <section class="fixed bottom-24 pl-2">
    <button class="button" @click="control">
      <i v-if="!isPlayed" class="fa-solid fa-volume-off"></i>
      <i v-else class="fa-solid fa-volume-high"></i>
    </button>
    <button @click="giftAction" class="button">
      <i class="fa-solid fa-gift"></i>
    </button>
  </section>
</template>

<script setup>

import { ref, computed, watch } from 'vue'
import { useState } from '@/stores/state.js'

const state = useState()

const audioEl = ref(null)
const isPlayed = ref(false)

const isAudioPlay = computed(() => state.isAudioPlay)

const audioClick = () => isPlayed.value = !isPlayed.value
const audioAction = () => isPlayed.value ? audioEl.value.play() : audioEl.value.pause()
const control = () => {
  audioClick()
  audioAction()
}

const openInvitation = () => {
  document.querySelector('#opening').classList.add("close-page")
  audioClick()
  audioAction()
}

watch(isAudioPlay, control)

const giftAction = () => setTimeout(() => { document.querySelector('#envelope').scrollIntoView({ behavior: 'smooth' }) }, 300)

</script>
