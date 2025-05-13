<!-- eslint-disable no-console -->
<script setup lang="ts">
import { AcronymJsIcon } from '@gdsi/vue'

import AccessibilityIcon from '@gdsi/vue/accessibility'
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
  </div>
</template>
