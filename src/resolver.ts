import type { ComponentResolver } from 'unplugin-vue-components'
import { name } from '../package.json'

export interface Options {
  /**
   * What type of components are expected
   * @default 'svg'
   */
  type?: 'svg' | 'vue' | 'react'

  /**
   * @default 'gds'
   */
  prefix?: string
}

export default function IconsResolver({
  type = 'svg',
  prefix = 'gds',
}: Options = {}): ComponentResolver {
  const regex = new RegExp(`^${prefix}[A-Z]`)

  return {
    type: 'component',
    resolve: (icon: string) => {
      if (!regex.test(icon))
        return

      const rawName = icon.replace(prefix, '')

      const importName = `${rawName}Icon`

      return {
        name: importName,
        from: `${name}/${type}/${rawName}.js`,
      }
    },
  }
}
