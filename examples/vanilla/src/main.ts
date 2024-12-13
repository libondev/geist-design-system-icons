import { AccessibilityIcon } from 'gdsi'
import accessibility from 'gdsi/svg/accessibility.svg?raw'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>

    <div style="display:flex;align-items:center">
      ${AccessibilityIcon}
      ${accessibility}
    </div>
  </div>
`
