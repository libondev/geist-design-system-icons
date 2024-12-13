import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import glob from 'fast-glob'

import cachedIcons from './_cached.json' assert { type: 'json' }
import metadata from './_metadata.json' assert { type: 'json' }

type SVGMap = Record<string, string>

const writeTypes = process.argv.slice(2)

function isDirectoryDirty(_path: string) {
  const stats = fs.statSync(fileURLToPath(new URL(_path, import.meta.url)))

  return stats.mtime.toLocaleString()
}

function updateMetadata(modifiedAt: string) {
  metadata.lastModified = modifiedAt

  fs.writeFileSync('../src/core/_metadata.json', `${JSON.stringify(metadata, null, 2)}\n`)
}

function updateCachedIcons() {
  const newContent: SVGMap = Object.fromEntries(
    glob.sync('svg/*.svg', { cwd: process.cwd() }).map((svg) => {
      const fileName = svg.replace(/svg\/(.*?)\.svg/, '$1')
      const camelCaseName = fileName.replace(/-/g, (_, index) => (index === 0 ? '' : '-'))
      const svgName = `${camelCaseName.slice(0, 1).toUpperCase() + camelCaseName.slice(1)}Icon`

      const svgContent = fs.readFileSync(svg, 'utf-8').replace(/\r\n\s*/g, '')

      return [svgName, svgContent]
    }),
  )

  fs.writeFileSync('../src/core/_cached.json', `${JSON.stringify(newContent, null, 2)}\n`)

  return newContent
}

async function run(writeType: string, svgMap: SVGMap) {
  let fileContent = '// This file is generated by script/gen.ts, Please do not modify it manually.\n\n'

  const SVGRegex = /<svg\s?([^>]*)>([\s\S]*?)<\/svg>/
  const fileHandler = {
    vue() {
      fileContent += `import { defineComponent, h } from 'vue'\n\n`

      for (const [name, content] of Object.entries(svgMap)) {
        const [, attributes, children] = content.match(SVGRegex) || []
        const props = attributes.replace(/(?<=") (?=\w+=)/g, ',').replace(/=/g, ':').replace(/([\w-]+):/g, '"$1":')

        fileContent += `export const ${name} = defineComponent(() => () => h('svg', { innerHTML: '${children}', ${props} }), { name:'${name}' })\n`
      }
    },
    react() {
      fileContent += `import { createElement, memo, type SVGProps, type HTMLAttributes } from 'react'\n\n`

      for (const [name, content] of Object.entries(svgMap)) {
        const [, attributes, children] = content.match(SVGRegex) || []
        const props = attributes.split(/(?<=") (?=\w+=)/g)
          .map((item) => {
            const [key, value] = item.split('=')
            const camelCase = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())

            return `${camelCase}: ${value}`
          })
          .join(', ')

        fileContent += `export const ${name} = memo<HTMLOrSVGElement>(function ${name}(_p: SVGProps<SVGSVGElement> & HTMLAttributes<'svg'>) { return createElement('svg', { ${props}, ..._p, dangerouslySetInnerHTML: { __html: '${children}' } }) })\n`
      }
    },
    vanilla() {
      for (const [name, content] of Object.entries(svgMap)) {
        fileContent += `export const ${name} = '${content}'\n`
      }
    },
  }

  fileHandler[writeType as keyof typeof fileHandler]()

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

  writeTypes.forEach((type) => {
    run(type, svgMap)
  })
})()
