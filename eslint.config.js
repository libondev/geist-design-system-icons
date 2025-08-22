import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'dist',
    'shims/*',
    'playground/*',
    'node_modules/*',
    'packages/svg/**/*.ts',
    'packages/vue/**/*.ts',
    'packages/react/**/*.ts',
  ],
})
