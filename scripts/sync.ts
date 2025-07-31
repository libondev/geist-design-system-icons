import fs from 'node:fs'
import path from 'node:path'

import * as cheerio from 'cheerio'

const fallbackColors = {
  '--ds-red-700': '#e5484d',
  '--ds-blue-900': '#0068d6',
  '--ds-teal-700': '#12a594',
  '--ds-teal-600': '#45dec5',
  '--ds-blue-600': '#52aeff',
  '--ds-blue-700': '#0072f5',
  '--ds-gray-1000': '#171717',
  '--ds-gray-100': '#f2f2f2',
  '--ds-amber-800': '#ff990a',
  '--ds-purple-700': '#8e4ec6',
  '--ds-background-100': '#ffffff',
}

function processSVG(svg: string) {
  try {
    const processedSvg = svg
      .replace(/\n/g, '')
      .replace(/\r\n/g, '')
      .replace(/>(\s)+</g, '><')
      .replace(/var\((--ds-[^,)]+)\)/g, (_, variable) => {
        return `var(${variable.replace('--ds', '--color')},${fallbackColors[variable as keyof typeof fallbackColors]})`
      })
      .replace(/<svg\s([^>]*)>/i, (match) => {
        return match
          .replace(/\s(data-testid=".*?")/g, ' aria-hidden="true" ')
          //  if width/height not number, remove it
          .replace(/\s(width|height)="\d+"/g, ' $1="1em"')
          .replace(/;?color:currentColor;?/g, '')
      })
      .replace(/style=""/g, '')
      .replace(/\s+/g, ' ')

    return processedSvg
  }
  catch (error) {
    console.error('Error processing SVG:', error)
    return null
  }
}

async function sync() {
  const rawHtml = await fetch('https://vercel.com/geist/icons').then(res => res.text())

  const $ = cheerio.load(rawHtml)

  const wrapperSelector = '.grid-module__4pDFEa__grid'

  const items = $(`${wrapperSelector} .flex.h-28.w-full`)

  console.log(items.length)

  items.each((_, el) => {
    const name = $(el).find('p').text()
    const rawSvg = $(el).find('svg').prop('outerHTML')

    if (!rawSvg) {
      return
    }

    const svg = processSVG(rawSvg)

    if (!svg)
      return

    fs.writeFileSync(path.resolve('svg/', `${name}.svg`), svg)
  })
}

sync()
console.log('Sync completed')
