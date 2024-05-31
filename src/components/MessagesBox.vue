<template>
  <section class="w-10/12 mx-auto mt-6">
    <p>Ada {{ messages.length }} pesan dari para tamu</p>
  </section>
  <section style="max-height: 400px" class="w-10/12 mt-5 mx-auto overflow-scroll">
    <template v-for="(msg, x) in messages">
      <div class="w-full mb-5 border-b-2 border-green-200 pb-1">
        <span class="flex gap-2 items-center">
          <p class="kalam-font text-green-500 text-xl">{{ msg.guestName }}</p>
          <span class="py-1 px-2 bg-gray-600 text-white rounded-lg text-xxs">{{ msg.guestStatus}}</span>
        </span>
        <p class="font-medium text-xs mt-2 text-amber-400">Pada {{ formattedTimestamp(msg.timestamp) }}</p>
        <p class="text-sm text-white">{{ msg.guestMessage }}</p>
      </div>
    </template>
  </section>
</template>

<script setup>
import axios from 'axios'
import {ref, onMounted, computed} from 'vue'

const props = defineProps({
  messages: {
    type: Array
  }
})

const messages = ref([])
onMounted(() => {
  axios.get('https://script.google.com/macros/s/AKfycbz6ClD5JDTcHGw8s4dz6iJ1a8viS_jhR1buMnfMgFc61yST22Mi_AGum_88-9OVLYksFg/exec?action=get')
    .then( res => {
      console.log(res.data)
      messages.value = res.data
    } )
    .catch( err => alert(err) )
})

const formattedTimestamp = computed(() => (timestamp) => {
  const dateObject = new Date(timestamp);
  // Choose your formatting options (e.g., 'YYYY-MM-DD HH:mm')
  const formattedTime = dateObject.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  return formattedTime;
});

</script>
