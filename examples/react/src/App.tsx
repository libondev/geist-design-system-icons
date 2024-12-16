import Alpha from 'gdsi/raw/alpha.svg?raw'

import { AcronymJsIcon } from 'gdsi/react'

import { AccessibilityIcon } from 'gdsi/react/Accessibility.js'

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* manual import */}
        <AcronymJsIcon />

        {/* auto import */}
        <IconZeroConfig />

        {/* single import */}
        <AccessibilityIcon />

        {/* raw svg */}
        <span dangerouslySetInnerHTML={{ __html: Alpha }} />
      </div>
    </>
  )
}

export default App
