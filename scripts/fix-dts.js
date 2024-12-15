import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const icons = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts/_cached.json'), 'utf8'))

fs.writeFileSync(
  path.join(process.cwd(), 'dist/svg.d.ts'),
  `export const icons: {
  ${Object.keys(icons).map(key => `${key}: string`).join('\n  ')}
};

export default icons;
`,
)
