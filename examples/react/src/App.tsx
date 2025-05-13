import { AcronymJsIcon } from '@gdsi/react'

import AccessibilityIcon from '@gdsi/react/accessibility'

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
      </div>
    </>
  )
}

export default App
