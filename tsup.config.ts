import type { Options } from 'tsup'

export default <Options>{
  dts: true,
  clean: true,
  entry: [
    'src/*.ts',
  ],
  format: ['esm'],
  splitting: true,
  external: ['vue', 'react'],
}
