import { fileURLToPath, URL } from 'node:url'

import glob from 'fast-glob'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const inputFiles = Object.fromEntries(
  glob.sync('./src/**/*.ts').map(path => [
    path.replace(/\.\/src\/(.*?)\.ts/, '$1'),
    fileURLToPath(new URL(path, import.meta.url)),
  ]),
)
console.debug('🍉vite.config.ts:6/(inputFiles):\n ', inputFiles)

export default defineConfig({
  build: {
    minify: true,
    target: 'modules',
    reportCompressedSize: false,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: inputFiles,
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },

  esbuild: {
    target: 'esnext',
    drop: ['console', 'debugger'],
  },

  plugins: [
    dts({
      entryRoot: 'src',
      cleanVueFileName: true,
      exclude: ['src/main.ts'],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
