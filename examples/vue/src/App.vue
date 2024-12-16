<!-- eslint-disable no-console -->
<script setup lang="ts">
import Alpha from 'gdsi/raw/alpha.svg?raw'

import { AcronymJsIcon } from 'gdsi/vue'

import { AccessibilityIcon } from 'gdsi/vue/Accessibility.js'
</script>

<template>
  <h1>Vite + Vue</h1>

  <div style="display:flex;gap:1rem">
    <!-- manual import -->
    <AcronymJsIcon />

    <!-- auto import -->
    <IconZeroConfig />

    <!-- single import -->
    <AccessibilityIcon />

    <!-- raw svg -->
    <span v-html="Alpha" />
  </div>
</template>
