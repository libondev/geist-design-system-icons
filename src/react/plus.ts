import React, { type NamedExoticComponent, type SVGProps } from 'react'
import { shallowEqual } from './_utils'
const PlusIcon: NamedExoticComponent<SVGProps<SVGSVGElement>> = React.memo(p => React.createElement("svg", { ariaHidden:"true",height:"1em",strokeLinejoin:"round",viewBox:"0 0 16 16",width:"1em",dangerouslySetInnerHTML:{__html:'<path fill-rule="evenodd" clip-rule="evenodd" d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z" fill="currentColor"></path>'},...p }), shallowEqual)
PlusIcon.displayName = 'PlusIcon'
export default PlusIcon
