# Geist Design System Icons
A community-maintained collection of Geist Design System icons.

[Online Preview](https://libondev.github.io/geist-design-system-icons/)

> [!IMPORTANT]
> This project is created out of personal appreciation for the `Geist Design System` and is non-commercial in nature. If you have any concerns, please reach out and I'll address them promptly.

## ✨ Features
- Full tree-shaking support
- Works across frameworks (Vue/React/Vanilla JS)
- Auto-imports components
- Built-in react `memo` optimization
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

> 💡 Remember to add `components.d.ts` / `auto-imports.d.ts` to your `tsconfig.json` includes

```ts
import IconResolver from 'gdsi/resolver'
import vueComponent from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vueComponent({
      resolvers: [
        IconResolver({
          /**
           * import type
           * @type {'svg' | 'vue' | 'react'}
           * @defaults 'svg'
           */
          type: 'vue',
          /**
           * auto import prefix
           * @defaults 'Gds'
           */
          prefix: 'Gds',
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
import { AccessibilityIcon } from 'gdsi/svg'

const app = document.querySelector('#app')

app.innerHTML = AccessibilityIcon
```

### Only Single Icon

```ts
import { AccessibilityIcon } from 'gdsi/react/accessibility'

const app = document.querySelector('#app')
app.innerHTML = AccessibilityIcon
```

### Full Icons
Need all icons? You can import the full set:

```ts
// Note: This method doesn't support tree-shaking
import * as icons from 'gdsi/svg'

console.log(icons) // { "AccessibilityIcon": "<svg height=\"16\" stroke-linejoin=\"round\" ..." }
```

### Framework-specific Usage

#### Vue 3

```html
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

### With unplugin-icons
```ts
import GdsiResolver from 'gdsi/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    AutoImport({
      // ...
      resolvers: [
        IconsResolver({
          // ...
          prefix: 'I'
        }),
        GdsiResolver({
          type: 'vue', // or 'react'
          prefix: 'IGds',
        }),
      ],
    }),

    Icons({
      compiler: 'vue3',
    }),
  ]
})
```

```html
<template>
  <div>
    <IGdsAccessibility />
  </div>
</template>
```

### 🍾 Bundler Optimize

#### Vite
If you are using vite, you can use prebuilt for optimization, this will greatly improve the performance of the first screen you manually import. (If `unplugin-auto-import`|`unplugin-vue-components` is used, it can be ignored.)

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  optimizeDeps: {
    include: ['gdsi/react'], // or ['gdsi/vue'] | ['gdsi/svg']
  },
})
```

enjoy~
