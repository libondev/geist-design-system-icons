import IconResolver from '@gdsicon/react/resolver'
import react from '@vitejs/plugin-react'
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
          prefix: 'Icon',
        }),
      ],
    }),
  ],

  optimizeDeps: {
    include: ['@gdsicon/react'],
  },
})
