# Geist Design System Icons
Geist design system icons maintained by the community.

Provide cross-framework support, whether it is `vanilla`/`vue`/`react`. :)

> [!IMPORTANT]
> This project is purely out of personal love for `Geist Design System` and does not involve any commercial nature. If you are offended, please contact me and I will deal with it as soon as possible.

## Install
```sh
pnpm i gdsi
# or
npm i gdsi
```

## Usage

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
```ts
import fullIcons from 'gdsi/icons'

console.log(fullIcons)
```
