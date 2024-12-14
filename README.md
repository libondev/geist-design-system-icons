# Geist Design System Icons
A community-maintained collection of Geist Design System icons.

> [!IMPORTANT]
> This project is created out of personal appreciation for the `Geist Design System` and is non-commercial in nature. If you have any concerns, please reach out and I'll address them promptly.

## ✨ Features
- Full tree-shaking support
- Works across frameworks (Vue/React/Vanilla JS)
- Auto-imports components
- And more...

## 📦 Installation
```sh
npm install gdsi
# or with pnpm
pnpm add gdsi
```

## 🚀 Quick Start

### Using Auto-imports
The easiest way is to use auto-imports:
- For Vue: Use `unplugin-vue-components`
- For React: Use `unplugin-auto-import`

> 💡 Remember to add `components.d.ts`/`auto-imports.d.ts` to your `tsconfig.json` includes

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

Then use it in your components:

```vue
<template>
  <div>
    <GdsAccessibility />
  </div>
</template>
```

### Vanilla JavaScript

```ts
import { AccessibilityIcon } from 'gdsi'

const app = document.querySelector('#app')

app.innerHTML = AccessibilityIcon
```

### Full Icons
Need all icons? You can import the full set:

```ts
// Note: This method doesn't support tree-shaking
import icons from 'gdsi/icons'

console.log(icons) // { "AccessibilityIcon": "<svg height="16" stroke-linejoin="round" ..." }
```

### Framework-specific Usage

#### Vue 3

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

### Advanced Usage

#### Raw SVG Import
Need just the SVG string? Use this:

```ts
import svgIcon from 'gdsi/svg/accessibility.svg?raw'
```

enjoy~
