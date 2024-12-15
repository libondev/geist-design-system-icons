import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import glob from 'fast-glob'

import cachedIcons from './_cached.json' assert { type: 'json' }
import metadata from './_metadata.json' assert { type: 'json' }

type SVGMap = Record<string, string>

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
      const iconName = `${camelCase(svg.replace(RENAME_REGEX, '$1'), { pascalCase: true })}Icon`

      const contents = fs.readFileSync(svg, 'utf-8')

      return [iconName, contents]
    }),
  )

  fs.writeFileSync('./scripts/_cached.json', `${JSON.stringify(newContent, null, 2)}\n`)

  return newContent
}

function camelCase(str: string, options: { pascalCase: boolean } = { pascalCase: false }) {
  const { pascalCase = false } = options

  return pascalCase ? str.replace(/(?:^|[-_])(\w)/g, (_, char) => char.toUpperCase()) : str.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
}

const transformers = {
  async svg(fileHead: string, svgMap: SVGMap) {
    let fileContent = fileHead

    for (const [name, content] of Object.entries(svgMap)) {
      fileContent += `export const ${name} = '${content}'\n`
    }

    return fileContent
  },
  async vue(fileHead: string, svgMap: SVGMap) {
    let fileContent = `${fileHead}import { defineComponent, h } from 'vue'\n\n`

    for (const [name, content] of Object.entries(svgMap)) {
      const [, attributes, children] = content.match(SVG_REGEX) || []
      const props = attributes?.split(BREAK_PROPS_REGEX)
        .map((attr) => {
          const [key, ...values] = attr.split('=')
          const value = values.join('=').replace(QUOTE_REGEX, '')

          return `"${key}":"${value}"`
        })

      fileContent += `export const ${name} = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'${children}',${props},...c.attrs });return () => $ }, { name:'${name}' })\n`
    }

    return fileContent
  },
  async react(fileHead: string, svgMap: SVGMap) {
    let fileContent = `${fileHead}import React,{ type NamedExoticComponent, type SVGProps } from 'react'\n`
    // fileContent += `type MF = (props: SVGProps<SVGSVGElement>) => JSX.Element\n\n`
    fileContent += `type MF = NamedExoticComponent<SVGProps<SVGSVGElement>>\n\n`

    for (const [name, content] of Object.entries(svgMap)) {
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

      fileContent += `export const ${name}: MF = React.memo(p => React.createElement("svg", { ${props},dangerouslySetInnerHTML:{__html:'${children}'},...p }))`
      fileContent += `\n${name}.displayName = '${name}'\n\n`
    }

    return fileContent
  },
}

type WriteType = keyof typeof transformers

async function run(writeType: WriteType, svgMap: SVGMap) {
  const fileHead = '// This file is generated by script/gen.ts, please do not modify it manually.\n'

  const fileContent = await transformers[writeType](fileHead, svgMap)

  const modulePaths = path.resolve(process.cwd(), 'src', `${writeType}.ts`)

  fs.writeFileSync(modulePaths, fileContent)
}

; (async () => {
  const lastModified = isDirectoryDirty('../svg')

  let svgMap: SVGMap = cachedIcons

  if (lastModified !== metadata.lastModified) {
    updateMetadata(lastModified)
    svgMap = updateCachedIcons()
  }

  writeTypes.filter(type => type in transformers).forEach((type) => {
    run(type as WriteType, svgMap)
  })
})()
