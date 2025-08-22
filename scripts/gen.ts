import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import glob from 'fast-glob'

import cachedIcons from './_cached.json' with { type: 'json' }
import metadata from './_metadata.json' with { type: 'json' }

type SVGMap = Record<string, { fileName: string, content: string }>

const writeTypes = process.argv.slice(2)

const QUOTE_REGEX = /^"|"$/g
const BREAK_PROPS_REGEX = /\s+(?=\w+(?:-\w+)*=)/
const SVG_REGEX = /<svg\s?([^>]*)>([\s\S]*?)<\/svg>/

function isDirectoryDirty(_path: string) {
  const stats = fs.statSync(fileURLToPath(new URL(_path, import.meta.url)))

  return stats.mtime.toLocaleString()
}

function updateMetadata(modifiedAt: string) {
  metadata.lastModified = modifiedAt

  fs.writeFileSync('./scripts/_metadata.json', `${JSON.stringify(metadata, null, 2)}\n`)
}

function updateCachedIcons() {
  const RENAME_REGEX = /svg\/(.*?)\.svg/

  const newContent: SVGMap = Object.fromEntries(
    glob.sync('svg/*.svg', { cwd: process.cwd() }).map((svg) => {
      const fileName = svg.replace(RENAME_REGEX, '$1')
      const iconName = `${camelCase(fileName, { pascalCase: true })}Icon`

      const content = removeLineBreaks(fs.readFileSync(svg, 'utf-8'))

      return [
        iconName,
        { content, fileName },
      ]
    }),
  )

  fs.writeFileSync('./scripts/_cached.json', `${JSON.stringify(newContent, null, 2)}\n`)

  return newContent
}

function camelCase(str: string, options: { pascalCase: boolean } = { pascalCase: false }) {
  const { pascalCase = false } = options

  return pascalCase ? str.replace(/(?:^|[-_])(\w)/g, (_, char) => char.toUpperCase()) : str.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
}

function removeLineBreaks(str: string) {
  return str.replace(/\r\n/g, '').replace(/\r/g, '').replace(/\n/g, '')
}

const transformers = {
  svg: {
    async transform(basePath: string, svgMap: SVGMap) {
      let mainFileContent = ''
      let iconFileContent = ''

      for (const [iconName, { fileName, content }] of Object.entries(svgMap)) {
        mainFileContent += `export { default as ${iconName} } from './${fileName}'\n`
        iconFileContent = `const icon = '${removeLineBreaks(content)}'\nexport default icon`

        fs.promises.writeFile(path.resolve(basePath, `${fileName}.ts`), iconFileContent)
      }

      return mainFileContent
    },
  },

  vue: {
    async transform(basePath: string, svgMap: SVGMap) {
      const typesFileContent = `/* eslint-disable */\n// @ts-nocheck\nexport {}
declare module '@gdsicon/vue/*' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{ width?: string, height?: string, fill?: string }>
  export default component
}
`
      let mainFileContent = ''
      let iconFileContent = ''

      for (const [iconName, { fileName, content }] of Object.entries(svgMap)) {
        mainFileContent += `export { default as ${iconName} } from './${fileName}.vue'\n`
        iconFileContent = `<template>\n  ${content}\n</template>`

        fs.promises.writeFile(path.resolve(basePath, `${fileName}.vue`), iconFileContent)
      }
      fs.promises.writeFile(path.resolve(basePath, `vue-sfc.d.ts`), typesFileContent)

      return mainFileContent
    },
  },

  react: {
    async transform(basePath: string, svgMap: SVGMap) {
      let mainFileContent = `export { shallowEqual } from './_utils'\n`
      let iconFileContent = ''

      fs.promises.writeFile(path.resolve(basePath, '_utils.ts'), `const KEYS_TO_COMPARE = ['className', 'style', 'width', 'height', 'onClick']
export const shallowEqual = (prevProps: any, nextProps: any): boolean => KEYS_TO_COMPARE.every(k => prevProps[k] === nextProps[k] || (!prevProps[k] && !nextProps[k]))`)

      for (const [iconName, { fileName, content }] of Object.entries(svgMap)) {
        const [, attributes, children] = content.match(SVG_REGEX) || []
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

        mainFileContent += `export { default as ${iconName} } from './${fileName}'\n`
        iconFileContent = `import React, { type NamedExoticComponent, type SVGProps } from 'react'\nimport { shallowEqual } from './_utils'
const ${iconName}: NamedExoticComponent<SVGProps<SVGSVGElement>> = React.memo(p => React.createElement("svg", { ${props},dangerouslySetInnerHTML:{__html:'${children}'},...p }), shallowEqual)
${iconName}.displayName = '${iconName}'\nexport default ${iconName}
`

        fs.promises.writeFile(path.resolve(basePath, `${fileName}.ts`), iconFileContent)
      }

      return mainFileContent
    },
  },
}

type WriteType = keyof typeof transformers

async function run(writeType: WriteType, svgMap: SVGMap) {
  const { transform } = transformers[writeType]

  const basePath = path.resolve(process.cwd(), 'packages', writeType, 'src')

  const fileContent = await transform(basePath, svgMap)

  const modulePaths = path.resolve(basePath, 'index.ts')

  fs.writeFileSync(modulePaths, fileContent)
}

; (async () => {
  const lastModified = isDirectoryDirty('../svg')

  let svgMap = cachedIcons as SVGMap

  if (lastModified !== metadata.lastModified) {
    updateMetadata(lastModified)
    svgMap = updateCachedIcons()
  }

  writeTypes.filter(type => type in transformers).forEach((type) => {
    run(type as WriteType, svgMap)
  })

  console.log('Generation completed')
})()
