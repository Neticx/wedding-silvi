<template>
  <section class="w-10/12 mx-auto mt-6">
    <p class="text-white">Ada {{ messages.length }} pesan dari para tamu</p>
  </section>
  <section style="max-height: 400px" class="w-10/12 mt-5 mx-auto overflow-scroll">
    <template v-for="(msg, x) in messages">
      <div class="w-full mb-5 border-b-2 border-green-200 pb-1">
        <span class="flex gap-2 items-center">
          <p class="kalam-font text-amber-500 text-xl">{{ msg.guestName }}</p>
          <span
              class="py-1 px-2 text-gray-100 rounded-lg text-xxs"
              :class="{
                'bg-green-600': msg.guestStatus === 'Hadir',
                'bg-red-600': msg.guestStatus === 'Tidak Hadir',
                'bg-gray-600': msg.guestStatus !== 'Hadir' && msg.guestStatus !== 'Tidak Hadir'
              }">
          {{ msg.guestStatus }}
        </span>
        </span>
        <p class="font-medium text-xs mt-2">Pada {{ msg.timestamp }}</p>
        <p class="text-sm text-white">{{ msg.guestMessage }}</p>
      </div>
    </template>
  </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const props = defineProps({
  messages: {
    type: Array
  }
})

const messages = ref([])
onMounted(() => {
  axios.get('https://script.google.com/macros/s/AKfycbxkjVlzBdUANCgRd9maHsVhW7MTbX5ftUuxdJjgozx8uyrVxKzPndE7OtVSVpymQClJVQ/exec?sheet=Aldi&action=get')
    .then( res => {
      messages.value = res.data
    } )
    .catch( err => alert(err) )
})

</script>
