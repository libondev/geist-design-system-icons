import fs from 'node:fs'

import { createUnplugin, type UnpluginFactory } from 'unplugin'

import { name } from '../package.json'

import icons from './icons'

export interface Options {
  /**
   * icon type
   * @default 'svg'
   */
  type?: 'svg' | 'vue' | 'react'

  /**
   * include files
   */
  extensions?: string[]
}

type ImportType = NonNullable<Options['type']>

export const VIRTUAL_MODULE_ID = 'virtual:gdsi'

export const unpluginFactory: UnpluginFactory<Options> = (options: Options = {}) => {
  const { type, extensions } = resolveOptions(options)

  if (extensions.length === 0) {
    throw new Error(`[${name}]: extensions is required!`)
  }

  const virtualModuleId = `${VIRTUAL_MODULE_ID}/${type}`

  const matchGlob = new RegExp(`\.(${extensions.join('|')})$`)

  const IMPORT_REGEX = /import\s*\{([^}]+)\}\s*from\s*['"]virtual:gdsi\/.*?['"]/g

  return {
    name: 'unplugin-gdsi',
    async resolveId(id: string, importer?: string) {
      if (id.includes('?')) {
        const [_id] = id.split('?')

        if (_id === virtualModuleId) {
          return id
        }
      }
      else if (id === virtualModuleId) {
        if (importer) {
          const code = await fs.promises.readFile(importer, 'utf-8')

          const imports = []
          let match = IMPORT_REGEX.exec(code)

          while (match !== null) {
            const identifiers = match[1]
              .split(',')
              .map(s => s.trim())

            imports.push(...identifiers)

            match = IMPORT_REGEX.exec(code)
          }

          return `${virtualModuleId}?${imports.join('&')}`
        }

        return virtualModuleId
      }
    },

    async load(_id: string) {
      if (!_id.includes('?')) {
        return
      }

      const [id, icons] = _id.split('?')

      if (id !== virtualModuleId) {
        return
      }

      const imports = icons.split('&')
      console.debug('🛸src/index.ts:85/(imports):\n ', imports)

      return transformIconByType(type, imports)
    },

    transformInclude: (id: string) => matchGlob.test(id),
  }
}

function resolveOptions(options: Options): Required<Options> {
  const defaultExtensions: Record<ImportType, string[]> = {
    svg: ['js', 'ts'],
    vue: ['vue'],
    react: ['jsx', 'tsx'],
  }

  return {
    type: 'svg',
    ...options,
    extensions: (options.extensions || defaultExtensions[options.type!]).filter(Boolean),
  }
}

type IconName = keyof typeof icons

const QUOTE_REGEX = /^"|"$/g
const BREAK_PROPS_REGEX = /\s+(?=\w+(?:-\w+)*=)/
const SVG_REGEX = /<svg\s?([^>]*)>([\s\S]*?)<\/svg>/

const TYPE_IMPORTS_MAP = {
  svg: {
    metadata: '',
    transformer: (name: IconName) => `export const ${name} = '${icons[name]}'\n`,
  },
  vue: {
    metadata: 'import { defineComponent, h } from "vue"\n',
    transformer: (name: IconName) => {
      const [, attributes, children] = icons[name].match(SVG_REGEX) || []
      const props = attributes?.split(BREAK_PROPS_REGEX)
        .map((attr) => {
          const [key, ...values] = attr.split('=')
          const value = values.join('=').replace(QUOTE_REGEX, '')

          return `"${key}":"${value}"`
        })

      return `export const ${name} = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'${children}',${props},...c.attrs });return () => $ }, { name:'${name}' })\n`
    },
  },
  react: {
    metadata: `import { createElement as c, memo as m } from 'react'\n`,
    transformer: (name: IconName) => {
      const [, attributes, children] = icons[name].match(SVG_REGEX) || []
      const props = attributes?.split(BREAK_PROPS_REGEX)
        .map((attr) => {
          const [key, ...values] = attr.split('=')
          const value = values.join('=').replace(QUOTE_REGEX, '')

          if (key === 'style') {
            const css = value.split(';').reduce((acc, cur) => {
              const [key, value] = cur.split(':')

              return `${acc}${key}:"${value}",`
            }, '').slice(0, -1)

            return `style:{${css}}`
          }

          return `${camelCase(key)}:"${value}"`
        })

      return `export const ${name} = m(p => c("svg", { ${props},dangerouslySetInnerHTML:{__html:'${children}'},...p }))\n${name}.displayName = '${name}'\n\n`
    },
  },
}

function transformIconByType(type: ImportType, names: string[]) {
  if (names.length === 0) {
    return ''
  }

  const { metadata, transformer } = TYPE_IMPORTS_MAP[type]

  let fileContent = metadata

  names.filter(n => n in icons).forEach((icon) => {
    fileContent += transformer(icon as IconName)
  })

  return fileContent
}

function camelCase(str: string, options: { pascalCase: boolean } = { pascalCase: false }) {
  const { pascalCase = false } = options

  return pascalCase ? str.replace(/(?:^|[-_])(\w)/g, (_, char) => char.toUpperCase()) : str.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
}

export default createUnplugin(unpluginFactory)
