import { AccessibilityIcon } from '@gdsi/svg'
import AcronymJsIcon from '@gdsi/svg/acronym-js'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>

    <div style="display:flex;align-items:center;gap:1rem">
      ${AcronymJsIcon}
      ${GdsZeroConfig}
      ${AccessibilityIcon}
    </div>
  </div>
`
