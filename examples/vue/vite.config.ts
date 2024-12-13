import vue from '@vitejs/plugin-vue'
import IconResolver from 'gdsi/resolver'
import vueComponent from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueComponent({
      dts: true,
      resolvers: [
        IconResolver({
          type: 'vue',
          prefix: 'Icon',
        }),
      ],
    }),
  ],
})
