import react from '@vitejs/plugin-react'
import IconResolver from 'gdsi/resolver'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: true,
    rollupOptions: {
      treeshake: true,
    },
  },

  plugins: [
    react(),
    autoImport({
      dts: true,
      resolvers: [
        IconResolver({
          type: 'react',
          prefix: 'Icon',
        }),
      ],
    }),
  ],

  optimizeDeps: {
    include: ['gdsi/react'],
  },
})
