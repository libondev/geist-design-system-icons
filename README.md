# Geist Design System Icons
Geist design system icons maintained by the community.

> [!IMPORTANT]
> This project is purely out of personal love for `Geist Design System` and does not involve any commercial nature. If you are offended, please contact me and I will deal with it as soon as possible.

## Feature
- Complete tree-shaking support
- Cross-framework support. (vue/react/vanilla)
- Auto import component
- Auto import component dts type(`coming`)
- More...

## Install
```sh
pnpm i gdsi
# or
npm i gdsi
```

## Usage

### Auto Import
use `unplugin-vue-components` to auto import icons.
> `react` please use `unplugin-auto-import` to auto import icons.

```ts
import IconResolver from 'gdsi/resolver'
import vueComponent from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vueComponent({
      resolvers: [
        IconResolver({
          type: 'vue', // 'vue' | 'react' | 'vanilla'
          prefix: 'Gds', // default 'Gds'
        })
      ],
    }),
  ],
})
```

```vue
<template>
  <div>
    <GdsAccessibility />
  </div>
</template>
```

### Vanilla(nativeJS)

```ts
import { AccessibilityIcon } from 'gdsi'

const app = document.querySelector('#app')

app.innerHTML = AccessibilityIcon
```

### Vue3

```vue
<script setup>
import { AccessibilityIcon } from 'gdsi/vue'
</script>

<template>
  <div>
    <AccessibilityIcon />
  </div>
</template>
```

### React
```tsx
import { AccessibilityIcon } from 'gdsi/react'

export default function App() {
  return (
    <div>
      <AccessibilityIcon />
    </div>
  )
}
```

### Raw SVG

```ts
import svgIconRaw from 'gdsi/svg/accessibility.svg?raw'

console.log(svgIconRaw)
```

### Full
Note that this method may lead to a large build volume, because it can't do tree-shaking.

```ts
import fullIcons from 'gdsi/icons'

console.log(fullIcons)
```

## TODO
- [ ] auto import component dts type
- [ ] React auto import component dts type
- [ ] React component attributes type
