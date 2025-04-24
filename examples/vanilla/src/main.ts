import { AccessibilityIcon, AcronymJsIcon } from 'gdsi/svg'
import AlphaIcon from 'gdsi/svg/alpha'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>

    <div style="display:flex;align-items:center;gap:1rem">
      ${AcronymJsIcon}
      ${GdsZeroConfig}
      ${AccessibilityIcon}
      ${AlphaIcon}
    </div>
  </div>
`
