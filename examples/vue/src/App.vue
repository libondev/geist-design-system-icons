<!-- eslint-disable no-console -->
<script setup lang="ts">
import accessibility from 'gdsi/svg/accessibility.svg'
import svgIconRaw from 'gdsi/svg/accessibility.svg?raw'

import { AccessibilityIcon } from 'gdsi/vue'

console.log({ svgIconRaw }, accessibility)
</script>

<template>
  <div>
    <h1>Vite + Vue</h1>

    <AccessibilityIcon width="5em" />
  </div>
</template>
