# Geist Design System Icons

## Install
```sh
pnpm i gdsi
# or
npm i gdsi
```

## Usage

### Vanilla(native)

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
```ts
import { AccessibilityIcon } from 'gdsi/react'

export default function App() {
  return (
    <div>
      <AccessibilityIcon />
    </div>
  )
}
```
