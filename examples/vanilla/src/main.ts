import { AccessibilityIcon } from 'gdsi'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>

    <div style="display:flex;align-items:center;font-size:20px">
      <div style="width:3em">
        ${AccessibilityIcon}
      </div>
      <div style="width:3em">
        ${GdsZeroConfig}
      </div>
    </div>
  </div>
`
