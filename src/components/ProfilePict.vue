<template>
  <section 
    class="w-full mb-6">
    <img data-aos="zoom-in" class="w-9/12 shadow-lg border border-gray-200 mx-auto rounded-tr-3xl rounded-bl-3xl" :src="source.thumb" :alt="source.thumb">
    <div data-aos="slide-up" class="mt-10 w-full text-center text-slate-800 text-sm">
      <p class="text-white text-[2rem] font-semibold tangerine-font">{{ source.name }}</p>
      <p class="text-white mb-3 mt-1 font-semibold">{{ source.as }} dari Bapak {{ source.parents[0] }} & Ibu {{ source.parents[1] }}</p>
      <p class="text-white">{{ source.address }}</p>
      <div class="flex gap-3 justify-center mt-3">
        <template v-for="(item, x) in source.sosmed" :key="x">
          <a target="_blank" class="text-white" :href="item.link"><i :class="item.icon" class="text-xl"></i></a>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  source: {
    type: Object,
    default: { name: 'fulan' }
  }
})

</script>
