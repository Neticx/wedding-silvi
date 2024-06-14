<style scoped>

.btn {
  @apply active:scale-95 active:ring-gray-200 active:ring duration-300 rounded-3xl px-3 py-2 text-white bg-gray-800 inline-block w-10/12 mt-4;
}

</style>

<template>
  <section class="w-full bg-blue-100">
    <section class="container-section pb-12">
      <HeaderSection text-color="text-black-100" title="Try Our Instagram Filter" subtitle="Abadikan momen bahagia kami dengan filter instagram ini"></HeaderSection>
      <Card>
        <template v-slot:body>
          <div class="bg-blue-300 px-6 py-8 text-center text-sm font-medium">
            <section data-aos="fade-up">
              <img src="@/assets/images/cover-silvi-dio-ig.png" alt="">
              <a class="btn" href="https://www.instagram.com/ar/287166093964835/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
                Ayo Foto!
              </a>
              <decoration class="w-2/12 mx-auto my-2 fill-white rotate-180"></decoration>
            </section>
          </div>
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import decoration from '@/assets/svg/decoration-2.svg'
</script>
