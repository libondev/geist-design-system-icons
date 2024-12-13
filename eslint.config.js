import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'dist',
    'shims/*',
    'playground/*',
    'node_modules/*',
    'src/vue.ts',
    'src/react.ts',
    'src/vanilla.ts',
  ],
})
