<!-- eslint-disable no-console -->
<script setup lang="ts">
// import fullIcons from 'gdsi/icons'
import * as icons from 'gdsi/svg'

import { AccessibilityIcon } from 'gdsi/vue'

import { ref } from 'vue'

console.debug('🍿src/App.vue:4/(icons):\n ', icons)

// console.debug('🥑src/App.vue:3/(fullIcons):\n ', fullIcons)

const size = ref('1em')

function setSize() {
  if (size.value === '1em') {
    size.value = '5em'
  }
  else {
    size.value = '1em'
  }
}
</script>

<template>
  <h1>Vite + Vue</h1>

  <!-- manual import -->
  <AccessibilityIcon />

  <!-- auto import -->
  <IconZeroConfig :width="size" :height="size" />

  <button @click="setSize">
    Toggle Size
  </button>
</template>
