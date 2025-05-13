import fs from 'node:fs/promises'
import process from 'node:process'
import glob from 'fast-glob'

const files = glob.sync('./dist/*.d.ts', { cwd: process.cwd() })

const simplifyRegex = / =(.*?);/

for await (const file of files) {
  const fileContent = await fs.readFile(file, 'utf-8')

  await fs.writeFile(file, fileContent.replace(simplifyRegex, ': string'))
}
