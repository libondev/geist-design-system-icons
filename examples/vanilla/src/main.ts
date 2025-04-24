import { AccessibilityIcon, AcronymJsIcon, AlphaIcon } from 'gdsi/svg'

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
