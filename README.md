# Geist Design System Icons
A community-maintained collection of Geist Design System icons.

[Online Preview](https://libondev.github.io/geist-design-system-icons/)

## ✨ Features
- Full tree-shaking support
- Works across frameworks (Vue/React/Vanilla JS)
- Auto-imports components
- Built-in react `memo` optimization
- And more...

## 📦 Installation

Since 3.0, the adaptation of different language frameworks has been split into corresponding subpackages. We strongly recommend that you install the package corresponding to the language framework instead of this package.

So you can install the following packages:

```sh
# vue2 | 3
pnpm add @gdsicon/vue

# react
pnpm add @gdsicon/react

# vanilla.js
pnpm add @gdsicon/svg
```

You can still install this package, but this document is only for 3.0.

## 🚀 Quick Start

### Using Auto-imports
The easiest way is to use auto-imports:
- For Vue: Use `unplugin-vue-components`
- For React: Use `unplugin-auto-import`

> 💡 Remember to add `components.d.ts` / `auto-imports.d.ts` to your `tsconfig.json` includes

```ts
import IconResolver from '@gdsicon/vue/resolver'
// react use: import IconResolver from '@gdsicon/vue/resolver'
// vanilla use: import IconResolver from '@gdsicon/svg/resolver'

import vueComponent from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vueComponent({
      resolvers: [
        IconResolver({
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
import { AccessibilityIcon } from '@gdsicon/svg'

const app = document.querySelector('#app')

app.innerHTML = AccessibilityIcon
```

### Only Single Icon

```ts
import AccessibilityIcon from '@gdsicon/react/accessibility'

const app = document.querySelector('#app')
app.innerHTML = AccessibilityIcon
```

### Full Icons
Need all icons? You can import the full set:

```ts
// Note: This method doesn't support tree-shaking
import * as icons from '@gdsicon/svg'

console.log(icons) // { "AccessibilityIcon": "<svg height=\"16\" stroke-linejoin=\"round\" ..." }
```

### Framework-specific Usage

#### Vue 3

```html
<script setup>
import { AccessibilityIcon } from '@gdsicon/vue'
</script>

<template>
  <div>
    <AccessibilityIcon />
  </div>
</template>
```

### React
```tsx
import { AccessibilityIcon } from '@gdsicon/react'

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
import GdsiResolver from '@gdsicon/vue/resolver'
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

## FAQ

### Unknown file extension
> TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".vue" for xxx/node_modules/@gdsicon/vue/dist/accessibility-unread.vue

This situation usually occurs in vue projects. Because it is a directly exported sfc file, the node can't recognize this file, so it only needs to change the file import path to a specific file name.

e.g.
```js
import { CopyIcon } from '@gdsicon/vue'
```

Change to:
```js
import CopyIcon from '@gdsicon/vue/copy'
```

enjoy~
