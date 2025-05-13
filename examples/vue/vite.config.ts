import IconResolver from '@gdsi/vue/resolver'
import vue from '@vitejs/plugin-vue'
import vueComponent from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({

  optimizeDeps: {
    include: ['@gdsi/vue'],
  },

  plugins: [
    vue(),
    vueComponent({
      dts: true,
      resolvers: [
        IconResolver({
          prefix: 'Icon',
        }),
      ],
    }),
  ],
})
