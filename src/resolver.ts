export interface Options {
  /**
   * What type of components are expected
   * @default 'svg'
   */
  type?: 'svg' | 'vue' | 'react'

  /**
   * @default 'Gds'
   */
  prefix?: string
}

function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

export default function IconsResolver({
  type = 'svg',
  prefix = 'Gds',
}: Options = {}) {
  const regex = new RegExp(`^${prefix}[A-Z]`)
  const prefixLength = prefix.length

  return {
    type: 'component',
    resolve: (icon: string) => {
      if (!regex.test(icon))
        return

      const rawName = icon.slice(prefixLength)
      const fileName = kebabCase(rawName)
      const importName = `${prefix}${rawName}`

      return {
        name: 'default',
        as: importName,
        from: `@gdsicon/${type}/${fileName}`,
      }
    },
  }
}
