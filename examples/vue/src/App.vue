<!-- eslint-disable no-console -->
<script setup lang="ts">
// import fullIcons from 'gdsi/icons'

// import { AccessibilityIcon } from 'gdsi/vue'

// import { onMounted, useTemplateRef } from 'vue'

// const iconsRef = useTemplateRef<HTMLDivElement>('iconsRef')

// onMounted(() => {
//   const fragment = document.createDocumentFragment()

//   Object.entries(fullIcons).forEach(([name, value]) => {
//     const div = Object.assign(document.createElement('div'), { className: 'icon-wrapper' })

//     div.innerHTML = `${value}<span class="icon-name">${name}</span>`

//     fragment.append(div)
//   })

//   iconsRef.value!.appendChild(fragment)
// })
</script>

<template>
  <div>
    <h1>Vite + Vue</h1>

    <!-- manual import -->
    <!-- <AccessibilityIcon width="5em" /> -->

    <!-- auto import -->
    <IconFilter />
    <icon-filter />
    <IconZeroConfig />

    <!-- <div ref="iconsRef" class="all-icons" /> -->
  </div>
</template>

<style>
.all-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.icon-wrapper {
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
