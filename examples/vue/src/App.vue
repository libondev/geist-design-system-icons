<!-- eslint-disable no-console -->
<script setup lang="ts">
// import fullIcons from 'gdsi/icons'

// import { defineComponent, h, onMounted, useTemplateRef } from 'vue'

// import { AccessibilityIcon } from 'gdsi/vue'

// const iconsRef = useTemplateRef<HTMLDivElement>('iconsRef')

// onMounted(() => {
//   const fragment = document.createDocumentFragment()

//   Object.entries(fullIcons).forEach(([name, value]) => {
//     const div = Object.assign(document.createElement('div'), { className: 'icon-item' })

//     div.innerHTML = `${value}<span class="icon-name">${name}</span>`

//     fragment.append(div)
//   })

//   iconsRef.value!.appendChild(fragment)
// })
</script>

<template>
  <h1>Vite + Vue</h1>

  <!-- manual import -->
  <!-- <AccessibilityIcon width="5em" /> -->

  <!-- auto import -->
  <icon-filter />
  <IconZeroConfig />

  <!-- <div ref="iconsRef" class="all-icons" /> -->
</template>

<style>
.all-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.icon-item {
  width: 120px;
  height: 120px;
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 6px;
  word-break: break-all;
  text-align: center;
  box-sizing: border-box;
}

.icon-name {
  font-size: 12px;
}

svg {
  width: 1.5em;
  height: 1.5em;
  margin-bottom: 4px;
}
</style>
