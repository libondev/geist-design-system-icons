import type { ComponentResolver } from 'unplugin-vue-components'
import { name } from '../package.json' assert { type: 'json' }

export interface Options {
  /**
   * What type of components are expected
   * @default 'vanilla'
   */
  type?: 'vanilla' | 'svg' | 'vue' | 'react'

  /**
   * @default 'Gsd'
   */
  prefix?: string
}

export default function IconsResolver({
  type = 'vanilla',
  prefix = 'Gds',
}: Options = {}): ComponentResolver {
  const regex = new RegExp(`^${prefix}[A-Z]`)

  return {
    type: 'component',
    resolve: (icon: string) => {
      if (!regex.test(icon))
        return

      const importName = `${icon.replace(prefix, '')}Icon`

      return {
        name: importName,
        from: `${name}/${type}.js`,
      }
    },
  }
}
