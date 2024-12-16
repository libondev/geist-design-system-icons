import IconResolver from 'gdsi/resolver'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['gdsi/vue'],
  },

  plugins: [
    autoImport({
      dts: true,
      resolvers: [
        IconResolver(),
      ],
    }),
  ],
})
