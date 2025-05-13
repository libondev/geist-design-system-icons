import IconResolver from '@gdsicon/svg/resolver'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    autoImport({
      dts: true,
      resolvers: [
        IconResolver(),
      ],
    }),
  ],

  optimizeDeps: {
    include: ['@gdsicon/svg'],
  },
})
