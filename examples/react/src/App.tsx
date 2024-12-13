import { AccessibilityIcon } from 'gdsi/react'

import accessibility from 'gdsi/svg/accessibility.svg?raw'
import { useEffect, useRef } from 'react'

function App() {
  const htmlRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (htmlRef.current) {
      htmlRef.current.innerHTML = accessibility
    }
  }, [accessibility])

  return (
    <>
      <h1>Vite + React</h1>

      <div style={{ width: '5em', height: '5em' }} ref={htmlRef}></div>

      <AccessibilityIcon width="5em" />
    </>
  )
}

export default App
