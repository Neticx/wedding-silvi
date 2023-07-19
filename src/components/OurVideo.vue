<template>
  <section class="container-section bg-blue-100">
    <HeaderSection title="Video Singkat Kami" /> 
    <VueVideoPlayer data-aos="zoom-in" class="w-10/12 mx-auto" :src="source" autoplay="true" />
  </section>
</template>

<script setup>

import VueVideoPlayer from 'vue3-player-video'
import HeaderSection from '@/components/HeaderSection.vue'

const source = 'https://drive.google.com/uc?export=download&id=1xC6VmQowPcv059FW0JnZY4rTzzsBuFZj'

</script>
