import fs from 'node:fs'
import path from 'node:path'

import * as cheerio from 'cheerio'

async function sync() {
  const rawHtml = await fetch('https://vercel.com/geist/icons')
    .then(res => res.text())

  const $ = cheerio.load(rawHtml)

  $('.grid_gridSystemLazyContent__qAuyX .flex.h-28.w-full').each((_, el) => {
    const name = $(el).find('.text_wrapper__i87JK').text()
    const svg = $(el)
      .find('svg')
      .prop('outerHTML')!
      .replace(/\n/g, '')
      .replace(/>(\s)+</g, '><')
      .replace('var(--ds-red-700)', 'var(--ds-red-700,#e5484d)')
      .replace('var(--ds-blue-900)', 'var(--ds-blue-900,#0068d6)')
      .replace('var(--ds-teal-700)', 'var(--ds-teal-700,#12a594)')
      .replace('var(--ds-teal-600)', 'var(--ds-teal-600,#45dec5)')
      .replace('var(--ds-blue-600)', 'var(--ds-blue-600,#52aeff)')
      .replace('var(--ds-blue-700)', 'var(--ds-blue-700,#0072f5)')
      .replace('var(--ds-gray-1000)', 'var(--ds-gray-1000,#171717)')
      .replace('var(--ds-gray-100)', 'var(--ds-gray-100,#f2f2f2)')
      .replace('var(--ds-amber-800)', 'var(--ds-amber-800,#ff990a)')
      .replace('var(--ds-purple-700)', 'var(--ds-purple-700,#8e4ec6)')
      .replace('var(--ds-background-100)', 'var(--ds-background-100,#ffffff)')
      .replace(/<svg\s([^>]*)>/i, m => m.replace(/\s((width|height|data-testid|style)=".*?")/g, ''))

    fs.writeFileSync(path.resolve('svg/', `${name}.svg`), svg)
  })
}

sync()
