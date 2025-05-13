<!-- eslint-disable no-console -->
<script setup lang="ts">
import { AcronymJsIcon } from '@gdsicon/vue'

import AccessibilityIcon from '@gdsicon/vue/accessibility'
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
