import type { ComponentResolver } from 'unplugin-vue-components'
import { name } from '../package.json' assert { type: 'json' }

export interface Options {
  /**
   * What type of components are expected
   * @default 'vanilla'
   */
  type?: 'vanilla' | 'svg' | 'vue' | 'react'
}

export default function IconsResolver({ type = 'vanilla' }: Options = {}): ComponentResolver {
  return {
    type: 'component',
    resolve: (icon: string) => {
      return {
        from: `${name}/dist/${type}.js`,
        as: icon,
      }
    },
  }
}
