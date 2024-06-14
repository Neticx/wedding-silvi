<template>
  <section class="container-section bg-blue-100">
    <HeaderSection title="Video Singkat Kami" subtitle="A simple 'I love you' means more than money."/>
    <div class="player-container">
      <vue3-video-player src="@/assets/video/video.mp4" autoplay></vue3-video-player>
    </div>


  </section>
</template>

<script setup>

import VueVideoPlayer from 'vue3-player-video'
import HeaderSection from '@/components/HeaderSection.vue'

const source = 'src/assets/video/video.mp4'

</script>
