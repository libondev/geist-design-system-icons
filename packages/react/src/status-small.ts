import React, { type NamedExoticComponent, type SVGProps } from 'react'
import { shallowEqual } from './_utils'
const StatusSmallIcon: NamedExoticComponent<SVGProps<SVGSVGElement>> = React.memo(p => React.createElement("svg", { ariaHidden:"true",height:"1em",strokeLinejoin:"round",viewBox:"0 0 16 16",width:"1em",dangerouslySetInnerHTML:{__html:'<path d="M12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z" fill="currentColor"></path>'},...p }), shallowEqual)
StatusSmallIcon.displayName = 'StatusSmallIcon'
export default StatusSmallIcon
