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
      .replace(/\s((width|height|data-testid|style)=".*?")/g, '')
      .replace(/\r\n/g, '')

    fs.writeFileSync(path.resolve('svg/', `${name}.svg`), svg)
  })
}

sync()
