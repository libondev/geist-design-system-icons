import React, { type NamedExoticComponent, type SVGProps } from 'react'
import { shallowEqual } from './_utils'
const PauseIcon: NamedExoticComponent<SVGProps<SVGSVGElement>> = React.memo(p => React.createElement("svg", { ariaHidden:"true",height:"1em",strokeLinejoin:"round",viewBox:"0 0 16 16",width:"1em",dangerouslySetInnerHTML:{__html:'<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 2.5V1.75H4V2.5V13.5V14.25H5.5V13.5V2.5ZM12 2.5V1.75H10.5V2.5V13.5V14.25H12V13.5V2.5Z" fill="currentColor"></path>'},...p }), shallowEqual)
PauseIcon.displayName = 'PauseIcon'
export default PauseIcon
